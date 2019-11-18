import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Token
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import BurgerMenu from './BurgerMenu'

const StyledNav = styled.nav`
  justify-self: end;
  margin: auto 0;
  list-style-type: none;
`

const NavList = styled.ul`
  display: none;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
  }

  & a {
    margin-right: ${space[6]};
    color: ${colorNeutral.NEUTRAL_TINT_100};
    padding-bottom: ${space[5]};
    border-bottom: 1px solid transparent;
    transition: all 300ms cubic-bezier(0.1, 0.1, 0.6, 0.85);
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      padding-bottom: ${space[2]};
      border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_100};
    }
  }

  ${mediaQuery.BREAKPOINT_3`
      display: initial;
    `}
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  ${mediaQuery.BREAKPOINT_3`
      display: none;
    `}
`

const Nav = ({ navItems, open, setOpen }) => {
  return (
    <StyledNav role="navigation">
      <NavList>
        {navItems.map(item => (
          <li key={item.id}>
            {item.link && <Link to={item.link.slug}>{item.title}</Link>}
          </li>
        ))}
      </NavList>
      <BurgerWrapper>
        <BurgerMenu open={open} setOpen={setOpen} />
      </BurgerWrapper>
    </StyledNav>
  )
}

export default Nav

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}
