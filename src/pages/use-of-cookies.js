import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import {
  Article,
  ArticleContainer,
  ArticleContent,
} from '../components/article/Article'
// Components
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line from '../components/line/Line'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { H1 } from '../components/typography/heading/Heading'

const CookiesPage = ({ data }) => {
  const page = data.contentfulPage
  const { title, content, metaDescription } = page

  return (
    <Layout>
      <SEO title={title} description={metaDescription} />
      <FullWidthContainer offset="true">
          <Header>
            <H1>{title}</H1>
            <Line />
          </Header>

          <ArticleContainer style={{ paddingLeft: '0' }}>
            <ArticleContent style={{ marginTop: '0' }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.childMarkdownRemark.html,
                }}
              />
            </ArticleContent>
          </ArticleContainer>
      </FullWidthContainer>
    </Layout>
  )
}

export default CookiesPage

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: { eq: "5XOW93nZ6sGRHMAUUa66SM" }) {
      title
      subtitle
      metaDescription
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

CookiesPage.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      content: PropTypes.object.isRequired,
      metaDescription: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
    })
  ).isRequired,
}
