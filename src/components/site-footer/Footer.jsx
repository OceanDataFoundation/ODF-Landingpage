import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'
import ContactInformation from '../contact-information/ContactInformation'

// Styles
const StyledFooter = styled.footer`
  background-color: ${colorNeutral.NEUTRAL_TINT_0};
  color: ${colorNeutral.NEUTRAL_TINT_100};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;

    li {
      line-height: 2;
    }
  }

  a {
    text-decoration: none;
    color: ${colorNeutral.NEUTRAL_TINT_100};

    :hover {
      text-decoration: underline;
    }
  }
`

const MainSection = styled.section`
  display: flex;
  padding: 1.25rem 1.875rem;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: ${breakpoints.BREAKPOINT_2}) {
    justify-content: space-around;
  }
`

const MainCol = styled.div`
  padding: 1.25rem;
  min-width: 12.5rem;

  h6 {
    padding-bottom: 1rem;
  }
  p {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${breakpoints.BREAKPOINT_2}) {
    margin-right: auto;
  }
`

const IconContainer = styled.div`
  display: flex;

  img {
    width: 2rem;
  }
`

const LegalSection = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 1.25rem;
  height: 11rem;

  small {
    align-self: end;
  }
`

const Footer = ({ siteTitle, contactInformation }) => {
  console.log('TCL: Footer -> contactInformation', contactInformation)

  return (
    <StyledFooter>
      <MainSection>
        <MainCol>
          <h6>Related</h6>
          <ul>
            <li>
              <a href="https://oceandata.earth/">The Foundation</a>
            </li>
            <li>
              <a href="https://www.revocean.org/">Rev Ocean</a>
            </li>
            <li>
              <a href="https://www.revocean.org/plast_ghana/">
                Plastic REVolution
              </a>
            </li>
            <li>
              <a href="https://www.akerasa.com/">Aker ASA</a>
            </li>
          </ul>
        </MainCol>
        <MainCol>
          <ContactInformation contactInformation={contactInformation} />
        </MainCol>
        <MainCol>
          <h6>Connect</h6>
          <IconContainer></IconContainer>
          <LegalSection>
            <small>
              © {siteTitle} {new Date().getFullYear()}
            </small>
          </LegalSection>
        </MainCol>
      </MainSection>
    </StyledFooter>
  )
}

export default Footer

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  contactInformation: PropTypes.objectOf(PropTypes.string),
}
