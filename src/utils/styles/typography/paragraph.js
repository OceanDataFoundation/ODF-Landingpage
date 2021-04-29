// ----------------------------------------------------------------------------
//
// Description:
// Sets paragraph in global styles, and can be imported in styled components.
// ============================================================================
//
import { css } from 'styled-components'

import { fontFamily } from '../../../utils/tokens/tokenFontFamily'
// Config
import { space } from '../../configs/confSpace'
import { typeScale } from '../../configs/confTypeScale'

export const GlobalParagraph = css`
  p {
    ${typeScale.TEXT_PRESET_2};
    margin-top: ${space[0]};
    font-family: ${fontFamily.FONT_FAMILY_2.join()};

    :not(:last-child) {
      margin-bottom: ${space[6]};
    }
  }
`
