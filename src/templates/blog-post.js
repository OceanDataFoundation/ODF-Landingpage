import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// TODO: Move styled components
import styled from 'styled-components'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

// Components
import { Container } from '../components/container/Container'
import {
  Article,
  ArticleContainer,
  ArticleContent,
} from '../components/article/Article'
import { Header } from '../components/header/Header'
import { Meta } from '../components/meta/Meta'
import { Figure } from '../components/figure/Figure'
import { Figcaption } from '../components/figcaption/Figcaption'
import { TagList } from '../components/tag-list/TagList'
import LinkButton from '../components/link-button/LinkButton'

import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'

const MetaContainer = styled(Meta)`
  display: flex;
  align-items: center;
`

const MetaText = styled.div`
  margin-left: 8px;
`

const Author = styled.div`
  display: flex;

  margin: 0 0 64px 64px;
  border-top: 1px solid lightgray;
  padding-top: 32px;
  max-width: 70ch;

  p {
    margin-bottom: 0.5rem;
  }

  h3 {
    margin: 0;
  }
`

const AuthorText = styled.div`
  margin-left: 16px;
`

const BlogPost = ({ data }) => {
  console.log('TCL: BlogPost -> data', data)
  const {
    title,
    teaser,
    coverImage,
    coverCaption,
    keywords,
    content,
    publicationDate,
    author,
  } = data.blogPost
  console.log('TCL: BlogPost -> author', author)

  const renderedContent = documentToReactComponents(content.json)

  return (
    <Layout>
      <SEO
        title={title}
        metaDescription={teaser}
        image={`https:${coverImage.file.url}`}
      />

      <Container offset="true">
        <Article>
          <Header>
            <H1>{title && title}</H1>
            <MetaContainer>
              <Img
                alt={author.name}
                fixed={author.picture.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                style={{ borderRadius: '50%', width: '48px', height: '48px' }}
              />
              <MetaText>
                <div>
                  <span>{author.name}</span>
                  {author.affiliation && <span> - {author.affiliation}</span>}
                </div>
                <small>{publicationDate}</small>
              </MetaText>
            </MetaContainer>
          </Header>

          {coverImage && (
            <Figure>
              <Img fluid={coverImage.fluid} style={{ maxHeight: '600px' }} />
              {coverCaption && (
                <Figcaption as="figcaption">
                  {coverCaption.coverCaption && coverCaption.coverCaption}
                </Figcaption>
              )}
            </Figure>
          )}

          <ArticleContainer>
            <ArticleContent>
              {teaser && <P lead>{teaser}</P>}
              {renderedContent}
              {keywords && (
                <TagList>
                  {keywords.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </TagList>
              )}
            </ArticleContent>
          </ArticleContainer>
          <Author>
            <div style={{ width: '80px', height: '80px' }}>
              <Img
                alt={author.name}
                fixed={author.picture.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <AuthorText>
              <div>
                <p>WRITTEN BY</p>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3>{author.name}</h3>
                  <a href={author.pageUrl} target="blank">
                    Link
                  </a>
                </div>
                {author.affiliation && <p>{author.affiliation}</p>}
              </div>
              <small>{author.bio.biography}</small>
            </AuthorText>
          </Author>
        </Article>

        <LinkButton to="/blog/page/1" showArrow alignCenter>
          See all posts
        </LinkButton>
      </Container>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogQuery($slug: String) {
    blogPost: contentfulBlogPost(slug: { eq: $slug }) {
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
        bio: biography {
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

BlogPost.propTypes = {
  data: PropTypes.objectOf(PropTypes.object.isRequired),
}
