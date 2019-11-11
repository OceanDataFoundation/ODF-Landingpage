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
import Navbar from '../navbar/Navbar'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      contentfulNavigation(title: { eq: "Main Navigation" }) {
        navItems {
          id
          title
          link {
            slug
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />

      <Header siteTitle={data.site.siteMetadata.title}>
        <Navbar data={data.contentfulNavigation.navItems} />
      </Header>
      <div>
        <main>{children}</main>
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
