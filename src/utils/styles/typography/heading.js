// ----------------------------------------------------------------------------
//
// Description:
// Sets headings in global styles, and can be imported in styled components.
// ============================================================================
//
import { css } from 'styled-components'

// Config
import { space } from '../../configs/confSpace'
import { typeScale } from '../../configs/confTypeScale'
// Mixins
import { mediaQuery } from '../../mixins/mixMediaQuery'
// Token
import { fontWeight } from '../../tokens/tokenFontWeight'

const Heading = css`
  margin-top: 0;
  font-weight: ${fontWeight.FONT_WEIGHT_5};
`

export const GlobalH1 = css`
  h1 {
    ${Heading};
    ${typeScale.TEXT_PRESET_6};

    font-weight: ${fontWeight.FONT_WEIGHT_3};

    ${mediaQuery.BREAKPOINT_3`
      ${typeScale.TEXT_PRESET_7};
    `};
  }
`

export const GlobalH2 = css`
  h2 {
    ${Heading};
    ${typeScale.TEXT_PRESET_5};

    margin-bottom: ${space[4]};
    font-weight: ${fontWeight.FONT_WEIGHT_3};

    ${mediaQuery.BREAKPOINT_3`
      ${typeScale.TEXT_PRESET_6};
    `};
  }
`

export const GlobalH3 = css`
  h3 {
    ${Heading};
    ${typeScale.TEXT_PRESET_4};
    margin-top: 0;
    margin-bottom: ${space[7]};

    font-weight: ${fontWeight.FONT_WEIGHT_3};
  }
`

export const GlobalH4 = css`
  h4 {
    ${Heading};
    ${typeScale.TEXT_PRESET_3};

    font-weight: ${fontWeight.FONT_WEIGHT_4};

    ${mediaQuery.BREAKPOINT_3`
      ${typeScale.TEXT_PRESET_4};
    `};
  }
`

export const GlobalH5 = css`
  h5 {
    ${Heading};
    ${typeScale.TEXT_PRESET_3};

    font-weight: ${fontWeight.FONT_WEIGHT_4};
  }
`

export const GlobalH6 = css`
  h6 {
    ${Heading};
    ${typeScale.TEXT_PRESET_2}
   letter-spacing: 1px;
  }
`
