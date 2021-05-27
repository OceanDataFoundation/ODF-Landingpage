import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import { SmallArrowRight } from '../components/arrow/SmallArrowRight'
import { Article } from '../components/article/Article'
import Blockquote from '../components/blockquote/Blockquote'
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import ThreeColumnsContainer from '../components/container/ThreeColumnsContainer'
import { Header } from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Line  from '../components/line/Line'
import LinkBlock from '../components/link-block/LinkBlock'
import LinkButton from '../components/link-button/LinkButton'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import Statement, { StatementContent, StatementImage } from '../components/statement/Statement'
import { H2, H3 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { SubHeading } from '../components/typography/sub-heading/SubHeading'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const IndexPage = ({ data }) => {
  const { title, metaDescription } = data.contentfulPage

  const heroPosts = data.allContentfulHero.edges
  const quotePosts = data.allContentfulQuote.edges

  const statementOne = data.statementOne.edges
  const statementTwo = data.statementTwo.edges
  const articles = data.allContentfulPerspective.edges
  const projects = data.allContentfulProject.edges
  // const projectsTwo = data.contentfulArticleList.article

  return (
    <Layout>
      <SEO
        title={title}
        description={metaDescription}
        keywords={[
          `ocean`,
          `data`,
          `foundation`,
          `platform`,
          `healthy`,
          `REV`,
          `open`,
          `non-profit`,
          `liberation`,
          `collaborative`,
        ]}
      />

      {heroPosts.map(({ node: post, }) => (
        <Hero
          key={post.id}
          bgImage={post.image.fluid.src}
          title={post.title}
          content={post.content.content}
        >
        </Hero>
      ))}

      <CenteredContainer>
        <H2>Lets work together</H2>
        <LinkButton to="/contact">
          join us
        </LinkButton>
      </CenteredContainer>

      <Container id="quote">
        <QuoteContainer>
          {quotePosts.map(({ node: post }) => (
            <Blockquote key={post.id} highlightedQuote={post.highlightedQuote}></Blockquote>
          ))}
        </QuoteContainer>
      </Container>

      <FullWidthContainer style={{marginBottom: "64px"}}>
        <Header style={{marginBottom: "12px"}}>
          <H2>Projects</H2>
          <Line />
        </Header>

        <ThreeColumnsContainer>
          {projects.map(({ node: project }) => (
            <LinkBlock
              to={`/projects/${project.slug}`}
              key={project.id}>
              <Article key={project.id}>
                {project.coverImage && (
                  <Img
                    fluid={project.coverImage.fluid}
                    style={{ minHeight: '329px', maxHeight: '329px', marginBottom: '24px' }}
                  />
                )}
                <H3 style={{ marginBottom: '1rem' }}>{project.title}</H3>
                <P style={{ margin: '1rem 0' }}>{project.teaser}</P>
              </Article>
              <SmallArrowRight />
            </LinkBlock>
          ))}
        </ThreeColumnsContainer>
      </FullWidthContainer>

      {statementOne.map(({ node: post }) => (
        <Statement
          key={post.id}
          image={post.image.fluid}>
          <SubHeading>{post.subtitle}</SubHeading>
          <H3>{post.title}</H3>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </Statement>
      ))}

      <CustomContainer>
        {statementTwo.map(({ node: post }) => (
          <CustomStatement
            key={post.id}
            svg>
            <SubHeading>{post.subtitle}</SubHeading>
            <H3>{post.title}</H3>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html,
              }}
            />
          </CustomStatement>
        ))}

      </CustomContainer>

      <FullWidthContainer>
        <Header style={{marginBottom: "12px"}}>
            <H2>News</H2>
          <Line />
        </Header>

        <ThreeColumnsContainer>
          {/* {contentfulArticleList.} */}
          {articles.map(({ node: article }) => (
            <LinkBlock
              to={`/news/${article.slug}`}
              key={article.id}>
              <Article key={article.id}>
                {article.coverImage && (
                  <Img
                    fluid={article.coverImage.fluid}
                    style={{ minHeight: '329px', maxHeight: '329px', marginBottom: '32px' }}
                  />
                )}
                <H3 style={{ marginBottom: '1rem' }}>{article.title}</H3>
                <P style={{ margin: '12px 0 1rem 0' }}>{article.teaser}</P>
              </Article>
              <SmallArrowRight />
            </LinkBlock>
          ))}
        </ThreeColumnsContainer>
      </FullWidthContainer>

    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulHero: PropTypes.object.isRequired,
    allContentfulQuote: PropTypes.object.isRequired,
    contentfulPage: PropTypes.object.isRequired,
    allContentfulPerspective: PropTypes.object.isRequired,
    allContentfulProject: PropTypes.object.isRequired,
    statementOne: PropTypes.object.isRequired,
    statementTwo: PropTypes.object.isRequired,
  }),
}

