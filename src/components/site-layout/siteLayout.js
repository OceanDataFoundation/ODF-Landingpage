/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { GlobalStyle } from '../../utils/styles/global-style'

import Header from '../site-header/siteHeader'
import Logo from '../logo/Logo'

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]', {
      speed: 500,
      offset: '121px', // FIXME: Calculate the height of the header element
    })
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />

      <Header id="siteHeader" siteTitle={data.site.siteMetadata.title}>
        <Logo />
      </Header>
      <div>
        <main role="main">{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
