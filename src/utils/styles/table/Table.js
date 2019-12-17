// ----------------------------------------------------------------------------
//
// Description:
// Sets table in global styles, and can be imported in styled components.
// ============================================================================
//

import { css } from 'styled-components'

// Token
import { colorNeutral } from '../../tokens/tokenColorNeutral'
import { fontSize } from '../../tokens/tokenFontSize'

// Config
import { space } from '../../configs/confSpace'

export const Table = css`
  table {
    margin-bottom: ${space[8]};
    font-size: ${fontSize.FONT_SIZE_1};

    tr {
      border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_80};

      :nth-child(odd) {
        background-color: ${colorNeutral.NEUTRAL_TINT_100};
      }

      :nth-child(odd) {
        background-color: ${colorNeutral.NEUTRAL_TINT_95};
      }
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
      border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_40};
      background-color: ${colorNeutral.NEUTRAL_TINT_90};
    }
  }
`
