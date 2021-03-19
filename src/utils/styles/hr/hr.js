// ----------------------------------------------------------------------------
//
// Description:
// Sets hr in global styles, and can be imported in styled components.
// ============================================================================
//

import { css } from 'styled-components'

// Token
import { colorNeutral } from '../../tokens/tokenColorBrand'

export const Hr = css`
  margin-left: 0;
  margin-right: 0;
  border: none;
  border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_75};
`
