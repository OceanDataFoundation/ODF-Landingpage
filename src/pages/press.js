import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/site-layout/Layout'
import SEO from '../components/seo/seo'

// Components
import { Container } from '../components/container/Container'
import { Header } from '../components/header/Header'
import { H1, H2 } from '../components/typography/heading/Heading'
import Masonry from '../components/masonry/Masonry'
import { PressReleaseBlock } from '../components/press-release-block/PressReleaseBlock'
import { Meta } from '../components/meta/Meta'
import { Small } from '../components/typography/small/Small'
import LinkCta from '../components/link-cta/LinkCta'

const PressRelease = ({ data }) => {
  const pressReleasePosts = data.allContentfulPressRelease.edges
  return (
    <Layout>
      <SEO title="Press releases" />
      <Container offset="true">
        <Header>
          <H1>Press Releases</H1>
        </Header>
        <Masonry col="3" minWidth={500}>
          {pressReleasePosts.map(({ node: post }) => (
            <PressReleaseBlock key={post.id}>
              <H2 style={{ fontSize: '1.5rem' }}>{post.title}</H2>
              <Meta>
                <Small>
                  {post.location} | {post.date}
                </Small>
              </Meta>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.childMarkdownRemark.html,
                }}
              />
              {post.link && (
                <LinkCta
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  Read more
                </LinkCta>
              )}
            </PressReleaseBlock>
          ))}
        </Masonry>
      </Container>
    </Layout>
  )
}

export default PressRelease

export const query = graphql`
  query PressReleasePostsPageQuery {
    allContentfulPressRelease(sort: { fields: [date], order: DESC }) {
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
  }
`

PressRelease.propTypes = {
  data: PropTypes.shape({
    allContentfulPressRelease: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.object.isRequired)
    ),
  }),
}
