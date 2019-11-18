import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

// Components
import { Container } from '../components/container/Container'

import { H2, H3 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'

const NewsPosts = ({ data }) => {
  const newsPosts = data.allContentfulNews.edges

  return (
    <Layout>
      <SEO title="News posts" />
      <Container
        style={{
          marginTop: '4rem',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridColumnGap: '32px',
          gridRowGap: '32px',
        }}>
        {newsPosts.map(({ node: post }) => (
          <article
            key={post.id}
            style={{
              backgroundColor: 'white',
            }}>
            {post.image ? (
              <Img
                fluid={post.image.fluid}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            ) : null}
            <div
              style={{
                width: 'calc(100% - 3rem)',
                padding: '4rem 2rem 2rem 2rem',
                position: 'relative',
                top: '-3rem',
                right: '2rem',
                left: '1rem',
                // backgroundColor: 'rgba(230, 251, 250, .95)',
                backgroundColor: 'rgba(255, 255, 255, .95)',
              }}>
              <small style={{ marginBottom: '1rem', display: 'block' }}>
                {post.createdAt}
              </small>
              <H3>{post.title}</H3>
              <P>{post.excerpt}</P>
              <Link to={`/news/${post.slug}`}>Read more -></Link>
            </div>
          </article>
        ))}
      </Container>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default NewsPosts

export const query = graphql`
  query NewsPostsPageQuery {
    allContentfulNews {
      edges {
        node {
          id
          createdAt(formatString: "MMMM D, YYYY")
          title
          excerpt
          author
          slug
          image {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
