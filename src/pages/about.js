import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Accordion from '../components/accordion/Accordion'
// Components
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const AboutPage = ({ data }) => {
  const personList = data.allContentfulPersonList.edges

  return (
    <Layout>
      <SEO title="The Ocean Data Foundation team" />

      <FullWidthContainer offset="true">
        {personList.map(({ node: team }) => (
            <Accordion key={team.id} title={team.title}>
              <Container fluid col="3">
              {team.persons.map(person => {
                return (
                  <div key={person.id}>
                    {person.portrait && <TeamMemberImage
                      fluid={person.portrait.fluid}
                      />}
                    <Name>{person.fullName}</Name>
                    <p>{person.role}</p>
                  </div>
                )})}
              </Container>
            </Accordion>
        ))}
      </FullWidthContainer>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
  allContentfulPersonList {
    edges {
      node {
        title
        id
        persons {
          fullName
          role
          id
          portrait {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
  }
`

AboutPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

const Name = styled.h6`
  font-weight: bold;
  margin: 0;
`
const TeamMemberImage = styled(Img)`
  width: 100%;
  height: 320px;
  margin-bottom: 20px;
  margin-top: 10px;

  img {
    object-fit: scale-down;

    ${mediaQuery.BREAKPOINT_3`
      object-fit: cover;
    `};
  }
`