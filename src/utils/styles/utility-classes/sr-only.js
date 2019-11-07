// ----------------------------------------------------------------------------
//
// Description:
// Theorically bulletproof CSS class for visually hide anything and keep it
// accessible to ATs
// ============================================================================
//

import { css } from 'styled-components'

export const SrOnly = css`
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  white-space: nowrap !important;
  position: absolute !important;
  overflow: hidden !important;
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
`
