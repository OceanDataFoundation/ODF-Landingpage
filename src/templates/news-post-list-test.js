import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/site-layout/Layout'

// Components
import { Container } from '../components/container/Container'
import {
  Article,
  ArticleContainer,
  ArticleContent,
} from '../components/article/Article'
import { Header } from '../components/header/Header'
import { Meta } from '../components/meta/Meta'
import { Figure } from '../components/figure/Figure'
import { Figcaption } from '../components/figcaption/Figcaption'
import { TagList } from '../components/tag-list/TagList'
import LinkButton from '../components/link-button/LinkButton'

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

        <LinkButton to="/blog/page/1" showArrow alignCenter>
          See all posts
        </LinkButton>
      </Container>
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query NewsQuery($slug: String) {
    news: contentfulTest(slug: { eq: $slug }) {
      title
      slug
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
