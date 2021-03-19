import styled from 'styled-components'

// Utils
import { space } from '../../utils/configs/confSpace'
import { typeScale } from '../../utils/configs/confTypeScale'
// Style
import { Transition } from '../../utils/styles/utility-classes/transition'
import { borderRadius } from '../../utils/tokens/tokenBorderRadius'
import { colorBrandGreen, colorNeutral } from '../../utils/tokens/tokenColorBrand'

export const TextInput = styled.input`
  width: inherit;
  border: 1px solid ${colorNeutral.NEUTRAL_TINT_55};
  border-radius: ${borderRadius.BORDER_RADIUS_2};
  padding: ${space[3]};
  margin-top: ${space[3]};
  margin-bottom: ${space[5]};

  ${typeScale.TEXT_PRESET_2};
  ${Transition};

  :hover,
  :focus {
    border-color: ${colorBrandGreen.GREEN_TINT_50};
  }
`
