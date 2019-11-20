import React from 'react'
import PropTypes from 'prop-types'

// Elements
import P from '../typography/paragraph/Paragraph'
import { H6 } from '../typography/heading/Heading'

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
      return (
        <P invert={invert}>
          <a href={mailto}>{email}</a>
        </P>
      )
    }
  }

  const renderTelephone = () => {
    if (telephone) {
      const tel = `tel:${telephone}`
      return (
        <P invert={invert}>
          <a href={tel}>{telephone}</a>
        </P>
      )
    }
  }

  return (
    <>
      {name && <H6 invert={invert}>{name}</H6>}
      {streetAddress && <P invert={invert}>{streetAddress}</P>}
      {postOfficeBoxNumber && <P invert={invert}>{postOfficeBoxNumber}</P>}
      {postalCode && (
        <P invert={invert}>
          {postalCode} {addressLocality}
        </P>
      )}
      {addressRegion && (
        <P invert={invert}>
          {addressRegion}, {addressCountry}
        </P>
      )}
      <br />
      {renderEmail()}
      <br />
      {renderTelephone()}
    </>
  )
}

ContactInformation.propTypes = {
  contactInformation: PropTypes.objectOf(PropTypes.string).isRequired,
  invert: PropTypes.bool,
}

export default ContactInformation
