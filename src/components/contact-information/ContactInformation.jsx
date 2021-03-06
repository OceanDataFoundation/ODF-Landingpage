import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../../utils/configs/confSpace'

// Components
import P from '../typography/paragraph/Paragraph'
import { H6 } from '../typography/heading/Heading'

// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'

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
      {name && <H6 invert={invert}>{name}</H6>}
      <P invert={invert}>
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
