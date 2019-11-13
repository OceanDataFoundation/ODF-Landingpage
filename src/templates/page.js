import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

const Page = ({ data }) => {
  // const { title } = data.contentfulPage

  return <Layout>{/* <SEO title={title} /> */}</Layout>
}

export default Page

// export const pageQuery = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       slug
//       body {
//         body
//       }
//       image {
//         file {
//           url
//         }
//       }
//       tags
//     }
//   }
// `;
