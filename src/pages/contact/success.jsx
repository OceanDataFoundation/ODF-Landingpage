import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { FullWidthContainer } from '../../components/container/FullWidthContainer'
import { Header } from '../../components/header/Header'
import SEO from '../../components/seo/seo'
import Layout from '../../components/site-layout/Layout'
import { H1 } from '../../components/typography/heading/Heading'
import P from '../../components/typography/paragraph/Paragraph'

const Success = ({ data }) => {
  const page = data.contentfulPage
  const { subtitle, content } = page

  return (
    <Layout>
      <SEO title="Thank You" />
      <FullWidthContainer offset="true">
        <Header>
          <H1>{subtitle}</H1>
        </Header>
        <P>{content.content}</P>
        <Link to="/" style={{ borderBottom: 'none', color:"#fff" }}>
          &larr; Back to homepage
        </Link>
      </FullWidthContainer>
    </Layout>
  )
}

Success.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query {
    contentfulPage(slug: { eq: "thank-you" }) {
      subtitle
      content {
        content
      }
    }
  }
`

export default Success