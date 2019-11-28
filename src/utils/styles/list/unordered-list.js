// ----------------------------------------------------------------------------
//
// Description:
// Sets unordered list in global styles, and can be imported in styled components.
// ============================================================================
//

import { css } from 'styled-components'

// Token
import { colorBrandGreen } from '../../tokens/tokenColorBrand'
import { borderRadius } from '../../tokens/tokenBorderRadius'

// Config
import { space } from '../../configs/confSpace'

export const GlobalUnorderedList = css`
  list-style-type: none;

  li {
    position: relative;

    ::before {
      width: 8px;
      height: 8px;
      content: '';
      position: absolute;
      top: 8px;
      left: -16px;
      border-radius: ${borderRadius.BORDER_RADIUS_1};
      background-color: ${colorBrandGreen.GREEN_TINT_50};
    }

    p:not(:last-child) {
      margin-bottom: ${space[0]}; /* NOTE: When adding a sub-list-item Contentful adds a <p> tag - Why???*/
    }

    ul {
      li {
        ::before {
          border: 1px solid ${colorBrandGreen.GREEN_TINT_50};
          background-color: white;
        }
      }
    }
  }
`
