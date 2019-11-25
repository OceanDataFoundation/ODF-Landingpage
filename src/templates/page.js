import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// Components
import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'
import { Container } from '../components/container/Container'
import { Header } from '../components/header/Header'
import { H1, H2 } from '../components/typography/heading/Heading'
import ContactForm from '../components/contact-form/ContactForm'

const PageTemplate = ({ data }) => {
  const page = data.contentfulPage
  const { title, subtitle, image, content } = page

  return (
    <Layout>
      <SEO title={title} />
      <Container offset="true">
        <div>
          <Header>
            <H1>{title}</H1>
            <H2>{subtitle}</H2>
          </Header>
          {image ? <Img fluid={image.fluid} /> : null}
          <p>{content.content}</p>
          <ContactForm />
        </div>
      </Container>
    </Layout>
  )
}

export default PageTemplate

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      subtitle
      createdAt(formatString: "MMMM DD, YYYY")
      content {
        content
      }
    }
  }
`