export const query = graphql`
  query FrontPageQuery {
    contentfulPage(contentful_id: { eq: "2P6qkdN2Lx8fhXd3VOyKLx" }) {
      title
      metaDescription
    }
    allContentfulHero(
      filter: { contentful_id: { eq: "IkxJsGmFULejd1JzRmJry" } }
    ) {
      edges {
        node {
          id
          title
          content {
            content
          }
          image {
            fluid(maxWidth: 1800, quality: 60) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulPerspective(
      limit: 3
      sort: { order: DESC, fields: [publicationDate] }
    ) {
      edges {
        node {
          id
          publicationDate(formatString: "MMMM D, YYYY")
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
    allContentfulProject (
    limit: 3
  ) {
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
    allContentfulQuote(
      filter: { contentful_id: { eq: "27f4To0O1ACAWoyg4NR5xJ" } }
    ) {
      edges {
        node {
          id
          title
          highlightedQuote {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    statementOne: allContentfulStatement(
      filter: { contentful_id: { eq: "ztB5QO0ksjDwYIfJmAyIc" } }
    ) {
      edges {
        node {
          id
          title
          subtitle
          image {
            fluid(maxWidth: 800, quality: 60) {
              ...GatsbyContentfulFluid
            }
          }
          content {
            childMarkdownRemark {
              html
            }
          }
          reverseOrder
        }
      }
    }
    statementTwo: allContentfulStatement(
      filter: { contentful_id: { eq: "1KjFyhW9qYGmoUG6fnmAML" } }
    ) {
      edges {
        node {
          id
          title
          subtitle
          content {
            childMarkdownRemark {
              html
            }
          }
          reverseOrder
        }
      }
    }
    contentfulArticleList(contentful_id: {eq: "1f2Cy0Hi0ar4OUOKzNtfJJ"}) {
      id
      article {
        ... on ContentfulNews {
          id
          title
        }
        ... on ContentfulPerspective {
          id
          title
        }
        ... on ContentfulPressRelease {
          id
          title
        }
      }
    }
  }
`

const CustomContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;

const CustomStatement = styled(Statement)`
  grid-row: 1 / 2;

  ${mediaQuery.BREAKPOINT_2`
      margin-bottom: -150px;
  `};

  ${StatementContent} {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    z-index: 50;

    ${mediaQuery.BREAKPOINT_3`
        grid-column: 1 / 6;
    `};
  }

  ${StatementImage} {
    grid-row: 1 / 2;
    right: -170px;
    top: -140px;

    ${mediaQuery.BREAKPOINT_2`
        right: -350px;
    `};

    > div {
    ${mediaQuery.BREAKPOINT_3`
      height: 1500px;
      width: 1500px;
      position: absolute;
      left: 0;
    `};
  }

    ${mediaQuery.BREAKPOINT_3`
      grid-column: 4 / 13;
    `};

    > div {
        ${mediaQuery.BREAKPOINT_3`
            height: 1200px:
        `};
      }
  }
`;

const CenteredContainer = styled(Container)`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuoteContainer = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 4rem;

  ${mediaQuery.BREAKPOINT_3`
      margin-bottom: 100px;
      margin-top: 6rem;
  `};
`;


export default IndexPage