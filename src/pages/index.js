import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import { ArrowRight } from '../components/arrow/ArrowRight'
import { Article } from '../components/article/Article'
import Blockquote from '../components/blockquote/Blockquote'
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Line  from '../components/line/Line'
import LinkBlock from '../components/link-block/LinkBlock'
import LinkButton from '../components/link-button/LinkButton'
import AnimatedLogo from '../components/logo/AnimatedLogo'
import PressRelease from '../components/press-release/PressRelease'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import Statement, { StatementContent, StatementImage } from '../components/statement/Statement'
import { H2, H3 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { SubHeading } from '../components/typography/sub-heading/SubHeading'
import Video from '../components/video/Video'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const IndexPage = ({ data }) => {
  const { title, metaDescription } = data.contentfulPage

  const heroPosts = data.allContentfulHero.edges
  const quotePosts = data.allContentfulQuote.edges
  const videoPosts = data.allContentfulVideoHero.edges

  const statementOne = data.statementOne.edges
  const statementTwo = data.statementTwo.edges
  const articles = data.allContentfulPerspective.edges

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
          to={"/#video"}
        >
        </Hero>
      ))}

      {/* <AnimatedLogo /> */}

      <Container id="quote">
        <QuoteContainer>
          {quotePosts.map(({ node: post }) => (
            <Blockquote key={post.id} cite={post.cite} author={post.author} highlightedQuote={post.highlightedQuote}>
              <Quote
                dangerouslySetInnerHTML={{
                  __html: post.content.childMarkdownRemark.html,
                }}
                />
            </Blockquote>
          ))}
        </QuoteContainer>
      </Container>


      <VideoContainer id="video">
        {videoPosts.map(({ node: post }) => (
          <Video key={post.id} id="video" videoId={post.videoId} />
          ))}
      </VideoContainer>

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
            image={post.image.fluid}>
            <SubHeading>{post.subtitle}</SubHeading>
            <H3>{post.title}</H3>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html,
              }}
            />
          </CustomStatement>
        ))}

        <CenteredContainer>
          <H2>Lets work together</H2>
          <LinkButton to="/contact">
            join us
          </LinkButton>
        </CenteredContainer>
      </CustomContainer>


      <FullWidthContainer>
        <Header style={{marginBottom: "12px"}}>
            <H2>News</H2>
          <Line />
        </Header>

        <PressRelease>
          {articles.map(({ node: article }) => (
            <LinkBlock
              to={`/communication/news/${article.slug}`}
              key={article.id}>
              <Article key={article.id}>
                {article.coverImage && (
                  <Img
                    fluid={article.coverImage.fluid}
                    style={{ minHeight: '329px', marginBottom: '24px' }}
                  />
                )}
                <H3 style={{ marginBottom: '1rem' }}>{article.title}</H3>
                <P style={{ margin: '1rem 0' }}>{article.teaser}</P>
              </Article>
              <ArrowRight />
            </LinkBlock>
          ))}
        </PressRelease>
      </FullWidthContainer>

    </Layout>
  )
}

export default IndexPage

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
    allContentfulQuote(
      filter: { contentful_id: { eq: "27f4To0O1ACAWoyg4NR5xJ" } }
    ) {
      edges {
        node {
          id
          title
          highlightedQuote
          content {
            childMarkdownRemark {
              html
            }
          }
          cite
          author
        }
      }
    }
    allContentfulVideoHero(
      filter: { contentful_id: { eq: "1tgrK4wxSh8Ja7kGZ2YaLH" } }
    ) {
      edges {
        node {
          id
          title
          videoId
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
    allContentfulPressRelease(limit: 3, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          location
          date(formatString: "MMMM D, YYYY")
          excerpt {
            childMarkdownRemark {
              html
            }
          }
          link
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
    statementThree: allContentfulStatement(
      filter: { contentful_id: { eq: "3j6lTSUDtdoe6MvOk3abcH" } }
    ) {
      edges {
        node {
          id
          title
          subtitle
          image {
            fluid(maxWidth: 800, quality: 100) {
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
    allContentfulEvents(sort: { fields: [fromDate], order: ASC }) {
      edges {
        node {
          id
          title
          location
          fromDate(formatString: "D MMMM, YYYY")
          toDate(formatString: "D MMMM, YYYY")
          link
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulEvents: PropTypes.object.isRequired,
    allContentfulHero: PropTypes.object.isRequired,
    allContentfulPerspective: PropTypes.object.isRequired,
    allContentfulPressRelease: PropTypes.object.isRequired,
    allContentfulQuote: PropTypes.object.isRequired,
    allContentfulVideoHero: PropTypes.object.isRequired,
    contentfulPage: PropTypes.object.isRequired,
    statementOne: PropTypes.object.isRequired,
    statementThree: PropTypes.object.isRequired,
    statementTwo: PropTypes.object.isRequired,
  }),
}

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

    ${mediaQuery.BREAKPOINT_2`
        grid-column: 1 / 9;
    `};

    ${mediaQuery.BREAKPOINT_3`
        grid-column: 3 / 8;
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

const VideoContainer = styled.div`
  margin-bottom: 4rem;

  ${mediaQuery.BREAKPOINT_3`
    margin-bottom: 100px;
  `};
`

const Quote = styled.div`
  grid-column: 4 / 10;
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
    ${mediaQuery.BREAKPOINT_3`
      margin-bottom: 100px;
    `};
  `};
`;

