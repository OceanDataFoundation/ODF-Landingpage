// ----------------------------------------------------------------------------
//
// Description:
// Sets paragraph in global styles, and can be imported in styled components.
// ============================================================================
//
import { css } from 'styled-components'

// Config
import { space } from '../../configs/confSpace'
import { typeScale } from '../../configs/confTypeScale'

export const GlobalParagraph = css`
  p {
    ${typeScale.TEXT_PRESET_2};
    margin-top: ${space[0]};

    :not(:last-child) {
      margin-bottom: ${space[4]};
    }
  }
`
