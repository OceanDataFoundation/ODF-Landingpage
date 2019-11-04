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

// Styles
import ResetCSS from './reset-css'

// Typography
import { Heading1 } from '../../utils/styles/heading-test'

export const GlobalStyle = createGlobalStyle`
  /* ${ResetCSS} */

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  * {
    position: relative;
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

    padding: ${space[0]};
    margin: ${space[0]};
    color: ${colorNeutral.NEUTRAL_TINT_15};
    font-family: ${fontFamily.FONT_FAMILY_1.join()};
    background-color: ${colorNeutral.NEUTRAL_TINT_100};
  }

  ${Heading1}
`
