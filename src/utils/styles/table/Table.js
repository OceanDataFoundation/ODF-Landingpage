// ----------------------------------------------------------------------------
//
// Description:
// Sets table in global styles, and can be imported in styled components.
// ============================================================================
//

import { css } from 'styled-components'

// Config
import { space } from '../../configs/confSpace'
// Token
import { colorBrandPurple, colorNeutral } from '../../tokens/tokenColorBrand'
import { fontSize } from '../../tokens/tokenFontSize'

export const Table = css`
  table {
    margin: ${space[4]} 0 ${space[8]} 0;
    font-size: ${fontSize.FONT_SIZE_1};

    tr {
      border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_80};
    }

    th,
    td {
      padding: ${space[4]};

      :not(:last-child) {
        border-right: 1px solid ${colorNeutral.NEUTRAL_TINT_80};
      }
    }

    th {
      width: 16.666666%;
      white-space: nowrap;
      text-align: left;
      vertical-align: top;
      border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_80};
      background-color: ${colorBrandPurple.PURPLE_TINT_50};
    }
  }
`
