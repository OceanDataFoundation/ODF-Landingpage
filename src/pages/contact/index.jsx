import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Layout from '../../components/site-layout/Layout'
import SEO from '../../components/seo/seo'
import { Container } from '../../components/container/Container'
import { H3, H4 } from '../../components/typography/heading/Heading'
import P from '../../components/typography/paragraph/Paragraph'
import ContactForm from '../../components/contact-form/ContactForm'

// Style
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > * {
    flex: 1;
    max-width: 32rem;
  }
`

const ContactPage = ({ data }) => {
  const page = data.contentfulPage
  const { title, subtitle, content } = page

  return (
    <Layout>
      <SEO title="Contact" />
      <Container offset="true">
        <H4>{title}</H4>
        <H3>{subtitle}</H3>
        <FlexContainer>
          <P>{content.content}</P>
          <ContactForm />
        </FlexContainer>
      </Container>
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  contenfulPage: PropTypes.objectOf(PropTypes.string),
}

export default ContactPage

export const pageQuery = graphql`
  query {
    contentfulPage(slug: { eq: "contact" }) {
      title
      subtitle
      content {
        content
      }
    }
  }
`
