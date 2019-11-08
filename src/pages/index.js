import React from 'react'
import { Link, graphql } from 'gatsby'

// Components
import Layout from '../components/site-layout/siteLayout'
import Image from '../components/image/image'
import SEO from '../components/seo/seo'

import FrontPageHero from '../components/frontpage-hero/FrontPageHero'
import { H1 } from '../components/typography/heading/Heading'

const IndexPage = ({ data }) => {
  const heroPosts = data.allContentfulHero.edges

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      {heroPosts.map(({ node: post }) => (
        <FrontPageHero
          key={post.id}
          bgImage={post.image.file.url}
          title={post.title}>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </FrontPageHero>
      ))}

      <div>
        <H1>Hello There 1</H1>
        <p>Welcome my awesome blog</p>
        <div>
          <div>
            <Image />
          </div>
        </div>
        <Link to="/news/">View all posts</Link>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HeroPostsPageQuery {
    allContentfulHero(
      filter: { contentful_id: { eq: "IkxJsGmFULejd1JzRmJry" } }
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
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
