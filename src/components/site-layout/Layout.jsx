/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Style
import { GlobalStyle } from '../../utils/styles/global-style'
import Footer from '../site-footer/Footer'
// Components
import Header from '../site-header/Header'

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]')
  }

  const {
    site,
    contentfulAsset: logo,
    contentfulNavigation: { navItems },
    relatedLinkList,
    socialLinkList,
    contentfulContactInformation: contactInformation,
  } = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      contentfulAsset(contentful_id: { eq: "65Do8Cm2Ri4hQcJvhxTXP4" }) {
        description
        file {
          url
          fileName
          contentType
        }
      }
      contentfulNavigation(id: { eq: "caba71c2-67f9-5ace-b9c2-36e6587288a4" }) {
        navItems {
          id
          text
          externalLink
          link {
            slug
          }
        }
      }
      relatedLinkList: contentfulLinkList(
        id: { eq: "fd27a86d-7c8a-569b-a1b0-a75247283926" }
      ) {
        text
        listItems {
          id
          url
          text
          description
        }
      }
      socialLinkList: contentfulLinkList(
        id: { eq: "3015b022-e367-574f-9c98-436262551dbc" }
      ) {
        text
        listItems {
          id
          url
          text
          description
          image {
            description
            file {
              url
            }
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


      <ContentWrap>
        <Main>{children}</Main>
        <Footer
          siteTitle={site.siteMetadata.title}
          relatedLinkList={relatedLinkList}
          socialLinkList={socialLinkList}
          contactInformation={contactInformation}
        />
      </ContentWrap>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


const ContentWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  `

const Main = styled.main`
  flex: 1 0 auto;
`

export default Layout