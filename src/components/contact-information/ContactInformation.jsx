import React from 'react'
import PropTypes from 'prop-types'

// Elements
import P from '../typography/paragraph/Paragraph'
import { H6 } from '../typography/heading/Heading'

const ContactInformation = ({ contactInformation }) => {
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
        <P invert>
          <a href={mailto}>{email}</a>
        </P>
      )
    }
  }

  const renderTelephone = () => {
    if (telephone) {
      const tel = `tel:${telephone}`
      return (
        <P invert>
          <a href={tel}>{telephone}</a>
        </P>
      )
    }
  }

  return (
    <>
      {name && <H6>{name}</H6>}
      {streetAddress && <P invert>{streetAddress}</P>}
      {postOfficeBoxNumber && <P invert>{postOfficeBoxNumber}</P>}
      {postalCode && (
        <P invert>
          {postalCode} {addressLocality}
        </P>
      )}
      {addressRegion && (
        <P invert>
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
}

export default ContactInformation
