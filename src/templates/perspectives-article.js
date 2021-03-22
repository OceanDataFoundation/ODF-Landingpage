import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import {
  Article,
  ArticleContainer,
  ArticleContent,
} from '../components/article/Article'
import { AuthorProfile } from '../components/author-profile/AuthorProfile'
import { Author } from '../components/author/Author'
// Components
import { Container } from '../components/container/Container'
import { Figcaption } from '../components/figcaption/Figcaption'
import { Figure } from '../components/figure/Figure'
import { Header } from '../components/header/Header'
import LinkButton from '../components/link-button/LinkButton'
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
    publicationDate,
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

      <Container offset="true">
        <Article>
          <Header fullWidth>
            <H1>{title && title}</H1>
            <Author
              name={author.name}
              picture={author.picture.fixed}
              date={publicationDate}
            />
          </Header>

          {coverImage && (
            <Figure>
              <Img fluid={coverImage.fluid} style={{ maxHeight: '600px' }} />
              {coverCaption && (
                <Figcaption as="figcaption">{coverCaption}</Figcaption>
              )}
            </Figure>
          )}

          <ArticleContainer>
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

        <LinkButton to="/communcation/1" showArrow alignCenter>
          See all posts
        </LinkButton>
      </Container>
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
