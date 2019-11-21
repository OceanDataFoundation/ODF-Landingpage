import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

// Utils
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { zIndex } from '../../utils/tokens/tokenZIndex'
import { space } from '../../utils/configs/confSpace'
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Hooks
import { useDocumentScrollThrottled } from '../../hooks/useDocumentScroll'

// Components
import Logo from '../logo/Logo'
import Nav from './Nav'
import CollapseMenu from './CollapseMenu'

// Styles
const StyledHeader = styled(animated.header)`
  z-index: ${zIndex.Z_INDEX_7};
  position: fixed;
  top: 0px;
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

  const [hideHeader, setHideHeader] = useState(false)

  const MINIMUM_SCROLL = 120
  const TIMEOUT_DELAY = 200

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const translateY = 'translateY(-110%)'
  const originalY = 'translateY(0)'

  const animationProps = useSpring({
    transform: hideHeader ? translateY : originalY,
  })

  return (
    <StyledHeader style={animationProps}>
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
