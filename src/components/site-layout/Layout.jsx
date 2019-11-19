/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { GlobalStyle } from '../../utils/styles/global-style'

// Components
import Header from '../site-header/Header'
import Footer from '../site-footer/Footer'

const Main = styled.main``

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]')
  }

  const {
    site,
    contentfulAsset: logo,
    contentfulNavigation: { navItems },
    contentfulContactInformation: contactInformation,
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
      contentfulContactInformation(
        id: { eq: "5ee354e5-3ceb-52a1-9f0a-372b695358b7" }
      ) {
        name
        streetAddress
        postalCode
        addressLocality
        addressRegion
        addressCountry
        email
        telephone
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
        <Footer contactInformation={contactInformation} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
