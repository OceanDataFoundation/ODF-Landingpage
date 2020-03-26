import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

// Tokens
// import { colorNeutral } from '../utils/tokens/tokenColorNeutral'

// Components
import { Container } from '../components/container/Container'
import { Header } from '../components/header/Header'
import { H1 } from '../components/typography/heading/Heading'
import { Partner } from '../components/partner/Partner'

const PartnersPage = ({ data }) => {
  console.log('PartnersPage -> data', data)
  const partners = data.allContentfulPartner.edges
  const { page } = data
  return (
    <Layout>
      <SEO title={page.title} />
      <Container offset="true">
        <Header>
          <H1>{page.title}</H1>
          {page.content && (
            <Header
              as="div"
              dangerouslySetInnerHTML={{
                __html: page.content.childMarkdownRemark.html,
              }}
            />
          )}
        </Header>
        {partners.map(({ node }) => (
          <Partner partner={node} key={node.id} />
        ))}
      </Container>
    </Layout>
  )
}

export default PartnersPage

export const pageQuery = graphql`
  query PartnerPageQuery {
    page: contentfulPage(id: { eq: "0114f4de-8ebd-5c58-ad57-970fdbf8b010" }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulPartner {
      edges {
        node {
          id
          name
          description {
            description
          }
          logo {
            fixed(width: 224, height: 224) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

PartnersPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
