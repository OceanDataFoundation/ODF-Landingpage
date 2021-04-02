import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'
// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'
import { H3 } from '../typography/heading/Heading'
// Components
import P from '../typography/paragraph/Paragraph'

const ContactInformation = ({ contactInformation, invert }) => {
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
      <H3>Contact</H3>
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
  color: ${colorNeutral.NEUTRAL_TINT_100};
  text-decoration: none;
  border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_100};

  ${Transition};

  :hover,
  :focus {
    color: ${colorNeutral.NEUTRAL_TINT_100};
    border-bottom-color: transparent;
  }
`

ContactInformation.propTypes = {
  contactInformation: PropTypes.objectOf(PropTypes.string).isRequired,
  invert: PropTypes.bool,
}

export default ContactInformation
