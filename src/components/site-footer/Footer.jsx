import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Styles
const StyledFooter = styled.footer``

const Footer = () => {
  return (
    <StyledFooter>
      <small>© Ocean Data Foundation {new Date().getFullYear()}</small>
    </StyledFooter>
  )
}

export default Footer

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}
