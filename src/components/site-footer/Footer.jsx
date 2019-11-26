import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
// import { breakpoints } from '../../utils/tokens/tokenBreakpoints'

// Config
import { space } from '../../utils/configs/confSpace'

// Components
import { Container } from '../container/Container'
import ContactInformation from '../contact-information/ContactInformation'
import LinkList from '../link-list/LinkList'
import { Small } from '../typography/small/Small'

// Mixins
// import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Styles
const StyledFooter = styled.footer`
  padding-top: ${space[10]};
  padding-bottom: ${space[10]};

  /* flex-shrink: 0; */
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

// const MainSection = styled.section`
//   padding-top: ${space[10]};
//   padding-bottom: ${space[10]};
//   display: flex;
//   flex-wrap: wrap;

//   ${mediaQuery.BREAKPOINT_2`
//     justify-content: space-between;
//   `};
// `

const MainCol = styled.div`
  /* min-width: 12.5rem; */

  h6 {
    padding-bottom: 1rem;
  }
  p {
    margin-bottom: 0;
  }
`

// const LegalSection = styled.section`
//   display: flex;
//   justify-content: center;
//   padding-bottom: 1.25rem;
//   height: 8rem;

//   small {
//     align-self: end;
//   }
// `

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
        {/* <MainSection> */}
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
          {/* <LegalSection> */}
          <Small invert>
            &copy; {siteTitle} {new Date().getFullYear()}
          </Small>
          {/* </LegalSection> */}
        </MainCol>
        {/* </MainSection> */}
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
