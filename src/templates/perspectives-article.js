import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { ArrowDown } from '../components/arrow-down/ArrowDown'
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
import { Line } from '../components/line'
import RichTextRenderer from '../components/rich-text-renderer/RichTextRenderer'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { TagList } from '../components/tag-list/TagList'
import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
// Utils
import { space } from '../utils/configs/confSpace.js'

const PerspectivesArticle = ({ data }) => {
  const {
    title,
    teaser,
    coverImage,
    coverCaption,
    keywords,
    content,
    author,
  } = data.article
  console.log('TCL: PerspectivesArticle -> coverCaption', coverCaption)

  return (
    <Layout>
      <SEO
        title={title}
        metaDescription={teaser}
        image={`https:${coverImage.file.url}`}
      />

      <FullWidthContainer offset="true">
        <CustomHeader>
          <H1>News</H1>
          <Line />
        </CustomHeader>

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
                {keywords && (
                  <TagList>
                    {keywords.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </TagList>
                )}
              </ArticleContent>
            </ArticleContainer>
            <AuthorProfile author={author} />
          </Article>

        </Container>

      </FullWidthContainer>
    </Layout>
  )
}

export default PerspectivesArticle

export const pageQuery = graphql`
  query ArticleQuery($slug: String) {
    article: contentfulPerspective(slug: { eq: $slug }) {
      title
      slug
      publicationDate(formatString: "MMMM DD, YYYY")
      teaser
      author {
        picture {
          fixed(width: 80) {
            ...GatsbyContentfulFixed
          }
        }
        name
        affiliation
        biography {
          biography
        }
        pageUrl
      }
      coverImage {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
      coverCaption
      content {
        json
      }
      keywords
    }
  }
`

PerspectivesArticle.propTypes = {
  data: PropTypes.objectOf(PropTypes.object.isRequired),
}

const CustomHeader = styled.div`
  position: relative;
`;