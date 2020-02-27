import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

// Components
import { Container } from '../components/container/Container'
import {
  Article,
  ArticleContainer,
  ArticleContent,
} from '../components/article/Article'
import { Header } from '../components/header/Header'
import { Meta } from '../components/meta/Meta'
import { H1 } from '../components/typography/heading/Heading'

const CookiesPage = ({ data }) => {
  const page = data.contentfulPage
  const { createdAt, title, content, metaDescription } = page

  return (
    <Layout>
      <SEO title={title} description={metaDescription} />
      <Container offset="true">
        <Article>
          <Header>
            <Meta>{createdAt}</Meta>
            <H1>{title}</H1>
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
        </Article>
      </Container>
    </Layout>
  )
}

export default CookiesPage

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: { eq: "5XOW93nZ6sGRHMAUUa66SM" }) {
      createdAt(formatString: "MMMM DD, YYYY")
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
      createdAt: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ).isRequired,
}
