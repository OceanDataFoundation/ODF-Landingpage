import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line from '../components/line/Line'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import Statement from '../components/statement/Statement'
import { StatementContent, StatementImage } from '../components/statement/Statement'
import { H1, H3 } from '../components/typography/heading/Heading'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const Platform = ({ data }) => {

  return (
    <Layout>
      <SEO title="Platform" />

      <FullWidthContainer offset="true">

        <Header style={{marginBottom: "12px"}}>
          <H1 size="larger">Platform</H1>
          <Line />
        </Header>

        <CustomStatement
          fluid
          image={data.statement.image.fluid}
          reverse={data.statement.reverseOrder}>
          <H3>{data.statement.title}</H3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.statement.content.childMarkdownRemark.html,
            }}
          />
        </CustomStatement>

      </FullWidthContainer>
    </Layout>
  )
}

export default Platform

export const pageQuery = graphql`
  query PlatformQuery {
    statement: contentfulStatement(contentful_id: {eq: "4cEdlOArGE3ifTza07zqlX"}) {
      id
      title
      content {
          childMarkdownRemark {
            html
          }
        }
      image {
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid
        }
      }
      reverseOrder
    }
  }
`

Platform.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

const CustomStatement = styled(Statement)`

  ${H3} {
    margin-bottom: 6px;
  }

  ${mediaQuery.BREAKPOINT_2`
    margin-bottom: 100px;
  `};

  ${mediaQuery.BREAKPOINT_3`
      margin-bottom: 145px;
  `};

  ${StatementImage} {
    ${mediaQuery.BREAKPOINT_3`
        grid-column: ${props => (props.reverse ? `7 / 13` : ` 1 / 7`)};
      `};
    }

  ${StatementContent} {
    ${mediaQuery.BREAKPOINT_3`
      grid-column: ${props => (props.reverse ? `1 / 6` : `8 / 13`)};
    `};
  }
`;