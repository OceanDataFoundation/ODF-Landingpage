import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NewsPosts = ({ data }) => {
  const newsPosts = data.allContentfulNews.edges

  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1>{"Here's a list of all blogposts!"}</h1>
      <div className="">
        {newsPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="" />
        <Link to="/">Go back to the homepage</Link>
      </div>
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
