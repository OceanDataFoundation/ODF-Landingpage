import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../../utils/configs/confSpace'
import { typeScale } from '../../../utils/configs/confTypeScale'
// Mixins
import { mediaQuery } from '../../../utils/mixins/mixMediaQuery'
// Tokens
import { colorNeutral } from '../../../utils/tokens/tokenColorBrand'

const P = props => {
  const { children, lead, ...rest } = props

  return (
    <Paragraph lead={lead} {...rest}>
      {children}
    </Paragraph>
  )
}

P.propTypes = {
  children: PropTypes.node,
  lead: PropTypes.bool,
}

export default P

const Paragraph = styled.p`
  ${typeScale.TEXT_PRESET_1};

  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_15
      : colorNeutral.NEUTRAL_TINT_100};

  ${mediaQuery.BREAKPOINT_2`
    ${props =>
      props.lead ? typeScale.TEXT_PRESET_4 : typeScale.TEXT_PRESET_1};

      margin-bottom: ${space[4]};
      line-height: ${props => (props.lead ? `1.5` : `22px`)}
  `};
`