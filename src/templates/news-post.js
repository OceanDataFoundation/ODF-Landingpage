import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import {
  Article,
  ArticleContainer,
  ArticleContent,
} from '../components/article/Article'
// Components
import { Container } from '../components/container/Container'
import { Figcaption } from '../components/figcaption/Figcaption'
import { Figure } from '../components/figure/Figure'
import { Header } from '../components/header/Header'
import LinkButton from '../components/link-button/LinkButton'
import { Meta } from '../components/meta/Meta'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { TagList } from '../components/tag-list/TagList'
import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'

const NewsPage = ({ data }) => {
  const {
    createdAt,
    author,
    title,
    excerpt,
    image,
    imageCaption,
    tags,
    content,
  } = data.news

  return (
    <Layout>
      <SEO
        title={title}
        metaDescription={excerpt}
        image={`https:${image.file.url}`}
      />

      <Container offset="true">
        <Article>
          <Header>
            <Meta>
              {createdAt}&nbsp;&nbsp;|&nbsp;&nbsp;By: {author && author}
            </Meta>
            <H1>{title && title}</H1>
            <P lead>{excerpt && excerpt}</P>
          </Header>

          {image && (
            <Figure>
              <Img fluid={image.fluid} style={{ maxHeight: '600px' }} />
              {imageCaption && (
                <Figcaption as="figcaption">
                  {imageCaption.imageCaption && imageCaption.imageCaption}
                </Figcaption>
              )}
            </Figure>
          )}

          <ArticleContainer>
            <ArticleContent>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.childMarkdownRemark.html,
                }}
              />

              {tags && (
                <TagList>
                  {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </TagList>
              )}
            </ArticleContent>
          </ArticleContainer>
        </Article>
      </Container>
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query NewsQuery($slug: String) {
    news: contentfulNews(slug: { eq: $slug }) {
      title
      slug
      createdAt(formatString: "MMMM DD, YYYY")
      excerpt
      author
      image {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
      imageCaption {
        imageCaption
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`

NewsPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object.isRequired),
}
