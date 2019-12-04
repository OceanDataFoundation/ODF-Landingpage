import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { fontSize } from '../../utils/tokens/tokenFontSize'

const CollapseWrapper = styled(animated.div)`
  background: rgba(0, 0, 0, 0.92);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const NavList = styled.ul`
  list-style-type: none;
  padding: 5.5rem 2rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
    text-align: end;

    ::before {
      display: none;
    }
  }

  & a {
    font-size: ${fontSize.FONT_SIZE_3};
    line-height: 2;
    color: ${colorNeutral.NEUTRAL_TINT_100};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    border-bottom: none;

    &:hover {
      border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_100};
    }
  }
`

const CollapseMenu = props => {
  const { navItems } = props
  const toggleAnimation = useSpring({ opacity: props.isOpen ? 1 : 0 })

  if (props.isOpen === true) {
    return (
      <CollapseWrapper style={toggleAnimation}>
        <NavList>
          {navItems.map(item => (
            <li key={item.id}>
              <Link to={`${item.link.slug}`}>{item.text}</Link>
            </li>
          ))}
        </NavList>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu

CollapseMenu.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool.isRequired,
}
