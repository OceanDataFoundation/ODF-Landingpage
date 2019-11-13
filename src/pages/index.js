import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/site-layout/Layout'
import Image from '../components/image/image'
import SEO from '../components/seo/seo'

import Hero from '../components/hero/Hero'
import { H1 } from '../components/typography/heading/Heading'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
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

export default IndexPage
