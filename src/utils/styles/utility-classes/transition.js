// ----------------------------------------------------------------------------
//
// Description: Transition group
// ============================================================================
//

import { css } from 'styled-components'

// Tokens
import { duration } from '../../tokens/tokenDuration'

export const Transition = css`
  transition: all ${duration.DURATION_4} cubic-bezier(0.7, 0, 0.2, 1);
`
