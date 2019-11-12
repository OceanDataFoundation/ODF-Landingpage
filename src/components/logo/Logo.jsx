import React from 'react'
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
import logoSVG from '../../images/odf-logo.svg'

export const Logo = props => {
  const { ...rest } = props

  return (
    <LogoLink to="/">
      <LogoHeading>Welcome to Ocean Data Foundation</LogoHeading>
      <LogoStyle src={logoSVG} alt="Ocean Data Foundation Logo" {...rest} />
    </LogoLink>
  )
}

export const LogoLink = styled(Link)`
  ${Transition};

  height: 100%;
  padding-top: ${space[4]};
  padding-bottom: ${space[4]};
  box-shadow: inset 0 0 0 0 ${colorBrandGreen.GREEN_TINT_50};
  transition-property: box-shadow;

  ${mediaQuery.BREAKPOINT_2`
		padding-top: ${space[5]};
    padding-bottom: ${space[5]};
  `};

  ${mediaQuery.BREAKPOINT_3`
		padding-top: ${space[6]};
    padding-bottom: ${space[6]};
  `};

  :hover,
  :focus {
    box-shadow: inset 0 -2px 0 0 ${colorBrandGreen.GREEN_TINT_50};

    ${mediaQuery.BREAKPOINT_2`
      box-shadow: inset 0 -4px 0 0 ${colorBrandGreen.GREEN_TINT_50};
    `};

    ${mediaQuery.BREAKPOINT_3`
      box-shadow: inset 0 -8px 0 0 ${colorBrandGreen.GREEN_TINT_50};
    `};
  }
`

export const LogoHeading = styled(H1)`
  ${SrOnly}
`

export const LogoStyle = styled.img`
  width: 150px;
  display: block;

  ${mediaQuery.BREAKPOINT_1`
		width: 200px;
  `};

  ${mediaQuery.BREAKPOINT_2`
		width: 250px;
  `};
`

export default Logo
