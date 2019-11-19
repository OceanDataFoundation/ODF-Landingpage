import React from 'react'
import PropTypes from 'prop-types'

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
        <p>
          <a href={mailto}>{email}</a>
        </p>
      )
    }
  }

  const renderTelephone = () => {
    if (telephone) {
      const tel = `tel:${telephone}`
      return (
        <p>
          <a href={tel}>{telephone}</a>
        </p>
      )
    }
  }

  return (
    <>
      {name && <h6>{name}</h6>}
      {streetAddress && <p>{streetAddress}</p>}
      {postOfficeBoxNumber && <p>{postOfficeBoxNumber}</p>}
      {postalCode && (
        <p>
          {postalCode} {addressLocality}
        </p>
      )}
      {addressRegion && (
        <p>
          {addressRegion}, {addressCountry}
        </p>
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
