import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Partner } from '../components/partner/Partner'
import SEO from '../components/seo/seo'
// Components
import Layout from '../components/site-layout/Layout'
import { H1 } from '../components/typography/heading/Heading'

const Partners = ({ data }) => {

  const {nodes} = data.allContentfulPartner;

  return (
    <Layout>
      <SEO title="Partners" />

      <FullWidthContainer offset="true">
        <H1>Partners</H1>
        <Container col="3" fluid>
          {nodes.map(partner => <Partner key={partner.id} partner={partner} />)}
        </Container>
      </FullWidthContainer>

    </Layout>
  )
}

export default Partners

export const query = graphql`
  query PartnerQuery {
    allContentfulPartner {
      nodes {
        description {
          description
        }
        name
        url
        id
        logo {
          description
          title
          fluid(maxWidth: 200) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

Partners.propTypes = {
  data: PropTypes.shape({
    allContentfulPartner: PropTypes.object.isRequired,
  }),
}
