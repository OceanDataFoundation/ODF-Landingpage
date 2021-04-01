import PropTypes from 'prop-types'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Tokens
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'

export const Container = styled.section`
  width: 100%;
  max-width: ${props => (props.fluid ? `100%` : breakpoints.BREAKPOINT_4)};
  margin-top: ${props => (props.offset ? '100px' : '0')};
  margin-right: auto;
  margin-bottom: ${space[0]};
  margin-left: auto;
  padding-right: ${props => (props.fluid ? 0 : '20px')};
  padding-left: ${props => (props.fluid ? 0 : '20px')};
  display: grid;
  grid-template-columns: ${props =>
    props.col === '3'
      ? `repeat(1, 100%)`
      : props.col === '2'
      ? `repeat(1, 100%)`
      : `repeat(1, 100%)`};
  gap: ${props => (props.col === '3' || '2' ? `20px` : null)};

  ${mediaQuery.BREAKPOINT_2`
    padding-right: ${props => (props.fluid ? 0 : space[6])};
    padding-left: ${props => (props.fluid ? 0 : space[6])};
    margin-top: ${props => (props.offset ? '140px' : '0')};
    grid-template-columns: ${props =>
      props.col === '3'
        ? `repeat(2, 1fr)`
        : props.col === '2'
        ? `repeat(2, 1fr)`
        : `1fr`};
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding-right: ${props => (props.fluid ? 0 : space[7])};
    padding-left: ${props => (props.fluid ? 0 : space[7])};
    margin-top: ${props => (props.offset ? '160px' : '0')};
    grid-template-columns: ${props =>
      props.col === '3'
        ? `repeat(3, 1fr)`
        : props.col === '2'
        ? `repeat(2, 50%)`
        : `repeat(12, 1fr)`};
    gap: 40px;
  `};
`

Container.propTypes = {
  offset: PropTypes.string,
}
