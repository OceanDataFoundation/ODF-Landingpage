import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/site-layout/siteLayout'
import Image from '../components/image/image'
import SEO from '../components/seo/seo'

import { H1 } from '../components/typography/heading/Heading'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <H1>Hello There 1</H1>
      <p>Welcome my awesome blog</p>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: '0 auto 1.45rem',
          }}>
          <Image />
        </div>
      </div>
      <Link to="/news/">View all posts</Link>
    </div>
  </Layout>
)

export default IndexPage
