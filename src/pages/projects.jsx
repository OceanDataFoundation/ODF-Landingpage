import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line from '../components/line/Line'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import Statement from '../components/statement/Statement'
import { StatementContent, StatementImage } from '../components/statement/Statement'
import { TextBlock } from '../components/text-block/TextBlock'
import { H1, H3 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const Projects = ({ data }) => {
  const textBlockList = data.contentfulTextBlockList.textBlocks;

  return (
    <Layout>
      <SEO title="Projects" />

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

        {/* <CustomStatement
          fluid
          image={data.statementOne.image.fluid}
          reverse={data.statementOne.reverseOrder}>
          <H3>{data.statementOne.title}</H3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.statementOne.content.childMarkdownRemark.html,
            }}
          />
        </CustomStatement> */}

        <CustomContainer fluid>
          {textBlockList.map(textblock => ( <TextBlock key={textblock.id} textblock={textblock}/> ))}
        </CustomContainer>

      </FullWidthContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectsQuery {
  contentfulTextBlockList(contentful_id: {eq: "ycG1FMWJ1GHx7gMB7zH6M"}) {
    id
    title
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
  intro: contentfulIntro(contentful_id: {eq: "2IM7JtOtRDVA0JZrmxi92O"}) {
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
  contentfulPage(contentful_id: {eq: "5AEeLK9WtdaZIzha6dVUpJ"}) {
    id
    title
  }
}
`

Projects.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

const CustomContainer = styled(Container)`
  margin-bottom: 50px;

  ${mediaQuery.BREAKPOINT_3`
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 145px;
  `};
`;

const CustomP = styled(P)`
    ${mediaQuery.BREAKPOINT_2`
      margin-bottom: 95px !important;
    `};
    ${mediaQuery.BREAKPOINT_3`
      width: 50%;
    `};
`;


const CustomStatement = styled(Statement)`

  ${H3} {
    margin-bottom: 6px;
  }

  ${mediaQuery.BREAKPOINT_2`
    margin-bottom: 100px;
  `};

  ${mediaQuery.BREAKPOINT_3`
      margin-bottom: 145px;
  `};

  ${StatementImage} {
    ${mediaQuery.BREAKPOINT_3`
        grid-column: ${props => (props.reverse ? `7 / 13` : ` 1 / 7`)};
      `};
    }

  ${StatementContent} {
    ${mediaQuery.BREAKPOINT_3`
      grid-column: ${props => (props.reverse ? `1 / 6` : `8 / 13`)};
    `};
  }
`;


export default Projects