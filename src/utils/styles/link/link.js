// ----------------------------------------------------------------------------
//
// Description:
// Sets links in global styles, and can be imported in styled components.
// ============================================================================
//

import { css } from 'styled-components'

// Token
import { colorBrandGreen } from '../../tokens/tokenColorBrand'

// Style
import { Transition } from '../../styles/utility-classes/transition'

export const GlobalLink = css`
  color: ${colorBrandGreen.GREEN_TINT_30};
  text-decoration: none;
  border-bottom: 1px solid ${colorBrandGreen.GREEN_TINT_30};

  ${Transition};

  :hover,
  :focus {
    color: ${colorBrandGreen.GREEN_TINT_20};
    border-bottom-color: transparent;
  }
`
