import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Article } from '../components/article/Article'
import { Author } from '../components/author/Author'
import Blockquote from '../components/blockquote/Blockquote'
import { Box } from '../components/box/Box'
import { Container } from '../components/container/Container'
import Hero from '../components/hero/Hero'
import Intro from '../components/intro/Intro'
import LinkBlock from '../components/link-block/LinkBlock'
import LinkButton from '../components/link-button/LinkButton'
import LinkCta from '../components/link-cta/LinkCta'
import { Meta } from '../components/meta/Meta'
import PressRelease from '../components/press-release/PressRelease'
import SEO from '../components/seo/seo'
// Components
import Layout from '../components/site-layout/Layout'
import Statement from '../components/statement/Statement'
import { H1, H2, H3 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { SubHeading } from '../components/typography/sub-heading/SubHeading'
import Video from '../components/video/Video'

const IndexPage = ({ data }) => {
  const { title, metaDescription } = data.contentfulPage

  const heroPosts = data.allContentfulHero.edges
  const quotePosts = data.allContentfulQuote.edges
  const videoPosts = data.allContentfulVideoHero.edges

  const statementOne = data.statementOne.edges
  const statementTwo = data.statementTwo.edges
  const statementThree = data.statementThree.edges

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
        <Hero key={post.id} bgImage={post.image.fluid.src}>
          <H1 size="larger">
            {post.title}
          </H1>
          <P lead>
            {post.content.content}
          </P>
          <LinkButton
            to="/#video"
            style={{ marginTop: '2rem', display: 'inline-block' }}>
            Watch video
          </LinkButton>
        </Hero>
      ))}

      {/* <Container id="quote" fluid>
        <Box>
          <Container as="div">
            {quotePosts.map(({ node: post }) => (
              <Blockquote key={post.id} cite={post.cite} author={post.author}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content.childMarkdownRemark.html,
                  }}
                />
              </Blockquote>
            ))}
          </Container>
        </Box>
      </Container> */}

      {/* {statementOne.map(({ node: post }) => (
        <Statement
          key={post.id}
          image={post.image.fluid}
          reverse={post.reverseOrder === 'Yes' ? post.reverseOrder : null}>
          <SubHeading>{post.subtitle}</SubHeading>
          <H2>{post.title}</H2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </Statement>
      ))} */}

      <VideoContainer id="video">
        {videoPosts.map(({ node: post }) => (
          <Video key={post.id} id="video" videoId={post.videoId} />
        ))}
      </VideoContainer>

      {/* {statementTwo.map(({ node: post }) => (
        <Statement
          key={post.id}
          image={post.image.fluid}
          reverse={post.reverseOrder === 'Yes' ? post.reverseOrder : null}
          removeOffset={true}>
          <SubHeading>{post.subtitle}</SubHeading>
          <H2>{post.title}</H2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </Statement>
      ))} */}

      {/* <Container fluid>
        <Box>
          <Container as="div">
            <SubHeading>News</SubHeading>
            <PressRelease>
              {articles.map(({ node: article }) => (
                <LinkBlock
                  to={`/communcation/${article.slug}`}
                  key={article.id}>
                  <Article key={article.id}>
                    {article.coverImage && (
                      <Img
                        fluid={article.coverImage.fluid}
                        style={{ maxHeight: '240px' }}
                      />
                    )}
                    <H3 style={{ marginBottom: '1rem' }}>{article.title}</H3>
                    <P style={{ margin: '1rem 0' }}>{article.teaser}</P>
                    <Author
                      name={article.author.name}
                      picture={article.author.picture.fixed}
                    />
                  </Article>
                </LinkBlock>
              ))}
            </PressRelease>
            <LinkButton to="/communcation/1" showArrow pressRelease>
              More news
            </LinkButton>
          </Container>
        </Box>
      </Container> */}

      {/* {statementThree.map(({ node: post }) => (
        <Statement
          key={post.id}
          image={post.image.fluid}
          reverse={post.reverseOrder === 'Yes' ? post.reverseOrder : null}>
          <SubHeading>{post.subtitle}</SubHeading>
          <H2>{post.title}</H2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </Statement>
      ))} */}

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
          author {
            name
            picture {
              fixed(width: 80) {
                ...GatsbyContentfulFixed
              }
            }
          }
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

const VideoContainer = styled.div``
