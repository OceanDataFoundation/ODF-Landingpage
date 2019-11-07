import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/site-layout/siteLayout'
import SEO from '../components/seo/seo'

const NewsPostTemplate = ({ data }) => {
  const { title, content, image, tags } = data.contentfulNews

  return (
    <Layout>
      <SEO title={title} />

      <div className="">
        <h1>{title}</h1>
        {image ? <Img fluid={image.fluid} /> : null}
        <ol>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ol>
        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
        <Link to="/news">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default NewsPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      excerpt
      author
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
      tags
    }
  }
`
