import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'

export const Line = styled.hr`
  width: 100%;
  margin: 0;
  border-top: ${space[2]} solid ${colorNeutral.NEUTRAL_TINT_100};
`
