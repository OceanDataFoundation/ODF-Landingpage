import styled from 'styled-components'

// Tokens
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'

// Config
import { space } from '../../utils/configs/confSpace'

export const Container = styled.div`
  margin: ${space[0]} auto;
  max-width: ${breakpoints.BREAKPOINT_4};
`
