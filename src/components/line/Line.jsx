import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'

const Line = props => {
  const { largeMargin } = props;
  return (
    <StyledLine largeMargin={largeMargin} />
  )
}

Line.propTypes = {
  largeMargin: PropTypes.bool
}

const StyledLine = styled.hr`
  width: 100%;
  margin: ${props => props.largeMargin ? '0 0 64px 0' : '0 0 ${space[5]} 0'};
  border-top: ${space[2]} solid ${colorNeutral.NEUTRAL_TINT_100};
`

export default Line;