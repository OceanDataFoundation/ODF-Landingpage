import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line from '../components/line/Line'
import LinkButton from '../components/link-button/LinkButton'
import { Partner } from '../components/partner/partner'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { TextBlock } from '../components/text-block/TextBlock'
import { H1, H2 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const PartnersPage = ({ data }) => {

  const { nodes } = data.allContentfulPartner;
  const textBlockList = data.contentfulTextBlockList.textBlocks;
  const heading = data.contentfulTextBlockList.heading;

  return (
    <Layout>
      <SEO title="Partner" />

      <FullWidthContainer offset="true">

      <Header style={{marginBottom: "12px"}}>
        <H1 size="larger">{data.contentfulPage.title}</H1>
        <Line />
      </Header>

      <CustomP lead
        dangerouslySetInnerHTML={{
          __html: data.intro.introText.content[0].content[0].value
        }}
      />

      <Container col="3" fluid>
        {nodes.map(partner => <Partner key={partner.id} partner={partner} />)}
      </Container>

      <Header style={{marginBottom: "22px"}}>
        <H2>{heading}</H2>
      </Header>

      <CustomContainer fluid>
        {textBlockList.map(textblock => ( <TextBlock key={textblock.id} textblock={textblock}/> ))}
      </CustomContainer>

      <ButtonContainer fluid>
        <LinkButton to="/contact">
          join us
        </LinkButton>
      </ButtonContainer>

      </FullWidthContainer>

    </Layout>
  )
}

PartnersPage.propTypes = {
  data: PropTypes.shape({
    allContentfulPartner: PropTypes.object.isRequired,
    intro: PropTypes.object.isRequired,
    contentfulTextBlockList: PropTypes.object.isRequired,
    contentfulPage: PropTypes.object
  }),
}

export const query = graphql`
  query PartnerQuery {
    allContentfulPartner {
      nodes {
        description {
          description
        }
        name
        url
        id
        logo {
          description
          title
          fluid(maxWidth: 200) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    intro: contentfulIntro(contentful_id: {eq: "239nU51A0WXgdjPiphq3ka"}) {
      id
      title
      contentful_id
      introText {
        id
        content {
          content {
            value
            nodeType
          }
        }
      }
    }
    contentfulTextBlockList(contentful_id: {eq: "6NRLfUFMkM7XiqkeO4GDi7"}) {
    id
    title
    heading
    textBlocks {
      id
      heading
      bodyText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
  contentfulPage(contentful_id: {eq: "eoSKHszrf83CiK4CFARGq"}) {
    id
    title
  }
}
`

const ButtonContainer = styled(Container)`
`;

const CustomP = styled(P)`
    ${mediaQuery.BREAKPOINT_2`
      margin-bottom: 95px !important;
    `};
    ${mediaQuery.BREAKPOINT_3`
      width: 50%;
    `};
`;

const CustomContainer = styled(Container)`
  margin-bottom: 50px;

  ${mediaQuery.BREAKPOINT_3`
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 130px;
  `};
`;

export default PartnersPage