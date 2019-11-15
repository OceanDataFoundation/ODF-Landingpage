import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

// Components
import { Container } from '../components/container/Container'

import { H2 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'

const NewsPosts = ({ data }) => {
  const newsPosts = data.allContentfulNews.edges

  return (
    <Layout>
      <SEO title="News posts" />
      <Container
        style={{
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(8, 15vw)',
          gridColumnGap: '32px',
        }}>
        {newsPosts.map(({ node: post }) => (
          <div key={post.id} style={{ backgroundColor: 'grey' }}>
            <H2>{post.title}</H2>
            {post.image ? (
              <Img
                fluid={post.image.fluid}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : null}
            <P>{post.excerpt}</P>
            <Link to={`/news/${post.slug}`}>{post.title}</Link>
          </div>
        ))}

        <Link to="/">Go back to the homepage</Link>
      </Container>
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
