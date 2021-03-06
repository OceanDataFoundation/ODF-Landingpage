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
import { Meta } from '../components/meta/Meta'

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

const NewsListPage = ({ data, pageContext }) => {
  const newsPosts = data.allContentfulNews.edges
  const pageTotal = pageContext.pageAmount.length

  return (
    <Layout>
      <SEO title="News posts" />

      <Container offset="true">
        <Header>
          <H1>News</H1>
        </Header>

        <Masonry col="2" minWidth={700}>
          {newsPosts.map(({ node: post }) => (
            <LinkBlock to={`/news/${post.slug}`} key={post.id}>
              {post.image && <Img fluid={post.image.fluid} />}
              <NewsBlock>
                <Meta>
                  <Small>{post.createdAt}</Small>
                </Meta>
                <H2>{post.title}</H2>
                <P>{post.excerpt}</P>
              </NewsBlock>
            </LinkBlock>
          ))}
        </Masonry>

        <Pagination>
          {pageContext.pageNumber === 1 ? (
            <Small
              style={{
                color: colorNeutral.NEUTRAL_TINT_70,
              }}>
              Previous page
            </Small>
          ) : (
            pageContext &&
            pageContext.hasPrevPage && (
              <Link to={pageContext.prevPageLink}>
                <Small>Previous page</Small>
              </Link>
            )
          )}

          <PaginationNumbers>
            <Strong>{pageContext.pageNumber}</Strong> / {pageTotal}
          </PaginationNumbers>

          {pageContext && pageContext.hasNextPage ? (
            <Link to={pageContext.nextPageLink}>
              <Small>Next page</Small>
            </Link>
          ) : (
            <Small
              style={{
                color: colorNeutral.NEUTRAL_TINT_70,
              }}>
              Next page
            </Small>
          )}
        </Pagination>
      </Container>
    </Layout>
  )
}

export default NewsListPage

export const pageQuery = graphql`
  query NewsListPageQuery($skip: Int, $limit: Int) {
    allContentfulNews(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: [createdAt] }
    ) {
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

NewsListPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}
