// ----------------------------------------------------------------------------
//
// Description:
// Sets headings in global styles, and can be imported in styled components.
// ============================================================================
//

import { css } from 'styled-components'

// Token
import { fontWeight } from '../../tokens/tokenFontWeight'

export const GlobalStrong = css`
  font-weight: ${fontWeight.FONT_WEIGHT_4};
`
