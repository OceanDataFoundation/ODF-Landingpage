import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { ArrowLeft } from '../components/arrow/ArrowLeft'
import { ArrowRight } from '../components/arrow/ArrowRight'
// Components
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line  from '../components/line/Line'
import LinkBlock from '../components/link-block/LinkBlock'
import { NewsBlock } from '../components/news-block/NewsBlock'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { H1, H4 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { Small } from '../components/typography/small/Small'
import { Strong } from '../components/typography/strong/Strong'
// Config
import { space } from '../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'
// Tokens
import { colorNeutral } from '../utils/tokens/tokenColorBrand'

const NewsListPage = ({ data, pageContext }) => {
  const newsPosts = data.allContentfulNews.edges
  const pageTotal = pageContext.pageAmount.length

  return (
    <Layout>
      <SEO title="Press Releases" />

      <FullWidthContainer offset="true">

        <Header style={{marginBottom: "12px"}}>
          <Link to="/news">
            <ArrowLeft style={{marginBottom:"40px"}} />
            <H1 size="larger">Press Releases</H1>
          </Link>
          <Line />
        </Header>

        <Container fluid col="3">
          {newsPosts.map(({ node: post }) => (
            <LinkBlock to={`/news/press/${post.slug}`} key={post.id}>
              {post.image && <Img fluid={post.image.fluid} style={{ minHeight: '329px', maxHeight: '329px', marginBottom: '24px' }} />}
              <NewsBlock>
                <H4>{post.title}</H4>
                <P style={{ marginBottom: '2rem' }}>{post.excerpt}</P>
              </NewsBlock>
              <ArrowRight />
            </LinkBlock>
          ))}
        </Container>

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
      </FullWidthContainer>
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