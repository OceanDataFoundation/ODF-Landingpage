import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import Layout from '../../components/site-layout/Layout'
import SEO from '../../components/seo/seo'
import { Container } from '../../components/container/Container'
import { H2 } from '../../components/typography/heading/Heading'
import { SubHeading } from '../../components/typography/sub-heading/SubHeading'
import P from '../../components/typography/paragraph/Paragraph'
import ContactForm from '../../components/contact-form/ContactForm'

// Style
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    flex: 1;
  }

  & > p {
    max-width: 70ch;
  }

  ${mediaQuery.BREAKPOINT_3`
    flex-direction: row;
    justify-content: space-between;

    & > p {
      flex: 4;
      margin-right: 6rem;
    }

    & > form {
      flex: 5;
    }
  `};
`

const ContactPage = ({ data }) => {
  const page = data.contentfulPage
  const { title, subtitle, content } = page

  return (
    <Layout>
      <SEO title="Contact" />
      <Container offset="true">
        <SubHeading>{title}</SubHeading>
        <H2>{subtitle}</H2>
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