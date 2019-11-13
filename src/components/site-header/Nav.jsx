import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Components
import BurgerMenu from './BurgerMenu'

const StyledNav = styled.nav`
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

const Nav = ({ navItems, open, setOpen }) => {
  console.log('TCL: Nav -> navItems, open, setOpen', navItems, open, setOpen)
  return (
    <StyledNav>
      {navItems &&
        navItems.map(item => (
          <Link to={item.link.slug} key={item.id}>
            {item.title}
          </Link>
        ))}
      <BurgerWrapper>
        {/* <BurgerMenu open={open} setOpen={setOpen} /> */}
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
