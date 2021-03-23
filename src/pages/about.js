import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import { Box } from '../components/box/Box'
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import PressRelease from '../components/press-release/PressRelease'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { H1, H2 } from '../components/typography/heading/Heading'
import { SubHeading } from '../components/typography/sub-heading/SubHeading'
// Config
import { space } from '../utils/configs/confSpace'
import { typeScale } from '../utils/configs/confTypeScale'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'
// Styles
import { Transition } from '../utils/styles/utility-classes/transition'
// Tokens
import { colorNeutral } from '../utils/tokens/tokenColorBrand'

const TeamMember = styled.div`
  position: relative;
  overflow: hidden;
`

const TeamMemberImage = styled(Img)`
  width: 100%;
  height: 320px;

  img {
    object-fit: scale-down;

    ${mediaQuery.BREAKPOINT_3`
      object-fit: cover;
    `};
  }

  ${mediaQuery.BREAKPOINT_3`
    height: 480px;
  `};
`

const TeamMemberInfo = styled.div`
  padding: ${space[2]} ${space[4]} ${space[5]} ${space[4]};
  position: relative;
  background-color: ${colorNeutral.NEUTRAL_TINT_100};

  ${mediaQuery.BREAKPOINT_3`
    width: 100%;
    height: 100%;
    padding: ${space[4]} ${space[6]} ${space[6]} ${space[6]};
    position: absolute;
    top: ${space[8]};
    opacity: 0;
    visibility: hidden;

    ${Transition};

    ${TeamMember}:hover & {
      top: 0;
      opacity: 0.95;
      visibility: visible;
    }
  `};
`

const TeamMemberName = styled(H2)`
  ${typeScale.TEXT_PRESET_4};
`

const TeamMemberAddress = styled.address`
  margin-top: ${space[4]};
  line-height: 2;
`

const AboutPage = ({ data }) => {
  const teamPage = data.allContentfulPage.edges
  const teamPosts = data.allContentfulTeam.edges

  return (
    <Layout>
      <SEO title="The Ocean Data Foundation team" />

      <FullWidthContainer offset="true">
        {teamPage.map(({ node: post }) => (
          <div key={post.id}>
            <Header>
              <H1>{post.title}</H1>
            </Header>
            <Header
              as="div"
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html,
              }}
            />
          </div>
        ))}
      </FullWidthContainer>

      <FullWidthContainer>
            <SubHeading>Meet the team</SubHeading>
            <PressRelease columnGap="small" columnWidth="large">
              {teamPosts.map(({ node: post }) => (
                <TeamMember key={post.id}>
                  {post.image && <TeamMemberImage fluid={post.image.fluid} />}
                  <TeamMemberInfo>
                    <TeamMemberName>{post.name && post.name}</TeamMemberName>
                    {post.title && post.title}
                    <br />
                    {post.location && post.location}
                    <br />
                    <TeamMemberAddress>
                      {post.phone && (
                        <>
                          <a href={`tel: ${post.phone}`}>{post.phone}</a>
                          <br />
                        </>
                      )}
                      {post.email && (
                        <>
                          <a href={`mailto: ${post.email}`} title={post.email}>
                            E-mail
                          </a>
                          <br />
                        </>
                      )}
                      {post.linkedIn && (
                        <a
                          href={post.linkedIn}
                          rel="noopener noreferrer"
                          target="_blank">
                          LinkedIn
                        </a>
                      )}
                    </TeamMemberAddress>
                  </TeamMemberInfo>
                </TeamMember>
              ))}
            </PressRelease>
          </FullWidthContainer>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    allContentfulPage(
      filter: { contentful_id: { eq: "6Y54nuw3s7Nk1tNOAopLGd" } }
    ) {
      edges {
        node {
          id
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulTeam(sort: { order: ASC, fields: [name] }) {
      edges {
        node {
          id
          image {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
          name
          title
          location
          phone
          email
          linkedIn
        }
      }
    }
  }
`

AboutPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
