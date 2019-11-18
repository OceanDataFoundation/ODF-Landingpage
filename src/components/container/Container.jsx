import styled from 'styled-components'

// Tokens
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const Container = styled.section`
  margin: ${space[0]} auto;
  padding-right: ${props => (props.fluid ? 0 : space[4])};
  padding-left: ${props => (props.fluid ? 0 : space[4])};
  display: grid;
  max-width: ${props => (props.fluid ? `100%` : breakpoints.BREAKPOINT_4)};

  grid-template-columns: ${props =>
    props.twoCol ? `repeat(2, 1fr)` : `repeat(1, 1fr)`};
  gap: ${props => (props.twoCol ? `32px` : null)};

  ${mediaQuery.BREAKPOINT_2`
    padding-right: ${props => (props.fluid ? 0 : space[6])};
    padding-left: ${props => (props.fluid ? 0 : space[6])};
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding-right: ${props => (props.fluid ? 0 : space[8])};
    padding-left: ${props => (props.fluid ? 0 : space[8])};
  `};
`
