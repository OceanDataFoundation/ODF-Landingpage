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

  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_100
      : colorNeutral.NEUTRAL_TINT_15};

  ${mediaQuery.BREAKPOINT_2`
    ${props =>
      props.lead ? typeScale.TEXT_PRESET_4 : typeScale.TEXT_PRESET_2};

      margin-bottom: ${space[6]};
      line-height: ${props => (props.lead ? `1.5` : `inherit`)}
  `};
`

P.propTypes = {
  lead: PropTypes.bool,
}
