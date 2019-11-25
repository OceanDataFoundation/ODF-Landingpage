import styled from 'styled-components'
import PropTypes from 'prop-types'

// Tokens
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const Container = styled.section`
  max-width: ${props => (props.fluid ? `100%` : breakpoints.BREAKPOINT_4)};
  margin-top: ${props =>
    props.offset ? '84px' : '0'}; /* NOTE: Add correct header height */
  margin-right: auto;
  margin-bottom: ${space[0]};
  margin-left: auto;
  padding-right: ${props => (props.fluid ? 0 : space[4])};
  padding-left: ${props => (props.fluid ? 0 : space[4])};
  display: grid;
  grid-template-columns: ${props =>
    props.col === '3'
      ? `repeat(1, 100%)`
      : props.col === '2'
      ? `repeat(1, 100%)`
      : `repeat(1, 100%)`};
  gap: ${props => (props.col === '3' || '2' ? `0` : null)};

  ${mediaQuery.BREAKPOINT_2`
    padding-right: ${props => (props.fluid ? 0 : space[6])};
    padding-left: ${props => (props.fluid ? 0 : space[6])};
    margin-top: ${props =>
      props.offset ? '152px' : '0'}; /* NOTE: Add correct header height */
    grid-template-columns: ${props =>
      props.col === '3'
        ? `repeat(2, 50%)`
        : props.col === '2'
        ? `repeat(2, 50%)`
        : `repeat(1, 100%)`};
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding-right: ${props => (props.fluid ? 0 : space[8])};
    padding-left: ${props => (props.fluid ? 0 : space[8])};
    margin-top: ${props =>
      props.offset ? '200px' : '0'}; /* NOTE: Add correct header height */
    grid-template-columns: ${props =>
      props.col === '3'
        ? `repeat(3, 1fr)`
        : props.col === '2'
        ? `repeat(2, 50%)`
        : `repeat(1, 100%)`};
  `};
`

Container.propTypes = {
  offset: PropTypes.string,
}
