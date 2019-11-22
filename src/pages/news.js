import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

// Components
import { Container } from '../components/container/Container'
import { Header } from '../components/header/Header'
import Masonry from '../components/masonry/Masonry'
import { NewsBlock } from '../components/news-block/NewsBlock'
import { H1, H2 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { Meta } from '../components/meta/Meta'
import { Small } from '../components/typography/small/Small'
import LinkBlock from '../components/link-block/LinkBlock'

const News = ({ data }) => {
  const newsPosts = data.allContentfulNews.edges

  return (
    <Layout>
      <SEO title="News posts" />
      <Container offset="true">
        <Header>
          <H1>News</H1>
        </Header>
        <Masonry col="2">
          {newsPosts.map(({ node: post }) => (
            <LinkBlock to={`/news/${post.slug}`} key={post.id}>
              <article>
                {post.image ? <Img fluid={post.image.fluid} /> : null}
                <NewsBlock>
                  <Meta>
                    <Small>{post.createdAt}</Small>
                  </Meta>
                  <H2>{post.title}</H2>
                  <P>{post.excerpt}</P>
                </NewsBlock>
              </article>
            </LinkBlock>
          ))}
        </Masonry>
      </Container>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default News

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
