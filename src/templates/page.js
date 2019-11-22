import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

const PageTemplate = ({ data }) => {
  const { title, content, image } = data.contentfulPage

  return (
    <Layout>
      <SEO title={title} />

      <div className="">
        <h1>{title}</h1>
        {image ? <Img fluid={image.fluid} /> : null}
        <p>{content.content}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default PageTemplate

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      content {
        content
      }
    }
  }
`
