import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/site-layout/Layout'
import SEO from '../../components/seo/seo'
import { Container } from '../../components/container/Container'
import { SubHeading } from '../../components/typography/sub-heading/SubHeading'
import { H2 } from '../../components/typography/heading/Heading'
import P from '../../components/typography/paragraph/Paragraph'

const Success = ({ data }) => {
  const page = data.contentfulPage
  const { title, subtitle, content } = page

  return (
    <Layout>
      <SEO title="Thank You" />
      <Container offset="true">
        <SubHeading>{title}</SubHeading>
        <H2>{subtitle}</H2>
        <P>{content.content}</P>
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
      title
      subtitle
      content {
        content
      }
    }
  }
`
