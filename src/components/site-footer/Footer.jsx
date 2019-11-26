import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../../utils/configs/confSpace'

// Components
import { Container } from '../container/Container'
import ContactInformation from '../contact-information/ContactInformation'
import LinkList from '../link-list/LinkList'
import { Small } from '../typography/small/Small'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Styles
const StyledFooter = styled.footer`
  padding-top: ${space[10]};
  padding-bottom: ${space[10]};
  margin-top: ${space[6]};
  background-color: ${colorNeutral.NEUTRAL_TINT_0};
`

const FooterCol = styled.div`
  margin-bottom: ${space[10]};

  ${mediaQuery.BREAKPOINT_4`
    margin-bottom: ${space[0]};
  `};

  h6 {
    margin-bottom: ${space[4]};
  }
`

const Footer = props => {
  const {
    siteTitle,
    relatedLinkList,
    socialLinkList,
    contactInformation,
  } = props

  return (
    <StyledFooter>
      <Container col="3">
        <FooterCol>
          {relatedLinkList && (
            <LinkList invert underline linkList={relatedLinkList} />
          )}
        </FooterCol>
        <FooterCol>
          {contactInformation && (
            <ContactInformation
              invert
              contactInformation={contactInformation}
            />
          )}
        </FooterCol>
        <FooterCol>
          {socialLinkList && (
            <LinkList invert inline linkList={socialLinkList} />
          )}
          <Small invert style={{ marginTop: '2rem', display: 'block' }}>
            &copy; {siteTitle} {new Date().getFullYear()}
          </Small>
        </FooterCol>
      </Container>
    </StyledFooter>
  )
}

export default Footer

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  contactInformation: PropTypes.objectOf(PropTypes.string),
  relatedLinkList: PropTypes.object,
  socialLinkList: PropTypes.object,
}
