import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Style
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Components
import Accordion from '../accordion/Accordion'
import ContactInformation from '../contact-information/ContactInformation'
import { Container } from '../container/Container'
import { FullWidthContainer } from '../container/FullWidthContainer'
import Line from '../line/Line'
import LinkList from '../link-list/LinkList'
import { H3 } from '../typography/heading/Heading'
import { Small } from '../typography/small/Small'

const Footer = props => {
  const {
    siteTitle,
    socialLinkList,
    contactInformation,
  } = props

  return (
    <StyledFooter>
      <FullWidthContainer>

        <MobileFooter>
          <Accordion title={"WEF Network  "}>
              <Link
                to="/"
                style={{
                  paddingBottom: '2px',
                  color: '#02FFD1',
                  borderBottomColor: '#02FFD1',
                  display: 'inline-block',
                }}>
                Input link here
              </Link>
          </Accordion>

          <Accordion title={"Contact"}>
            {contactInformation && (
              <ContactInformation noHeading
                contactInformation={contactInformation}
              />
            )}
          </Accordion>

          {socialLinkList && (
            <LinkList inline linkList={socialLinkList} />
          )}
          <Small style={{ marginTop: '2rem', display: 'block' }}>
            &copy; {siteTitle} {new Date().getFullYear()}
          </Small>

          <Link
              to="/use-of-cookies"
              style={{
                paddingBottom: '2px',
                marginTop: '32px',
                color: '#02FFD1',
                borderBottomColor: '#02FFD1',
                display: 'inline-block',
              }}>
              Use of Cookies
            </Link>

        </MobileFooter>

        <DesktopFooter>
          <Line largeMargin />
          <FooterGrid fluid>

            <FooterCol>
              <H3>WEF Network</H3>
              <Link
                to="/"
                style={{
                  paddingBottom: '2px',
                  color: '#02FFD1',
                  borderBottomColor: '#02FFD1',
                  display: 'inline-block',
                }}>
                Input link here
              </Link>
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

              <Link
                to="/use-of-cookies"
                style={{
                  paddingBottom: '2px',
                  marginTop: '32px',
                  color: '#02FFD1',
                  borderBottomColor: '#02FFD1',
                  display: 'inline-block',
                }}>
                Use of Cookies
              </Link>
            </FooterCol>

          </FooterGrid>

        </DesktopFooter>




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

const MobileFooter = styled.div`
  margin-bottom: 3rem;

  ${mediaQuery.BREAKPOINT_3`
    display: none;
    margin-bottom: 0;
  `};
`;

const DesktopFooter = styled.div`
  display: none;
  ${mediaQuery.BREAKPOINT_3`
    display: block;
  `};
`;

const StyledFooter = styled.footer`
  margin-top: ${space[5]};

  ${mediaQuery.BREAKPOINT_3`
    padding-top: ${space[10]};
    margin-top: ${space[10]};
    margin-bottom: ${space[10]};
  `};
`

const FooterCol = styled.div`
  grid-column: span 1;

    ${mediaQuery.BREAKPOINT_3`
      grid-column: span 4;
  `};
`

const FooterGrid = styled(Container)`

  ${mediaQuery.BREAKPOINT_2`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-template-columns: repeat(12, 1fr);
  `};
`