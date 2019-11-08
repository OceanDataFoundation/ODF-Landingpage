// ----------------------------------------------------------------------------
//
// Description: Transition group
// ============================================================================
//

import { css } from 'styled-components'

// Tokens
import { duration } from '../../tokens/tokenDuration'

export const Transition = css`
  transition: all ${duration.DURATION_3} cubic-bezier(0.1, 0.1, 0.6, 0.85);
`
