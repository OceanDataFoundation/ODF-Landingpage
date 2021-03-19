import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'

export const PressReleaseBlock = styled.div`
  padding: ${space[3]} 0 0 ${space[5]};
  box-sizing: border-box;
  border-left: 1px solid ${colorNeutral.NEUTRAL_TINT_75};
`
