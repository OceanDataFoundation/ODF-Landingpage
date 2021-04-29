import styled from 'styled-components'

import { space } from '../../../utils/configs/confSpace'
// Config
import { typeScale } from '../../../utils/configs/confTypeScale'
// Mixins
import { mediaQuery } from '../../../utils/mixins/mixMediaQuery'
// Tokens
import { colorBrandGreen } from '../../../utils/tokens/tokenColorBrand'

export const SubHeading = styled.span`
  ${typeScale.TEXT_PRESET_2};

  margin-bottom: ${space[4]};
  color: ${colorBrandGreen.GREEN_TINT_30};
  letter-spacing: 2px;
  display: block;

  ${mediaQuery.BREAKPOINT_2`
    ${typeScale.TEXT_PRESET_4};

    letter-spacing: 4px;
  `};
`
