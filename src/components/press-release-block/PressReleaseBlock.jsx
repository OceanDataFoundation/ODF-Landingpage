import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../../utils/configs/confSpace'

export const PressReleaseBlock = styled.div`
  padding: ${space[3]} 0 0 ${space[5]};
  box-sizing: border-box;
  border-left: 1px solid ${colorNeutral.NEUTRAL_TINT_75};
`
