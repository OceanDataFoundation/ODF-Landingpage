import React from 'react'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { zIndex } from '../../utils/tokens/tokenZIndex'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import Logo from '../logo/Logo'

const Header = ({ children }) => (
  <HeaderStyle>
    <Logo />
    {children}
  </HeaderStyle>
)

const HeaderStyle = styled.header`
  width: 100%;
  padding: 0 ${space[4]};
  display: flex;
  align-items: stretch;
  position: fixed;
  top: 0;
  background-color: ${colorNeutral.NEUTRAL_TINT_0};
  z-index: ${zIndex.Z_INDEX_7};

  ${mediaQuery.BREAKPOINT_1`
		padding: 0 ${space[6]};
  `};

  ${mediaQuery.BREAKPOINT_2`
		padding: 0 ${space[8]};
  `};
`

export default Header
