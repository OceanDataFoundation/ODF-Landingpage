import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

// Tokens
import { colorNeutral } from '../../../utils/tokens/tokenColorNeutral'
import { zIndex } from '../../../utils/tokens/tokenZIndex'

// Config
import { space } from '../../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../../utils/mixins/mixMediaQuery'

// Components
import Logo from '../../logo/Logo'
import BurgerMenu from './BurgerMenu'
import CollapseMenu from './CollapseMenu'

const Header = ({ children, navItems }) => {
  const [open, setOpen] = useState(false)

  const headerAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  })

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })

  return (
    <StyledHeader>
      <Logo />
      <Nav>
        {navItems.map(element => (
          <Link to={element.link.slug} key={element.id}>
            {element.title}
          </Link>
        ))}
        <BurgerWrapper>
          <BurgerMenu open={open} setOpen={setOpen} />
        </BurgerWrapper>
      </Nav>
      <CollapseMenu navbarState={open} handleNavbar={setOpen} />
    </StyledHeader>
  )
}

export default Header

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

// const Nav = styled.nav`
//   max-width: 120rem;
//   display: flex;
//   padding: 0 2rem;
//   justify-content: space-between;
//   height: 5rem;
// `

const Nav = styled(animated.nav)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`
