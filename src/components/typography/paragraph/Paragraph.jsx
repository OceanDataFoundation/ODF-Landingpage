import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

// Config
import { typeScale } from '../../utils/config/confTypeScale'
import { space } from '../../utils/config/confSpace'

// Mixins
import { mediaQuery } from '../../../utils/mixins/mixMediaQuery'

export const P = props => {
  const { children, lead, ...rest } = props

  return (
    <Paragraph lead={lead} {...rest}>
      {children}
    </Paragraph>
  )
}

const Paragraph = styled.p`
  ${typeScale.TEXT_PRESET_2};

  margin: ${space[0]};

  ${mediaQuery.BREAKPOINT_1`
		${props => (props.lead ? typeScale.TEXT_PRESET_3 : typeScale.TEXT_PRESET_2)};
  `};
`

P.propTypes = {
  lead: PropTypes.bool,
}
