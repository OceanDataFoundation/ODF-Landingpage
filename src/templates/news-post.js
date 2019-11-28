import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo/seo'

// Components
import Layout from '../components/site-layout/Layout'
import { Container } from '../components/container/Container'
import {
  Article,
  ArticleContainer,
  ArticleContent,
} from '../components/article/Article'
import { Header } from '../components/header/Header'
import { H1 } from '../components/typography/heading/Heading'
import { Meta } from '../components/meta/Meta'
import { Figure } from '../components/figure/Figure'
import { Figcaption } from '../components/figcaption/Figcaption'
import P from '../components/typography/paragraph/Paragraph'
import { TagList } from '../components/tag-list/TagList'
import LinkButton from '../components/link-button/LinkButton'

const NewsPostTemplate = ({ data }) => {
  const {
    title,
    createdAt,
    excerpt,
    author,
    content,
    image,
    imageCaption,
    tags,
  } = data.contentfulNews

  return (
    <Layout>
      <SEO title={title} />

      <Container offset="true">
        <Article>
          <Header>
            <Meta>
              {createdAt}&nbsp;&nbsp;|&nbsp;&nbsp;By: {author}
            </Meta>
            <H1>{title}</H1>
            <P lead>{excerpt}</P>
          </Header>
          {image && (
            <Figure>
              <Img fluid={image.fluid} style={{ maxHeight: '600px' }} />
              {imageCaption && (
                <Figcaption as="figcaption">
                  {imageCaption.imageCaption}
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

          <LinkButton to="/news/" showArrow alignCenter>
            See all posts
          </LinkButton>
        </Article>
      </Container>
    </Layout>
  )
}

export default NewsPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      excerpt
      author
      image {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyContentfulFluid
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
