import React from 'react'
import { Link, graphql } from 'gatsby'

// Components
import Layout from '../components/site-layout/Layout'
import Image from '../components/image/image'
import SEO from '../components/seo/seo'

import { Container } from '../components/container/Container'
import { Box } from '../components/box/Box'
import Hero from '../components/hero/Hero'
import Intro from '../components/intro/Intro'
import CallToAction from '../components/call-to-action/CallToAction'
import Blockquote from '../components/blockquote/Blockquote'
import Statement from '../components/statement/Statement'

import { H1, H2 } from '../components/typography/heading/Heading'
import { SubHeading } from '../components/typography/sub-heading/SubHeading'
import P from '../components/typography/paragraph/Paragraph'

const IndexPage = ({ data }) => {
  const heroPosts = data.allContentfulHero.edges
  const quotePosts = data.allContentfulQuote.edges

  const statementOne = data.statementOne.edges
  const statementTwo = data.statementTwo.edges
  const statementThree = data.statementThree.edges

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      {heroPosts.map(({ node: post }) => (
        <Hero key={post.id} bgImage={post.image.file.url}>
          <Intro>
            <H1 size="large" invert>
              {post.title}
            </H1>
            <P lead invert>
              {post.content.content}
            </P>
            <CallToAction href="/#quote" />
          </Intro>
        </Hero>
      ))}

      <Container id="quote" fluid>
        <Box>
          <Container>
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

      <Container fluid>
        <Box>Video?</Box>
      </Container>

      {statementTwo.map(({ node: post }) => (
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
        <Box>Press</Box>
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

      <Link to="/news/">View all posts</Link>
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
    statementOne: allContentfulStatement(
      filter: { contentful_id: { eq: "ztB5QO0ksjDwYIfJmAyIc" } }
    ) {
      edges {
        node {
          id
          title
          subtitle
          image {
            fluid(maxWidth: 700) {
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
            fluid(maxWidth: 700) {
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
            fluid(maxWidth: 700) {
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
  }
`
