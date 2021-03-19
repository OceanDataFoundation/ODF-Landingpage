import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'
// Components
import { Small } from '../typography/small/Small'

export const Figcaption = styled(Small)`
  margin-top: ${space[3]};
  color: ${colorNeutral.NEUTRAL_TINT_40};

  ${mediaQuery.BREAKPOINT_3`
    padding-right: ${space[4]};
    padding-left: ${space[10]};
  `};
`
