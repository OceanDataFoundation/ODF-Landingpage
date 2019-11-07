import React from 'react'
// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../../utils/configs/confSpace'

// Components
import Logo from '../logo/Logo'

const Header = ({ siteTitle, children }) => (
  <HeaderStyle>
    <Logo />

    {/* <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}>
        {siteTitle}
      </Link>
    </h1> */}
    {children}
  </HeaderStyle>
)

const HeaderStyle = styled.header`
  width: 100%;
  padding: ${space[6]} ${space[8]};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: ${colorNeutral.NEUTRAL_TINT_0};
`

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
