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
  const partners = data.allContentfulPartner.edges
  console.log('partners -> partners', partners)
  return (
    <Layout>
      <SEO title="Partners - Ocean Data Foundation " />
      <Container offset="true">
        <Header>
          <H1>Partners</H1>
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
