import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import { ArrowLeft } from '../components/arrow/ArrowLeft'
// Components
import {
  Article,
  ArticleContainer,
  ArticleContent,
} from '../components/article/Article'
import { AuthorProfile } from '../components/author-profile/AuthorProfile'
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Figcaption } from '../components/figcaption/Figcaption'
import { Figure } from '../components/figure/Figure'
import { Header } from '../components/header/Header'
import Line  from '../components/line/Line'
import RichTextRenderer from '../components/rich-text-renderer/RichTextRenderer'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
// Utils
import { space } from '../utils/configs/confSpace.js'

const ProjectArticle = ({ data }) => {

  console.log(data);

  const {
    title,
    teaser,
    coverImage,
    coverCaption,
    content,
    author,
  } = data.projects

  return (
    <Layout>
      <SEO
        title={title}
        metaDescription={teaser}
        image={`https:${coverImage.file.url}`}
      />

      <FullWidthContainer offset="true">
        <Header style={{marginBottom: "12px"}}>
          <Link to="/projects">
            <ArrowLeft style={{marginBottom:"40px"}} />
            <H1 size="larger">Projects</H1>
          </Link>
          <Line />
        </Header>

        <Container fluid>
          <Article>

            {coverImage && (
              <Figure coverImage>
                <Img fluid={coverImage.fluid} style={{ maxHeight: '600px' }} />
                {coverCaption && (
                  <Figcaption as="figcaption">{coverCaption}</Figcaption>
                )}
              </Figure>
            )}

            <ArticleContainer>
              <H1>{title && title}</H1>
              {teaser && (
                <P lead style={{ marginTop: `${space[6]}` }}>
                  {teaser}
                </P>
              )}
              <ArticleContent>
                <RichTextRenderer richTextJson={content.json} />
              </ArticleContent>
            </ArticleContainer>
            <AuthorProfile author={author} />
          </Article>
        </Container>
        <Link to="/projects" style={{borderBottom: "none"}}>
          <ArrowLeft style={{marginBottom:"40px"}} />
        </Link>
      </FullWidthContainer>
    </Layout>
  )
}

ProjectArticle.propTypes = {
  data: PropTypes.objectOf(PropTypes.object.isRequired),
}

export const pageQuery = graphql`
  query ProjectArticleQuery($slug: String) {
    projects: contentfulProject(slug: { eq: $slug }) {
      title
      slug
      teaser
      author {
        name
        affiliation
        biography {
          biography
        }
        pageUrl
      }
      content {
        json
      }
      coverCaption
      coverImage {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`

export default ProjectArticle