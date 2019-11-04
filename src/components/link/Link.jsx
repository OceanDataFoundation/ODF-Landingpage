import styled from 'styled-components/macro'

// Token
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { borderWidth } from '../../utils/tokens/tokenBorderWidth'

// Config
import { space } from '../../utils/config/confSpace'

export const A = styled.a`
  padding-bottom: ${space[1]};
  color: ${colorNeutral.NEUTRAL_TINT_15};
  text-decoration: none;
  border-bottom: ${borderWidth.BORDER_WIDTH_1} solid
    ${colorNeutral.NEUTRAL_TINT_15};
`
