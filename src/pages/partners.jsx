import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line from '../components/line/Line'
import { Partner } from '../components/partner/Partner'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { TextBlock } from '../components/text-block/TextBlock'
import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const Partners = ({ data }) => {

  const { nodes } = data.allContentfulPartner;
  const textBlockList = data.contentfulTextBlockList.textBlocks;

  return (
    <Layout>
      <SEO title="Partners" />

      <FullWidthContainer offset="true">

      <Header style={{marginBottom: "12px"}}>
        <H1 size="larger">Partners</H1>
        <Line />
      </Header>

        <CustomP lead
          dangerouslySetInnerHTML={{
            __html: data.intro.introText.content[0].content[0].value
          }}
        />

        <CustomContainer fluid>
          {textBlockList.map(textblock => ( <TextBlock key={textblock.id} textblock={textblock}/> ))}
        </CustomContainer>

        <Container col="3" fluid>
          {nodes.map(partner => <Partner key={partner.id} partner={partner} />)}
        </Container>
      </FullWidthContainer>

    </Layout>
  )
}

export default Partners

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
    textBlocks {
      title
      id
      bodyText {
        content {
          content {
            value
          }
        }
      }
    }
  }
  }
`

Partners.propTypes = {
  data: PropTypes.shape({
    allContentfulPartner: PropTypes.object.isRequired,
    intro: PropTypes.object.isRequired,
    contentfulTextBlockList: PropTypes.object.isRequired
  }),
}

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
