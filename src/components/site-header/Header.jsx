import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

// Hooks
import { useDocumentScrollThrottled } from '../../hooks/useDocumentScroll'
// Config
import { space } from '../../utils/configs/confSpace'
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'
// Utils
import { colorBrandPurple } from '../../utils/tokens/tokenColorBrand'
import { fontFamily } from '../../utils/tokens/tokenFontFamily'
import { zIndex } from '../../utils/tokens/tokenZIndex'
// Components
import Logo from '../logo/Logo'
import P from '../typography/paragraph/Paragraph'
import CollapseMenu from './CollapseMenu'
import Nav from './Nav'

const Header = props => {
  const { siteTitle, logo, navItems } = props

  const [open, setOpen] = useState(false)

  const [hideHeader, setHideHeader] = useState(false)

  const MINIMUM_SCROLL = 50
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

        <LogoAndTextContainer>
          <Logo logo={logo} siteTitle={siteTitle} />

        <CustomP>Centre for the forth Industrial Revolution Connected to World Economic Forum</CustomP>

        </LogoAndTextContainer>


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

// Styles
const StyledHeader = styled.header`
  z-index: ${zIndex.Z_INDEX_7};
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: ${colorBrandPurple.PURPLE_TINT_50};
  padding-right: 20px;
  padding-left: 20px;

  ${mediaQuery.BREAKPOINT_2`
    padding-right: ${space[6]};
    padding-left: ${space[6]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    transform: ${props =>
      props.hideHeader ? 'translateY(-160%)' : 'translateY(0)'};
    transition: transform 0.3s ease;

    padding-right: ${space[7]};
    padding-left: ${space[7]};
  `};
`

const CustomP = styled(P)`
  font-family: ${fontFamily.FONT_FAMILY_1.join()};
  font-weight: 500;
  position: absolute;
  top: 80px;
  max-width: 350px;
  display: none;

  ${mediaQuery.BREAKPOINT_3`
    display: block;
  `};
`;

const LogoAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  grid-column: 1 / span 12;
  max-width: ${breakpoints.BREAKPOINT_4};
  margin: 0 auto;

  padding-right: ${space[0]};
  padding-left: ${space[0]};

  ${mediaQuery.BREAKPOINT_2`
    padding-right: ${space[0]};
    padding-left: ${space[0]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding-right: ${space[0]};
    padding-left: ${space[0]};
  `};

  ${mediaQuery.BREAKPOINT_4`
    padding-right: ${space[7]};
    padding-left: ${space[7]};
  `};
`