import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo/seo'

// Components
import Layout from '../components/site-layout/Layout'
import { Container } from '../components/container/Container'
import { Article } from '../components/article/Article'
import { Header } from '../components/header/Header'
import { H1 } from '../components/typography/heading/Heading'
import { Meta } from '../components/meta/Meta'
import P from '../components/typography/paragraph/Paragraph'

const NewsPostTemplate = ({ data, pageContext }) => {
  const {
    title,
    createdAt,
    excerpt,
    author,
    content,
    image,
    tags,
  } = data.contentfulNews

  return (
    <Layout>
      <SEO title={title} />

      <Container offset="true">
        <Article>
          <Header>
            <H1>{title}</H1>
            <Meta>
              {createdAt} | {author}
            </Meta>
          </Header>
          {image ? <Img fluid={image.fluid} /> : null}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <div style={{ width: '80ch' }}>
              <P lead>
                {excerpt}
                {excerpt}
                {excerpt}
              </P>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>

          <ol>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ol>

          <Link to="/news">View more posts</Link>
        </Article>
      </Container>
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
        fluid(maxWidth: 1200) {
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
