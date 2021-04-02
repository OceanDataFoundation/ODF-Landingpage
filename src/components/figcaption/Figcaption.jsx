import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'
// Components
import { Small } from '../typography/small/Small'

export const Figcaption = styled(Small)`
  margin-top: ${space[3]};
  color: ${colorNeutral.NEUTRAL_TINT_40};
`
