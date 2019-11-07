// ----------------------------------------------------------------------------
//
// Description: Reset CSS and Global styling
// ============================================================================
//

import { createGlobalStyle } from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { fontFamily } from '../../utils/tokens/tokenFontFamily'

// Config
import { typeScale } from '../configs/confTypeScale'
import { space } from '../configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Styles
import {
  GlobalH1,
  GlobalH2,
  GlobalH3,
  GlobalH4,
  GlobalH5,
  GlobalH6,
} from './typography/heading'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    outline: none;
  }

  html, body {
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
     -webkit-font-smoothing: antialiased;
  }

  body {
    ${typeScale.TEXT_PRESET_2};

    padding: 66px ${space[0]} ${space[0]} ${space[0]};
    margin: ${space[0]};
    color: ${colorNeutral.NEUTRAL_TINT_15};
    font-family: ${fontFamily.FONT_FAMILY_1.join()};
    background-color: ${colorNeutral.NEUTRAL_TINT_100};

    ${mediaQuery.BREAKPOINT_1`
      padding: 94px ${space[0]} ${space[0]} ${space[0]};
    `};

    ${mediaQuery.BREAKPOINT_2`
      padding: 121px ${space[0]} ${space[0]} ${space[0]};
    `};
  }

  /* Typography */
  ${GlobalH1}
  ${GlobalH2}
  ${GlobalH3}
  ${GlobalH4}
  ${GlobalH5}
  ${GlobalH6}
`
