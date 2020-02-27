import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// Tokens
import { colorNeutral } from '../utils/tokens/tokenColorNeutral'

// Components
import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

import { Container } from '../components/container/Container'
import { Box } from '../components/box/Box'
import Hero from '../components/hero/Hero'
import Intro from '../components/intro/Intro'
import Blockquote from '../components/blockquote/Blockquote'
import Statement from '../components/statement/Statement'
import LinkBlock from '../components/link-block/LinkBlock'
import PressRelease from '../components/press-release/PressRelease'
import { Meta } from '../components/meta/Meta'
import Time from '../components/time/Time'
import { Article } from '../components/article/Article'
import Video from '../components/video/Video'
import { TableWrapper, Table, TBody, Tr, Td } from '../components/table/Table'
import LinkCta from '../components/link-cta/LinkCta'
import LinkButton from '../components/link-button/LinkButton'
import { ArrowDown } from '../components/arrow-down/ArrowDown'

import { H1, H2, H3 } from '../components/typography/heading/Heading'
import { SubHeading } from '../components/typography/sub-heading/SubHeading'
import P from '../components/typography/paragraph/Paragraph'
import { Strong } from '../components/typography/strong/Strong'

const IndexPage = ({ data }) => {
  const { title, metaDescription } = data.contentfulPage

  const heroPosts = data.allContentfulHero.edges
  const quotePosts = data.allContentfulQuote.edges
  const videoPosts = data.allContentfulVideoHero.edges

  const statementOne = data.statementOne.edges
  const statementTwo = data.statementTwo.edges
  const statementThree = data.statementThree.edges

  const pressRelease = data.allContentfulPressRelease.edges
  const articles = data.allContentfulPerspective.edges

  const events = data.allContentfulEvents.edges

  return (
    <Layout>
      <SEO
        title={title}
        description={metaDescription}
        keywords={[
          `ocean`,
          `data`,
          `foundation`,
          `platform`,
          `healthy`,
          `REV`,
          `open`,
          `non-profit`,
          `liberation`,
          `collaborative`,
        ]}
      />

      {heroPosts.map(({ node: post }) => (
        <Hero key={post.id} bgImage={post.image.fluid.src}>
          <Intro>
            <H1 size="larger" invert>
              {post.title}
            </H1>
            <P lead invert>
              {post.content.content}
            </P>
            <LinkButton
              to="/#video"
              invert="true"
              style={{ marginTop: '2rem', display: 'inline-block' }}>
              Watch video
            </LinkButton>
          </Intro>
          <ArrowDown href="#quote" />
        </Hero>
      ))}

      <Container id="quote" fluid>
        <Box>
          <Container as="div">
            {quotePosts.map(({ node: post }) => (
              <Blockquote key={post.id} cite={post.cite} author={post.author}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content.childMarkdownRemark.html,
                  }}
                />
              </Blockquote>
            ))}
          </Container>
        </Box>
      </Container>

      {statementOne.map(({ node: post }) => (
        <Statement
          key={post.id}
          image={post.image.fluid}
          reverse={post.reverseOrder === 'Yes' ? post.reverseOrder : null}>
          <SubHeading>{post.subtitle}</SubHeading>
          <H2>{post.title}</H2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </Statement>
      ))}

      <Container id="video" fluid>
        {videoPosts.map(({ node: post }) => (
          <Video key={post.id} videoId={post.videoId} />
        ))}
      </Container>

      {statementTwo.map(({ node: post }) => (
        <Statement
          key={post.id}
          image={post.image.fluid}
          reverse={post.reverseOrder === 'Yes' ? post.reverseOrder : null}
          removeOffset={true}>
          <SubHeading>{post.subtitle}</SubHeading>
          <H2>{post.title}</H2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </Statement>
      ))}

      <Container fluid>
        <Box>
          <Container as="div">
            <SubHeading>Recent Perspectives</SubHeading>
            <PressRelease>
              {articles.map(({ node: article }) => (
                <LinkBlock
                  to={`/perspectives/${article.slug}`}
                  key={article.id}>
                  <Article key={article.id}>
                    {article.coverImage && (
                      <Img
                        fluid={article.coverImage.fluid}
                        style={{ maxHeight: '240px' }}
                      />
                    )}
                    <H3>{article.title}</H3>
                    <Meta style={{ color: colorNeutral.NEUTRAL_TINT_15 }}>
                      <Time dateTime={article.publicationDate} />
                    </Meta>
                    <P>{article.teaser}</P>
                  </Article>
                </LinkBlock>
              ))}
            </PressRelease>
            <LinkButton to="/perspectives/1" showArrow pressRelease>
              More perspectives
            </LinkButton>
          </Container>
        </Box>
      </Container>

      {statementThree.map(({ node: post }) => (
        <Statement
          key={post.id}
          image={post.image.fluid}
          reverse={post.reverseOrder === 'Yes' ? post.reverseOrder : null}>
          <SubHeading>{post.subtitle}</SubHeading>
          <H2>{post.title}</H2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </Statement>
      ))}

      <Container fluid>
        <Box>
          <Container as="div">
            <SubHeading>Press release</SubHeading>
            <PressRelease columnGap="large">
              {pressRelease.map(({ node: post }) => (
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
            <LinkButton to="/press/" showArrow pressRelease>
              See all
            </LinkButton>
          </Container>
        </Box>
      </Container>

      <Container style={{ marginTop: '80px' }}>
        <SubHeading>Connect</SubHeading>
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
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query FrontPageQuery {
    contentfulPage(contentful_id: { eq: "2P6qkdN2Lx8fhXd3VOyKLx" }) {
      title
      metaDescription
    }
    allContentfulHero(
      filter: { contentful_id: { eq: "IkxJsGmFULejd1JzRmJry" } }
    ) {
      edges {
        node {
          id
          title
          content {
            content
          }
          image {
            fluid(maxWidth: 1800, quality: 80) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulQuote(
      filter: { contentful_id: { eq: "27f4To0O1ACAWoyg4NR5xJ" } }
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
          cite
          author
        }
      }
    }
    allContentfulVideoHero(
      filter: { contentful_id: { eq: "1tgrK4wxSh8Ja7kGZ2YaLH" } }
    ) {
      edges {
        node {
          id
          title
          videoId
        }
      }
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
    statementOne: allContentfulStatement(
      filter: { contentful_id: { eq: "ztB5QO0ksjDwYIfJmAyIc" } }
    ) {
      edges {
        node {
          id
          title
          subtitle
          image {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          content {
            childMarkdownRemark {
              html
            }
          }
          reverseOrder
        }
      }
    }
    statementTwo: allContentfulStatement(
      filter: { contentful_id: { eq: "1KjFyhW9qYGmoUG6fnmAML" } }
    ) {
      edges {
        node {
          id
          title
          subtitle
          image {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          content {
            childMarkdownRemark {
              html
            }
          }
          reverseOrder
        }
      }
    }
    statementThree: allContentfulStatement(
      filter: { contentful_id: { eq: "3j6lTSUDtdoe6MvOk3abcH" } }
    ) {
      edges {
        node {
          id
          title
          subtitle
          image {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          content {
            childMarkdownRemark {
              html
            }
          }
          reverseOrder
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulEvents: PropTypes.object.isRequired,
    allContentfulHero: PropTypes.object.isRequired,
    allContentfulPerspective: PropTypes.object.isRequired,
    allContentfulPressRelease: PropTypes.object.isRequired,
    allContentfulQuote: PropTypes.object.isRequired,
    allContentfulVideoHero: PropTypes.object.isRequired,
    contentfulPage: PropTypes.object.isRequired,
    statementOne: PropTypes.object.isRequired,
    statementThree: PropTypes.object.isRequired,
    statementTwo: PropTypes.object.isRequired,
  }),
}
