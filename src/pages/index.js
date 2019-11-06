import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

import { H1 } from '../components/typography/heading/Heading'

const Article = styled.article`
  display: flex;
`

const Image = styled.div`
  flex: 25%;
  margin-right: 1rem;
`

const Text = styled.div`
  flex: 75%;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulNews.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <H1>Test</H1>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Article key={node.slug}>
              <Image>
                <Img fluid={node.image.fluid} />
              </Image>
              <Text>
                <header>
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: rhythm(1 / 4),
                    }}>
                    <Link style={{ boxShadow: `none` }} to={`/${node.slug}`}>
                      {title}
                    </Link>
                  </h3>
                  {/* <small>{node.frontmatter.date}</small> NOTE: Remove? */}
                </header>
                <section>
                  <p>{node.excerpt}</p>
                </section>
              </Text>
            </Article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulNews {
      edges {
        node {
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
