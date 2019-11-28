import React from 'react'
import { graphql } from 'gatsby'

// Components
import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

import { Container } from '../components/container/Container'
import { Box } from '../components/box/Box'
import Hero from '../components/hero/Hero'
import Intro from '../components/intro/Intro'
import Blockquote from '../components/blockquote/Blockquote'
import Statement from '../components/statement/Statement'
import PressRelease from '../components/press-release/PressRelease'
import { Meta } from '../components/meta/Meta'
import Time from '../components/time/Time'
import { Article } from '../components/article/Article'
import Video from '../components/video/Video'
import { TableWrapper, Table, TBody, Tr, Td } from '../components/table/Table'
import LinkCta from '../components/link-cta/LinkCta'
import LinkButton from '../components/link-button/LinkButton'

import { H1, H2, H3 } from '../components/typography/heading/Heading'
import { SubHeading } from '../components/typography/sub-heading/SubHeading'
import P from '../components/typography/paragraph/Paragraph'
import { Strong } from '../components/typography/strong/Strong'

const IndexPage = ({ data }) => {
  const heroPosts = data.allContentfulHero.edges
  const quotePosts = data.allContentfulQuote.edges
  const videoPosts = data.allContentfulVideoHero.edges

  const statementOne = data.statementOne.edges
  const statementTwo = data.statementTwo.edges
  const statementThree = data.statementThree.edges

  const pressRelease = data.allContentfulPressRelease.edges

  const events = data.allContentfulEvents.edges

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      {heroPosts.map(({ node: post }) => (
        <Hero key={post.id} bgImage={post.image.file.url}>
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
              style={{ marginTop: '4rem' }}>
              Watch video
            </LinkButton>
          </Intro>
        </Hero>
      ))}

      <Container fluid>
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
          <Video key={post.id} title={post.title} videoId={post.videoId} />
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
            <SubHeading>Press release</SubHeading>
            <PressRelease>
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

      <Container>
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
            file {
              url
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
            fluid(maxWidth: 1600) {
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
            fluid(maxWidth: 1600) {
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
            fluid(maxWidth: 1600) {
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
