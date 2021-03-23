import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import ContactForm from '../../components/contact-form/ContactForm'
import { FullWidthContainer } from '../../components/container/FullWidthContainer'
import { Header } from '../../components/header/Header'
import SEO from '../../components/seo/seo'
// Components
import Layout from '../../components/site-layout/Layout'
import { H1 } from '../../components/typography/heading/Heading'
// Utils
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

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
      <FullWidthContainer offset="true">
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
      </FullWidthContainer>
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
