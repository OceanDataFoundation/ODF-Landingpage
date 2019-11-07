// ----------------------------------------------------------------------------
//
// Description: Transition group
// ============================================================================
//

import { css } from 'styled-components'

// Tokens
import { duration } from '../../tokens/tokenDuration'

export const Transition = css`
  transition-duration: ${duration.DURATION_3};
  transition-timing-function: cubic-bezier(0.1, 0.1, 0.6, 0.85);
`
