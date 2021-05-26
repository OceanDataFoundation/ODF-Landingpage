import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { ArrowRight } from '../components/arrow/ArrowRight'
// Components
import { Container } from '../components/container/Container'
import LinkBlock from '../components/link-block/LinkBlock'
import { NewsBlock } from '../components/news-block/NewsBlock'
import {H4} from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { Small } from '../components/typography/small/Small'
import { Strong } from '../components/typography/strong/Strong'
// Config
import { space } from '../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'
// Tokens
import { colorNeutral } from '../utils/tokens/tokenColorBrand'

const ProjectList = ({ data, pageContext }) => {
  const projectArticles = data.allContentfulProject.edges
  const pageTotal = pageContext.pageAmount.length

  return (
    <>
      <Container fluid col="3">
        {projectArticles.map(({ node: article }) => (
          <LinkBlock to={`/projects/${article.slug}`} key={article.id}>
            {article.coverImage && <Img fluid={article.coverImage.fluid} style={{ minHeight: '329px', maxHeight: '329px', marginBottom: '24px' }} />}
            <NewsBlock>
              <H4>{article.title}</H4>
              <P style={{ marginBottom: '2rem' }}>{article.teaser}</P>
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
    </>
  )
}

export const pageQuery = graphql`
  query ProjectListQuery($skip: Int, $limit: Int) {
    allContentfulProject (
      skip: $skip
      limit: $limit
  ) {
      edges {
        node {
          id
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

ProjectList.propTypes = {
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

export default ProjectList