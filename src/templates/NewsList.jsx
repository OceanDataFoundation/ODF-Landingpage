import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { ArrowLeft } from '../components/arrow/ArrowLeft'
import { SmallArrowRight } from '../components/arrow/SmallArrowRight'
// Components
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line  from '../components/line/Line'
import LinkBlock from '../components/link-block/LinkBlock'
import { NewsBlock } from '../components/news-block/NewsBlock'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { H1, H3 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { Small } from '../components/typography/small/Small'
import { Strong } from '../components/typography/strong/Strong'
// Config
import { space } from '../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'
// Tokens
import { colorNeutral } from '../utils/tokens/tokenColorBrand'

const NewsList = ({ data, pageContext }) => {
  const articles = data.allContentfulPerspective.edges
  const pageTotal = pageContext.pageAmount.length

  return (
    <Layout>
      <SEO title="News" />

      <FullWidthContainer offset="true">
        <Header style={{marginBottom: "12px"}}>
          <Link to="/news">
            <ArrowLeft style={{marginBottom:"40px"}} />
            <H1 size="larger">News</H1>
          </Link>
          <Line />
        </Header>

        <Container fluid col="3">
          {articles.map(({ node: article }) => (
            <LinkBlock to={`/news/${article.slug}`} key={article.id}>
              {article.coverImage && <Img fluid={article.coverImage.fluid} style={{ minHeight: '329px', maxHeight: '329px',  marginBottom: '32px' }} />}
              <NewsBlock>
                <H3 style={{ marginBottom: '1rem' }}>{article .title}</H3>
                <P style={{ marginBottom: '12px 0 2rem 0' }}>{article.teaser}</P>
                 <SmallArrowRight />
              </NewsBlock>
            </LinkBlock>
          ))}
        </Container>

        {pageContext.hasNextPage && (
          <Pagination>
            {pageContext.pageNumber === 1 ? (
              <Small>
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
      </FullWidthContainer>
    </Layout>
  )
}

NewsList.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PerspectivesListQuery($skip: Int, $limit: Int) {
    allContentfulPerspective(
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
  color: ${colorNeutral.NEUTRAL_TINT_100};
`

export default NewsList