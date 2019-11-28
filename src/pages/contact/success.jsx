import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/site-layout/Layout'
import SEO from '../../components/seo/seo'
import { Container } from '../../components/container/Container'
import { Header } from '../../components/header/Header'
import { H1 } from '../../components/typography/heading/Heading'
import P from '../../components/typography/paragraph/Paragraph'

const Success = ({ data }) => {
  const page = data.contentfulPage
  const { subtitle, content } = page

  return (
    <Layout>
      <SEO title="Thank You" />
      <Container offset="true">
        <Header>
          <H1>{subtitle}</H1>
        </Header>
        <P>{content.content}</P>
        <Link to="/" style={{ borderBottom: 'none' }}>
          &larr; Back to homepage
        </Link>
      </Container>
    </Layout>
  )
}

Success.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Success

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
