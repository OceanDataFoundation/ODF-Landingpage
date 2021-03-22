import { Link } from 'gatsby'
import React from 'react'

import { Container } from '../components/container/Container'
import { Header } from '../components/header/Header'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container offset="true" background="white">
      <Header>
        <H1>Page not found</H1>
      </Header>
      <P>You just hit a route that doesn&#39;t exist... The sadness :-(</P>
      <Link to="/" style={{ borderBottom: 'none', color:"#fff" }}>
        &larr; Back to homepage
      </Link>
    </Container>
  </Layout>
)

export default NotFoundPage
