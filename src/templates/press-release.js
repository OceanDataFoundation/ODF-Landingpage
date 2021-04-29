import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import {ArrowLeft} from '../components/arrow/ArrowLeft'
import {
  Article,
  ArticleContainer,
  ArticleContent,
} from '../components/article/Article'
import { Container } from '../components/container/Container'
// Components
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Figcaption } from '../components/figcaption/Figcaption'
import { Figure } from '../components/figure/Figure'
import { Header } from '../components/header/Header'
import Line  from '../components/line/Line'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
// Utils
import { space } from '../utils/configs/confSpace.js'

const NewsPage = ({ data }) => {
  const {
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

      <FullWidthContainer offset="true">
        <Header style={{marginBottom: "12px"}}>
          <Link to="/communication/news/1">
            <ArrowLeft style={{marginBottom:"40px"}} />
            <H1 size="larger">Press release</H1>
          </Link>
          <Line />
        </Header>

        <Container fluid>
          <Article>
            {image && (
              <Figure coverImage>
                <Img fluid={image.fluid} style={{ maxHeight: '600px' }} />
                {imageCaption && (
                  <Figcaption as="figcaption">
                    {imageCaption.imageCaption && imageCaption.imageCaption}
                  </Figcaption>
                )}
              </Figure>
            )}

            <ArticleContainer>
            <H1>{title && title}</H1>
              {excerpt && (
                <P lead style={{ marginTop: `${space[6]}` }}>
                  {excerpt}
                </P>
              )}

              <ArticleContent>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.childMarkdownRemark.html,
                  }}
                />

              </ArticleContent>
            </ArticleContainer>
          </Article>
        </Container>
        <Link to="/communication/press/1" style={{borderBottom: "none"}}>
          <ArrowLeft style={{marginBottom:"40px"}} />
        </Link>
      </FullWidthContainer>
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query NewsQuery($slug: String) {
    news: contentfulNews(slug: { eq: $slug }) {
      title
      slug
      excerpt
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
