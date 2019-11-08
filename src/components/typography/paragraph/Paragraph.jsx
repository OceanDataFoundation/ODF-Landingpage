import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../../../utils/configs/confSpace'
import { typeScale } from '../../../utils/configs/confTypeScale'

// Mixins
import { mediaQuery } from '../../../utils/mixins/mixMediaQuery'

const P = props => {
  const { children, lead, ...rest } = props

  return (
    <Paragraph lead={lead} {...rest}>
      {children}
    </Paragraph>
  )
}

export default P

const Paragraph = styled.p`
  ${typeScale.TEXT_PRESET_2};

  margin: ${space[0]};
  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_100
      : colorNeutral.NEUTRAL_TINT_15};

  ${mediaQuery.BREAKPOINT_1`
		${props => (props.lead ? typeScale.TEXT_PRESET_3 : typeScale.TEXT_PRESET_2)};
  `};
`

P.propTypes = {
  lead: PropTypes.bool,
}
