// ----------------------------------------------------------------------------
//
// Description:
// Sets headings in global styles, and can be imported in styled components.
// ============================================================================
//
import { css } from 'styled-components'

// Token
import { fontWeight } from '../../tokens/tokenFontWeight'

// Config
import { space } from '../../configs/confSpace'
import { typeScale } from '../../configs/confTypeScale'

export const GlobalH1 = css`
  h1 {
    ${typeScale.TEXT_PRESET_7}
  }
`

export const GlobalH2 = css`
  h2 {
    ${typeScale.TEXT_PRESET_6}
  }
`

export const GlobalH3 = css`
  h3 {
    ${typeScale.TEXT_PRESET_5}
  }
`

export const GlobalH4 = css`
  h4 {
    ${typeScale.TEXT_PRESET_4}
  }
`

export const GlobalH5 = css`
  h5 {
    ${typeScale.TEXT_PRESET_3}
  }
`

export const GlobalH6 = css`
  h6 {
    margin: ${space[0]};
    font-weight: ${fontWeight.FONT_WEIGHT_5};
    text-transform: uppercase;
    letter-spacing: 1px;
    ${typeScale.TEXT_PRESET_2}
  }
`
