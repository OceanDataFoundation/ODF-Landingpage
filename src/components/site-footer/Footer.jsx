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
import { Box } from '../box/Box'
import LinkList from '../link-list/LinkList'
import { Small } from '../typography/small/Small'

// Styles
const StyledFooter = styled.footer`
  padding-top: ${space[10]};

  background-color: ${colorNeutral.NEUTRAL_TINT_0};

  * {
    box-sizing: border-box;
  }

  h6 {
    margin-bottom: ${space[0]};
  }

  ul {
    padding: ${space[0]};
    margin: ${space[0]};
    list-style: none;

    li {
      :not(:last-child) {
        margin-bottom: ${space[4]};
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`

const MainCol = styled.div`
  padding-bottom: ${space[10]};

  h6 {
    padding-bottom: 1rem;
  }
  p {
    margin-bottom: 0;
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
    <>
      <Container fluid>
        <Box>Stay in the loop?</Box>
      </Container>
      <StyledFooter>
        <Container col="3">
          <MainCol>
            {relatedLinkList && <LinkList invert linkList={relatedLinkList} />}
          </MainCol>
          <MainCol>
            {contactInformation && (
              <ContactInformation
                invert
                contactInformation={contactInformation}
              />
            )}
          </MainCol>
          <MainCol>
            {socialLinkList && (
              <LinkList invert inline linkList={socialLinkList} />
            )}
            <Small invert>
              &copy; {siteTitle} {new Date().getFullYear()}
            </Small>
          </MainCol>
        </Container>
      </StyledFooter>
    </>
  )
}

export default Footer

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  contactInformation: PropTypes.objectOf(PropTypes.string),
  relatedLinkList: PropTypes.object,
  socialLinkList: PropTypes.object,
}
