// ----------------------------------------------------------------------------
//
// Description:
// Sets hr in global styles, and can be imported in styled components.
// ============================================================================
//

import { css } from 'styled-components'

// Token
import { colorNeutral } from '../../tokens/tokenColorNeutral'

export const Hr = css`
  border: none;
  border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_75};
`
