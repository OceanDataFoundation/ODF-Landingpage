import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

// Components
import { Container } from '../components/container/Container'

import { H2 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { Meta } from '../components/meta/Meta'
import { Small } from '../components/typography/small/Small'
import LinkBlock from '../components/link-block/LinkBlock'

const NewsPosts = ({ data }) => {
  const newsPosts = data.allContentfulNews.edges

  return (
    <Layout>
      <SEO title="News posts" />
      <Container col="2" offset>
        {newsPosts.map(({ node: post }) => (
          <LinkBlock to={`/news/${post.slug}`} key={post.id}>
            <article>
              {post.image ? <Img fluid={post.image.fluid} /> : null}
              <TestNewsContent>
                <Meta>
                  <Small>{post.createdAt}</Small>
                </Meta>
                <H2>{post.title}</H2>
                <P>{post.excerpt}</P>
              </TestNewsContent>
            </article>
          </LinkBlock>
        ))}
      </Container>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const TestNewsContent = styled.div`
  padding: 0 2rem 0 3rem;
  position: relative;

  ::before {
    width: 4px;
    height: 160px;
    content: '';
    position: absolute;
    top: -40px;
    left: 12px;
    /* background-color: #01d2c8; */
    background-color: #d9d9d9;
  }
`

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
