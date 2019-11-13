import styled from 'styled-components'

// Tokens
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'

// Config
import { space } from '../../utils/configs/confSpace'

export const Container = styled.div`
  margin: ${space[0]} auto;
  padding-right: ${props => (props.fluid ? 0 : space[3])};
  padding-left: ${props => (props.fluid ? 0 : space[3])};
  display: grid;
  max-width: ${props => (props.fluid ? `100%` : breakpoints.BREAKPOINT_4)};
`
