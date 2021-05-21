import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Token
import { colorBrandGreen, colorNeutral } from '../../utils/tokens/tokenColorBrand'
// Components
import BurgerMenu from './BurgerMenu'

const Nav = ({ navItems, open, setOpen }) => {

  return (
    <StyledNav role="navigation">
      <NavList>
        {navItems.map(item => (
          <li key={item.id}>
            {item.link && (
              <Link
                to={`${item.link.slug}`}
                activeStyle={{
                  paddingBottom: '.250rem',
                  borderBottom: '1px solid white',
                }}>
                {item.text}
              </Link>
            )}
            {item.externalLink && <CustomLink href={`${item.externalLink}`} target="_blank">{item.text}</CustomLink> }
          </li>
        ))}
      </NavList>
      <BurgerWrapper>
        <BurgerMenu open={open} setOpen={setOpen} />
      </BurgerWrapper>
    </StyledNav>
  )
}

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

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

    ::before {
      display: none;
    }
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

    :hover,
    :focus {
      padding-bottom: ${space[2]};
      color: ${colorBrandGreen.GREEN_TINT_50};
      border-bottom: 1px solid ${colorBrandGreen.GREEN_TINT_50};
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

const CustomLink = styled.a`

  &:hover {
    padding-bottom: .250rem;
    border-bottom: 1px solid white;
  }
`;

export default Nav