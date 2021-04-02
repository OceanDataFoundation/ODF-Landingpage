import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Style
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Components
import ContactInformation from '../contact-information/ContactInformation'
import { Container } from '../container/Container'
import { FullWidthContainer } from '../container/FullWidthContainer'
import { Line } from '../line'
import LinkList from '../link-list/LinkList'
import { H3 } from '../typography/heading/Heading'
import { Small } from '../typography/small/Small'

const Footer = props => {
  const {
    siteTitle,
    relatedLinkList,
    socialLinkList,
    contactInformation,
  } = props

  return (
    <StyledFooter>
      <FullWidthContainer>
      <Line />
      <FooterGrid>

        <FooterCol>
          {relatedLinkList && (
            <LinkList underline linkList={relatedLinkList} />
          )}

          <Link
            to="/use-of-cookies"
            style={{
              paddingBottom: '2px',
              marginTop: '32px',
              color: 'white',
              borderBottomColor: 'white',
              display: 'inline-block',
            }}>
            Use of Cookies
          </Link>
        </FooterCol>

        <FooterCol>
          <H3>Partners</H3>
        </FooterCol>

        <FooterCol>
          {contactInformation && (
            <ContactInformation
              contactInformation={contactInformation}
            />
          )}
        </FooterCol>

        <FooterCol>
          {socialLinkList && (
            <LinkList inline linkList={socialLinkList} />
          )}
          <Small style={{ marginTop: '2rem', display: 'block' }}>
            &copy; {siteTitle} {new Date().getFullYear()}
          </Small>
        </FooterCol>

      </FooterGrid>


      </FullWidthContainer>
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

const StyledFooter = styled.footer`
  padding-top: ${space[10]};
  margin-top: ${space[10]};
  margin-bottom: ${space[10]};
`

const FooterCol = styled.div`
  grid-column: span 1;

    ${mediaQuery.BREAKPOINT_3`
      grid-column: span 3;
  `};
`

const FooterGrid = styled(Container)`
  grid-template-columns: repeat(1, 100%);

  padding-right: ${space[0]};
  padding-left: ${space[0]};

  ${mediaQuery.BREAKPOINT_2`
  grid-template-columns: repeat(2, 1fr);
    padding-right: ${space[0]};
    padding-left: ${space[0]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-template-columns: repeat(12, 1fr);
  `};
`