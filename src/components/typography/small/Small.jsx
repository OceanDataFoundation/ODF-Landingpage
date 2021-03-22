import styled from 'styled-components'

// Config
import { typeScale } from '../../../utils/configs/confTypeScale'
import { colorNeutral } from '../../../utils/tokens/tokenColorBrand'

export const Small = styled.small`
  ${typeScale.TEXT_PRESET_1};

  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_15
      : colorNeutral.NEUTRAL_TINT_100};
`
