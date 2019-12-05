import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const MasonryDiv = styled.div`
  margin-top: ${space[5]};
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap || space[6]};
  grid-template-columns: ${props =>
    props.col === '3'
      ? `repeat(1, 100%)`
      : props.col === '2'
      ? `repeat(1, 100%)`
      : `repeat(1, 100%)`};

  ${mediaQuery.BREAKPOINT_2`
    grid-template-columns: ${props =>
      props.col === '3'
        ? `repeat(3, 1fr)`
        : props.col === '2'
        ? `repeat(2, 1fr)`
        : `repeat(1, 1fr)`};
  `};
`

export const Col = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || `2rem`};
  grid-auto-rows: max-content;
`
