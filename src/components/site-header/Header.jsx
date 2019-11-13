import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { useSpring, animated, config } from 'react-spring'

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
  width: 100%;
  padding: 0 ${space[4]};
  display: flex;
  align-items: stretch;
  position: fixed;
  top: 0;
  background-color: ${colorNeutral.NEUTRAL_TINT_0};
  z-index: ${zIndex.Z_INDEX_7};

  justify-content: space-between;

  ${mediaQuery.BREAKPOINT_1`
		padding: 0 ${space[6]};
  `};

  ${mediaQuery.BREAKPOINT_2`
		padding: 0 ${space[8]};
  `};
`

// UI
const Header = props => {
  const { siteTitle, logo, navItems } = props

  const [open, setOpen] = useState(false)

  // const headerAnimation = useSpring({
  //   from: { transform: 'translate3d(0, -10rem, 0)' },
  //   transform: 'translate3d(0, 0, 0)',
  // })

  // const linkAnimation = useSpring({
  //   from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
  //   to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  //   delay: 800,
  //   config: config.wobbly,
  // })

  return (
    <StyledHeader>
      <Logo logo={logo} siteTitle={siteTitle} />
      <Nav navItems={navItems} open={open} setOpen={setOpen} />
      <CollapseMenu navbarState={open} handleNavbar={setOpen} />
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}
