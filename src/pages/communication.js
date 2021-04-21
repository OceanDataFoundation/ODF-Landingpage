import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { ArrowRight } from '../components/arrow/ArrowRight'
// Components
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Line } from '../components/line/Line'
import LinkBlock from '../components/link-block/LinkBlock'
import LinkCta from '../components/link-cta/LinkCta'
import { Meta } from '../components/meta/Meta'
import PressRelease from '../components/press-release/PressRelease'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { TBody, Table, TableWrapper, Td, Tr } from '../components/table/Table'
import Time from '../components/time/Time'
import { H1, H2, H3 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { Strong } from '../components/typography/strong/Strong'
// Config
import { space } from '../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'
// Tokens
import { colorNeutral } from '../utils/tokens/tokenColorBrand'

const Communication = ({ data }) => {

  const pressReleases = data.allContentfulPressRelease.edges
  const articles = data.allContentfulPerspective.edges

  const events = data.allContentfulEvents.edges

  return (
    <Layout>
    <SEO title="Communication" />
      <FullWidthContainer offset="true">
        <Header>
          <H1>News</H1>
          <Line />
        </Header>
        <PressRelease>
          {articles.map(({ node: article }) => (
            <LinkBlock
              to={`/communication/news/${article.slug}`}
              key={article.id}>
                {article.coverImage && (
                  <Img
                    fluid={article.coverImage.fluid}
                    style={{ minHeight: '329px', maxHeight: '329px' }}
                  />
                )}
                <H3 style={{ marginBottom: '1rem' }}>{article.title}</H3>
                <P style={{ margin: '2rem 0' }}>{article.teaser}</P>
                <ArrowRight />
            </LinkBlock>
          ))}
        </PressRelease>

        <Link href="/communication/news/1">
          <LinkText>
            All news
          </LinkText>
          <ArrowRight />
          </Link>
      </FullWidthContainer>

      <FullWidthContainer>
        <Header>
        <H1>Press release</H1>
          <Line />
        </Header>
        <PressRelease>
          {pressReleases.map(({ node: post }) => (
            <div key={post.id}>
              <H3>{post.title}</H3>
              <Meta>
                {post.location} | <Time dateTime={post.date} />
              </Meta>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.childMarkdownRemark.html,
                }}
              />
              {post.link && (
                <Link href={post.link} target="_blank"
                rel="noopener noreferrer">
                <ArrowRight />
                </Link>
              )}
            </div>
          ))}
        </PressRelease>

        <Link href="/communication/press/1">
          <LinkText>
            All press releases
          </LinkText>
          <ArrowRight />
        </Link>

      </FullWidthContainer>

      <FullWidthContainer style={{ marginTop: '80px' }}>
        <Header>
          <H2>  Events</H2>
          <Line />
        </Header>
        <TableWrapper>
          <Table>
            <TBody>
              {events.map(({ node: post }) => (
                <Tr key={post.id}>
                  <Td>
                    <Strong>
                      {!post.toDate
                        ? `${post.fromDate}`
                        : `${post.fromDate.split(' ')[0]} - ${post.toDate}`}
                    </Strong>
                  </Td>
                  <Td>
                    <Strong>{post.title}</Strong>
                    <br />
                    {post.location && post.location}
                  </Td>
                  <Td>
                    {post.link && (
                      <LinkCta
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        Visit event site
                      </LinkCta>
                    )}
                  </Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </TableWrapper>
      </FullWidthContainer>
    </Layout>
  )
}

export default Communication

export const query = graphql`
  query CommuncationPageQuery {
    allContentfulPerspective(
      limit: 3
      sort: { order: DESC, fields: [publicationDate] }
    ) {
      edges {
        node {
          id
          publicationDate(formatString: "MMMM D, YYYY")
          title
          teaser
          slug
          coverImage {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulPressRelease(limit: 3, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          location
          date(formatString: "MMMM D, YYYY")
          excerpt {
            childMarkdownRemark {
              html
            }
          }
          link
        }
      }
    }
    allContentfulEvents(sort: { fields: [fromDate], order: ASC }) {
      edges {
        node {
          id
          title
          location
          fromDate(formatString: "D MMMM, YYYY")
          toDate(formatString: "D MMMM, YYYY")
          link
        }
      }
    }
  }
`

Communication.propTypes = {
  data: PropTypes.shape({
    allContentfulEvents: PropTypes.object.isRequired,
    allContentfulPerspective: PropTypes.object.isRequired,
    allContentfulPressRelease: PropTypes.object.isRequired,
  }),
}

const Header = styled.div``;

const Link = styled.a`
  padding-bottom: ${space[2]};
  color: ${colorNeutral.NEUTRAL_TINT_100};
  text-decoration: none;
  font-size: 36px;
  border-bottom: 0px;
  display: flex;
  align-items: center;
  margin-bottom: 6rem;

  &:hover {
   ${ArrowRight} {
    transform: translateX(20px);
   }
  }

`;

const LinkText = styled.div`
  margin-right: ${space[4]};
  font-weight: 500;

  ${mediaQuery.BREAKPOINT_2`
      margin-right: ${space[6]};
  `};
`;