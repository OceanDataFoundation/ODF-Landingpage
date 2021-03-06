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
import { Header } from '../../components/header/Header'
import { H1 } from '../../components/typography/heading/Heading'
import P from '../../components/typography/paragraph/Paragraph'
import ContactForm from '../../components/contact-form/ContactForm'

// Style
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    width: 45%;
  }

  & > p {
    max-width: 70ch;
  }

  h2 {
    font-size: 2rem;
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
  const { title, subtitle, content, metaDescription } = page

  return (
    <Layout>
      <SEO title={title} description={metaDescription} />
      <Container offset="true">
        <Header>
          <H1>{subtitle}</H1>
        </Header>
        <FlexContainer>
          <div
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
          <div>
            <ContactForm />
          </div>
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
    contentfulPage(contentful_id: { eq: "pem5BiuDhHKHCutzx8ql7" }) {
      title
      subtitle
      metaDescription
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
