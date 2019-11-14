import styled from 'styled-components'

// Tokens
import { colorBrandGreen } from '../../../utils/tokens/tokenColorBrand'
import { fontWeight } from '../../../utils/tokens/tokenFontWeight'

// Config
import { typeScale } from '../../../utils/configs/confTypeScale'
import { space } from '../../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../../utils/mixins/mixMediaQuery'

export const SubHeading = styled.span`
  ${typeScale.TEXT_PRESET_2};

  margin-bottom: ${space[6]};
  color: ${colorBrandGreen.GREEN_TINT_40};
  font-weight: ${fontWeight.FONT_WEIGHT_4};
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;

  ${mediaQuery.BREAKPOINT_2`
    ${typeScale.TEXT_PRESET_3};

    letter-spacing: 4px;
  `};
`
