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

// Components
import Header from '../site-header/Header'
import Footer from '../site-footer/Footer'

const Layout = ({ children }) => {
  const {
    site,
    contentfulAsset: logo,
    contentfulNavigation: { navItems },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      contentfulAsset(title: { eq: "odf-logo" }) {
        description
        file {
          url
          fileName
          contentType
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

      <Header
        siteTitle={site.siteMetadata.title}
        logo={logo}
        navItems={navItems}
      />

      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
