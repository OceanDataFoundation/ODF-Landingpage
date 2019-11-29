// ----------------------------------------------------------------------------
//
// Description:
// Sets blockquote in global styles, and can be imported in styled components.
// ============================================================================
//

import { css } from 'styled-components'

// Token
import { colorBrandGreen } from '../../tokens/tokenColorBrand'

// Config
import { space } from '../../configs/confSpace'
import { typeScale } from '../../configs/confTypeScale'

export const Blockquote = css`
  padding: ${space[3]} ${space[3]} ${space[3]} ${space[5]};
  margin-top: ${space[6]};
  margin-bottom: ${space[6]};
  font-style: italic;
  border-left: 4px solid ${colorBrandGreen.GREEN_TINT_50};

  p {
    ${typeScale.TEXT_PRESET_4};
  }
`
