import React from 'react'
import { Link, graphql } from 'gatsby'

// Components
import Layout from '../components/site-layout/siteLayout'
import SEO from '../components/seo/seo'

import { Container } from '../components/container/Container'
import { Box } from '../components/box/Box'
import Hero from '../components/hero/Hero'
import Intro from '../components/intro/Intro'
import CallToAction from '../components/call-to-action/CallToAction'
import Blockquote from '../components/blockquote/Blockquote'

import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'

const IndexPage = ({ data }) => {
  const heroPosts = data.allContentfulHero.edges
  const quotePosts = data.allContentfulQuote.edges

  const pageOnePost = data.pageOne.edges
  const pageTwoPost = data.pageTwo.edges
  const pageThreePost = data.pageThree.edges

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

      <Container>
        {pageOnePost.map(({ node: post }) => (
          <div key={post.id}>
            {post.title}
            {post.subtitle}
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html,
              }}
            />
          </div>
        ))}
      </Container>

      <Container fluid>video container</Container>

      <Container>
        {pageTwoPost.map(({ node: post }) => (
          <div key={post.id}>
            {post.title}
            {post.subtitle}
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html,
              }}
            />
          </div>
        ))}
      </Container>

      <Container fluid>
        <Box>Press release container</Box>
      </Container>

      <Container>
        {pageThreePost.map(({ node: post }) => (
          <div key={post.id}>
            {post.title}
            {post.subtitle}
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html,
              }}
            />
          </div>
        ))}
      </Container>

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
    pageOne: allContentfulPage(
      filter: { contentful_id: { eq: "64aEfVMj0UWes4p7Iln9tn" } }
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
    pageTwo: allContentfulPage(
      filter: { contentful_id: { eq: "2r4i46JNKeDdrVqHigczDE" } }
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
    pageThree: allContentfulPage(
      filter: { contentful_id: { eq: "4ENggrmrN48l1RkjTKXHOd" } }
    ) {
      edges {
        node {
          id
          title
          slug
          subtitle
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
