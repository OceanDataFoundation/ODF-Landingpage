import React from 'react'
import { Link, graphql } from 'gatsby'

// Components
import Layout from '../components/site-layout/siteLayout'
import Image from '../components/image/image'
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

      <div>
        <H1>Hello There 1</H1>
        <p>Welcome my awesome blog</p>
        <div>
          <div>
            <Image />
          </div>
        </div>
        <Link to="/news/">View all posts</Link>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
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
  }
`
