import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'
// Tokens
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'
// Components
import { H3 } from '../typography/heading/Heading'
import P from '../typography/paragraph/Paragraph'

const ContactInformation = ({ contactInformation, invert, noHeading }) => {
  const {
    name,
    streetAddress,
    postOfficeBoxNumber,
    postalCode,
    addressLocality,
    addressRegion,
    addressCountry,
    email,
    telephone,
  } = contactInformation

  const renderEmail = () => {
    if (email) {
      const mailto = `mailto:${email}`
      return <Link href={mailto}>{email}</Link>
    }
  }

  const renderTelephone = () => {
    if (telephone) {
      const tel = `tel:${telephone}`
      return <Link href={tel}>{telephone}</Link>
    }
  }

  return (
    <>
      {!noHeading && <H3>Contact</H3>}
      <P>
        {name && (
          <>
            {name} <br />
          </>
        )}
        {streetAddress && (
          <>
            {streetAddress} <br />
          </>
        )}
        {postOfficeBoxNumber && (
          <>
            {postOfficeBoxNumber}
            <br />
          </>
        )}
        {postalCode && (
          <>
            {postalCode} {addressLocality}
            <br />
          </>
        )}
        {addressRegion && (
          <>
            {addressRegion}, {addressCountry}
          </>
        )}
      </P>
      <P invert={invert}>{renderEmail()}</P>
      <P invert={invert}>{renderTelephone()}</P>
    </>
  )
}

const Link = styled.a`
  padding-bottom: ${space[2]};
  color: ${colorBrandGreen.GREEN_TINT_50};
  text-decoration: none;
  border-bottom: 1px solid ${colorBrandGreen.GREEN_TINT_50};

  ${Transition};

  :hover,
  :focus {
    border-bottom-color: transparent;
  }
`

ContactInformation.propTypes = {
  contactInformation: PropTypes.objectOf(PropTypes.string).isRequired,
  invert: PropTypes.bool,
  noHeading: PropTypes.bool
}

export default ContactInformation
