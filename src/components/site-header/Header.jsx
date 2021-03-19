import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

// Hooks
import { useDocumentScrollThrottled } from '../../hooks/useDocumentScroll'
import { space } from '../../utils/configs/confSpace'
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Utils
import { colorBrandPurple } from '../../utils/tokens/tokenColorBrand'
import { zIndex } from '../../utils/tokens/tokenZIndex'
// Components
import Logo from '../logo/Logo'
import CollapseMenu from './CollapseMenu'
import Nav from './Nav'

// Styles
const StyledHeader = styled.header`
  z-index: ${zIndex.Z_INDEX_7};
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: ${colorBrandPurple.PURPLE_TINT_50};
  padding: 0 ${space[4]};

  ${mediaQuery.BREAKPOINT_2`
		padding: 0 ${space[6]};
  `};

  ${mediaQuery.BREAKPOINT_3`
		padding: 0 ${space[8]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    transform: ${props =>
      props.hideHeader ? 'translateY(-110%)' : 'translateY(0)'};
    transition: transform 0.3s ease;
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
  const TIMEOUT_DELAY = 15

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  return (
    <StyledHeader hideHeader={hideHeader}>
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
