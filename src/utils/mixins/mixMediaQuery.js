// ----------------------------------------------------------------------------
//
// Description: Mixin, add media query
// ============================================================================
//

import { css } from 'styled-components'

// Tokens
import { breakpoints } from '../tokens/tokenBreakpoints'

export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
