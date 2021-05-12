// ----------------------------------------------------------------------------
//
// Description: Reset CSS and Global styling
// ============================================================================
//

import { createGlobalStyle } from 'styled-components'

// Tokens
import { colorBrandPurple, colorNeutral } from '../../utils/tokens/tokenColorBrand'
import { fontFamily } from '../../utils/tokens/tokenFontFamily'
// Config
import { space } from '../configs/confSpace'
import { typeScale } from '../configs/confTypeScale'
// Components
import { Blockquote } from './blockquote/blockquote'
import { Hr } from './hr/hr'
import { GlobalLink } from './link/link'
import { GlobalUnorderedList } from './list/unordered-list'
import { Table } from './table/Table'
// Styles
import {
  GlobalH1,
  GlobalH2,
  GlobalH3,
  GlobalH4,
  GlobalH5,
  GlobalH6,
} from './typography/heading'
import { GlobalParagraph } from './typography/paragraph'
import { GlobalStrong } from './typography/strong'

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
    ${typeScale.TEXT_PRESET_1};

    padding: ${space[0]};
    margin: ${space[0]};
    color: ${colorNeutral.NEUTRAL_TINT_100};
    font-family: ${fontFamily.FONT_FAMILY_1.join()};
    background-color: ${colorBrandPurple.PURPLE_TINT_50};
  }

  /* Typography */
  ${GlobalH1}
  ${GlobalH2}
  ${GlobalH3}
  ${GlobalH4}
  ${GlobalH5}
  ${GlobalH6}
  ${GlobalParagraph}
  ${GlobalStrong}

  /* Interactive*/
  a {
    ${GlobalLink};
  }

  /* List */
  ul {
    ${GlobalUnorderedList};
  }

  /* Blockquote */
  blockquote {
    ${Blockquote};
  }

  /* Line */
  hr {
    ${Hr};
  }

  /* Table */
  ${Table}
`
