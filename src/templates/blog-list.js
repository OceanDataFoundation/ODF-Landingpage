import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

// Tokens
import { colorNeutral } from '../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

// Components
import { Container } from '../components/container/Container'
import { Header } from '../components/header/Header'
import Masonry from '../components/masonry/Masonry'
import LinkBlock from '../components/link-block/LinkBlock'
import { NewsBlock } from '../components/news-block/NewsBlock'
import { Author } from '../components/author/Author'

import { H1, H2 } from '../components/typography/heading/Heading'
import { Small } from '../components/typography/small/Small'
import P from '../components/typography/paragraph/Paragraph'
import { Strong } from '../components/typography/strong/Strong'

const Pagination = styled.div`
  margin-top: ${space[8]};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery.BREAKPOINT_2`
    justify-content: center;
  `};
`

const PaginationNumbers = styled(Small)`
  margin: 0 ${space[6]};
  color: ${colorNeutral.NEUTRAL_TINT_35};
`

const BlogListPage = ({ data, pageContext }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  const pageTotal = pageContext.pageAmount.length

  return (
    <Layout>
      <SEO title="Blog Posts" />

      <Container offset="true">
        <Header>
          <H1>Blog</H1>
        </Header>

        <Masonry col="2" minWidth={700}>
          {blogPosts.map(({ node: post }) => (
            <LinkBlock to={`/blog/${post.slug}`} key={post.id}>
              {post.coverImage && <Img fluid={post.coverImage.fluid} />}
              <NewsBlock>
                <H2>{post.title}</H2>
                <P style={{ marginBottom: '1rem' }}>{post.teaser}</P>
                <Author
                  name={post.author.name}
                  picture={post.author.picture.fixed}
                  size="32px"
                />
              </NewsBlock>
            </LinkBlock>
          ))}
        </Masonry>

        {pageContext.hasNextPage && (
          <Pagination>
            {pageContext.pageNumber === 1 ? (
              <Small
                style={{
                  color: colorNeutral.NEUTRAL_TINT_70,
                }}>
                Previous page
              </Small>
            ) : (
              pageContext.hasPrevPage && (
                <Link to={pageContext.prevPageLink}>
                  <Small>Previous page</Small>
                </Link>
              )
            )}

            <PaginationNumbers>
              <Strong>{pageContext.pageNumber}</Strong> / {pageTotal}
            </PaginationNumbers>

            <Link to={pageContext.nextPageLink}>
              <Small>Next page</Small>
            </Link>
          </Pagination>
        )}
      </Container>
    </Layout>
  )
}

export default BlogListPage

export const pageQuery = graphql`
  query BlogListPageQuery($skip: Int, $limit: Int) {
    allContentfulBlogPost(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: [publicationDate] }
    ) {
      edges {
        node {
          id
          publicationDate(formatString: "MMMM D, YYYY")
          title
          teaser
          slug
          author {
            name
            picture {
              fixed(width: 80) {
                ...GatsbyContentfulFixed
              }
            }
          }
          coverImage {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

BlogListPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}
