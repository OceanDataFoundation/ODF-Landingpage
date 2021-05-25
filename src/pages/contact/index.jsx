import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import ContactForm from '../../components/contact-form/ContactForm'
import { Container } from '../../components/container/Container'
import { FullWidthContainer } from '../../components/container/FullWidthContainer'
import { Header } from '../../components/header/Header'
import Line from '../../components/line/Line'
import SEO from '../../components/seo/seo'
import Layout from '../../components/site-layout/Layout'
import { H1 } from '../../components/typography/heading/Heading'
// Utils
import { space } from '../../utils/configs/confSpace'
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

const ContactPage = ({ data }) => {
  const page = data.contentfulPage
  const { title, content, metaDescription } = page

  return (
    <Layout>
      <SEO title={title} description={metaDescription} />
      <FullWidthContainer offset="true">

        <Header>
          <H1 size="larger">{data.contentfulPage.title}</H1>
          <Line />
        </Header>

        <FormContainer>
          <ContentContainer
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
          <ContactFormContainer>
            <ContactForm />
          </ContactFormContainer>
        </FormContainer>
      </FullWidthContainer>
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  contenfulPage: PropTypes.objectOf(PropTypes.string),
}

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
    contentfulPage(contentful_id: {eq: "pem5BiuDhHKHCutzx8ql7"}) {
      id
      title
    }
  }
`

const FormContainer = styled(Container)`
  padding-right: ${space[0]};
  padding-left: ${space[0]};

  ${mediaQuery.BREAKPOINT_2`
    grid-column: 1;
    padding-right: ${space[0]};
    padding-left: ${space[0]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 1;
  `};

`;

const ContentContainer = styled.div`
  grid-column : 1;

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 1 / 6;
    margin-top: 30px;
  `};
`;

const ContactFormContainer = styled.div`
  grid-column : 1;

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 7 / -1
  `};
`;

export default ContactPage