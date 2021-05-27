import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { ArrowRight } from '../components/arrow/ArrowRight'
// Components
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line from '../components/line/Line'
import LinkBlock from '../components/link-block/LinkBlock'
import { NewsBlock } from '../components/news-block/NewsBlock'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { TextBlock } from '../components/text-block/TextBlock'
import { H1, H3 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const Projects = ({ data }) => {
  const textBlockList = data.contentfulTextBlockList.textBlocks;
  const projectArticles = data.allContentfulProject.edges

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

        <CustomContainer fluid>
          {textBlockList.map(textblock => ( <TextBlock key={textblock.id} textblock={textblock}/> ))}
        </CustomContainer>

        <Container fluid col="3">
          {projectArticles.map(({ node: article }) => (
            <LinkBlock to={`/projects/${article.slug}`} key={article.id}>
              {article.coverImage && <Img fluid={article.coverImage.fluid} style={{ minHeight: '329px', maxHeight: '329px', marginBottom: '32px' }} />}
                <H3 style={{ marginBottom: '1rem' }}>{article.title}</H3>
                <P style={{ marginBottom: '12px 0 2rem 0' }}>{article.teaser}</P>
              <ArrowRight />
            </LinkBlock>
          ))}
        </Container>

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
  allContentfulProject {
      edges {
        node {
          id
          title
          teaser
          slug
          coverImage {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
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


export default Projects