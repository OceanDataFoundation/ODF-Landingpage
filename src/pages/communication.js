import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Article } from '../components/article/Article'
import { Author } from '../components/author/Author'
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import LinkBlock from '../components/link-block/LinkBlock'
import LinkButton from '../components/link-button/LinkButton'
import LinkCta from '../components/link-cta/LinkCta'
import { Meta } from '../components/meta/Meta'
import PressRelease from '../components/press-release/PressRelease'
import SEO from '../components/seo/seo'
// Components
import Layout from '../components/site-layout/Layout'
import { TBody, Table, TableWrapper, Td, Tr } from '../components/table/Table'
import Time from '../components/time/Time'
import { H1, H2, H3 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { Strong } from '../components/typography/strong/Strong'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const Communcation = ({ data }) => {
  const { title, metaDescription } = data.contentfulPage

  const pressReleases = data.allContentfulPressRelease.edges
  const articles = data.allContentfulPerspective.edges

  const events = data.allContentfulEvents.edges

  return (
    <Layout>
    <SEO title="Communication" />
          <FullWidthContainer offset>
            <H1>News</H1>
            <PressRelease>
              {articles.map(({ node: article }) => (
                <LinkBlock
                  to={`/communcation/${article.slug}`}
                  key={article.id}>
                  <Article key={article.id}>
                    {article.coverImage && (
                      <Img
                        fluid={article.coverImage.fluid}
                        style={{ maxHeight: '240px' }}
                      />
                    )}
                    <H3 style={{ marginBottom: '1rem' }}>{article.title}</H3>
                    <P style={{ margin: '1rem 0' }}>{article.teaser}</P>
                    <Author
                      name={article.author.name}
                      picture={article.author.picture.fixed}
                    />
                  </Article>
                </LinkBlock>
              ))}
            </PressRelease>
            <LinkButton to="/communcation/1" showArrow pressRelease>
              More news
            </LinkButton>
          </FullWidthContainer>


          <FullWidthContainer>
            <H1>Press release</H1>
            <PressRelease>
              {pressReleases.map(({ node: post }) => (
                <Article key={post.id}>
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
                    <LinkCta
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      Read more
                    </LinkCta>
                  )}
                </Article>
              ))}
            </PressRelease>
            <LinkButton to="/communcation/" showArrow pressRelease>
              See all
            </LinkButton>
          </FullWidthContainer>

      <FullWidthContainer style={{ marginTop: '80px' }}>
        <H2>Upcoming Events</H2>
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

export default Communcation

export const query = graphql`
  query CommuncationPageQuery {
    contentfulPage(contentful_id: { eq: "2P6qkdN2Lx8fhXd3VOyKLx" }) {
      title
      metaDescription
    }
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
          author {
            name
            picture {
              fixed(width: 80) {
                ...GatsbyContentfulFixed
              }
            }
          }
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

Communcation.propTypes = {
  data: PropTypes.shape({
    allContentfulEvents: PropTypes.object.isRequired,
    allContentfulPerspective: PropTypes.object.isRequired,
    allContentfulPressRelease: PropTypes.object.isRequired,
    contentfulPage: PropTypes.object.isRequired,
  }),
}

const NewsContainer = styled(Container)`
  grid-template-columns: repeat(1, 100%);

  ${mediaQuery.BREAKPOINT_3`
    grid-template-columns: repeat(1, 100%);
    margin-top: 5rem;
  `};
`;

const EventsContainer = styled(Container)`
  grid-template-columns: repeat(1, 100%);

  ${mediaQuery.BREAKPOINT_3`
  grid-template-columns: repeat(1, 100%);
  `};
`;

const PressReleaseContainer = styled(Container)`
  grid-template-columns: repeat(1, 100%);

  ${mediaQuery.BREAKPOINT_3`
  grid-template-columns: repeat(3, 1fr);
  `};
`;
