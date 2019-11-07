import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logoSVG from '../../images/odf-logo.svg'

export const Logo = props => {
  const { ...rest } = props

  return (
    <Link to="/">
      <LogoStyle src={logoSVG} alt="Ocean Data Foundation Logo" {...rest} />
    </Link>
  )
}

export const LogoStyle = styled.img`
  width: 250px;
`

export default Logo
