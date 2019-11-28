import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Token
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Styles
import { SrOnly } from '../../utils/styles/utility-classes/sr-only'
import { Transition } from '../../utils/styles/utility-classes/transition'

// Components
import { H1 } from '../typography/heading/Heading'

export const LogoLink = styled(Link)`
  ${Transition};

  height: 100%;
  padding-top: ${space[4]};
  padding-bottom: ${space[4]};
  box-shadow: inset 0 0 0 0 ${colorBrandGreen.GREEN_TINT_50};
  border-bottom: none;
  transition-property: box-shadow;

  ${mediaQuery.BREAKPOINT_2`
		padding-top: ${space[5]};
    padding-bottom: ${space[5]};
  `};

  ${mediaQuery.BREAKPOINT_3`
		padding-top: ${space[5]};
    padding-bottom: ${space[5]};
  `};

  :hover,
  :focus {
    box-shadow: inset 0 -1px 0 0 ${colorBrandGreen.GREEN_TINT_50};
  }
`

export const LogoHeading = styled(H1)`
  ${SrOnly}
`

export const LogoStyle = styled.img`
  width: 150px;
  display: block;

  ${mediaQuery.BREAKPOINT_2`
		width: 175px;
  `};

  ${mediaQuery.BREAKPOINT_3`
		width: 225px;
  `};
`

export const Logo = ({ logo, siteTitle }) => {
  const { description, file } = logo

  return (
    <LogoLink to="/">
      <LogoHeading>{`Welcome to ${siteTitle}`}</LogoHeading>
      <LogoStyle src={file.url} alt={description} />
    </LogoLink>
  )
}

export default Logo

Logo.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    description: PropTypes.string,
    file: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
}
