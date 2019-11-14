import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { zIndex } from '../../utils/tokens/tokenZIndex'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import Logo from '../logo/Logo'
import Nav from './Nav'
import CollapseMenu from './CollapseMenu'

// Styles
const StyledHeader = styled.header`
  z-index: ${zIndex.Z_INDEX_7};
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${colorNeutral.NEUTRAL_TINT_0};
  padding: 0 ${space[4]};

  ${mediaQuery.BREAKPOINT_1`
		padding: 0 ${space[6]};
  `};

  ${mediaQuery.BREAKPOINT_2`
		padding: 0 ${space[8]};
  `};
`

const FlexContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

const Header = props => {
  const { siteTitle, logo, navItems } = props

  const [open, setOpen] = useState(false)

  return (
    <StyledHeader>
      <FlexContainer>
        <Logo logo={logo} siteTitle={siteTitle} />
        <Nav navItems={navItems} open={open} setOpen={setOpen} />
      </FlexContainer>
      <CollapseMenu navItems={navItems} isOpen={open} handleNavbar={setOpen} />
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}
