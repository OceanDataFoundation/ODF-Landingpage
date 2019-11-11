import styled from 'styled-components'

// Tokens
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

// Config
import { space } from '../../utils/configs/confSpace'

export const Box = styled.div`
  padding-top: ${space[10]};
  padding-bottom: ${space[10]};
  background-color: ${colorBrandGreen.GREEN_TINT_90};
`
