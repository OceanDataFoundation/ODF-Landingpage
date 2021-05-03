import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line from '../components/line/Line'
import { Partner } from '../components/partner/Partner'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const Partners = ({ data }) => {

  const {nodes} = data.allContentfulPartner;

  return (
    <Layout>
      <SEO title="Partners" />

      <FullWidthContainer offset="true">

      <Header style={{marginBottom: "12px"}}>
        <H1 size="larger">Partners</H1>
        <Line />
      </Header>

        <CustomP lead>
        We strongly believe that partnerships with others that share our vision is the way to create solutions for a productive and healthy ocean. We are growing and continuously looking to join forces with new partners and projects from science, civil society, public and the private sectors.
        </CustomP>

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

const CustomP = styled(P)`
    ${mediaQuery.BREAKPOINT_3`
      width: 50%;
    `};
`;