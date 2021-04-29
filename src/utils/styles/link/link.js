// ----------------------------------------------------------------------------
//
// Description:
// Sets links in global styles, and can be imported in styled components.
// ============================================================================
//

import { css } from 'styled-components'

// Style
import { Transition } from '../../styles/utility-classes/transition'
// Token
import { colorBrandGreen } from '../../tokens/tokenColorBrand'

export const GlobalLink = css`
  color: ${colorBrandGreen.GREEN_TINT_50};
  text-decoration: none;
  border-bottom: 1px solid ${colorBrandGreen.GREEN_TINT_50};

  ${Transition};

  :hover,
  :focus {
    color: ${colorBrandGreen.GREEN_TINT_50};
    border-bottom-color: transparent;
  }
`
