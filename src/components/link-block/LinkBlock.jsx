import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'
// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'
import { duration } from '../../utils/tokens/tokenDuration'
import { ArrowRight } from '../arrow/ArrowRight'

const LinkNews = props => {
  const { children, to } = props

  return <LinkNewsStyle to={to}>{children}</LinkNewsStyle>
}

const LinkNewsStyle = styled(Link)`
  color: ${colorNeutral.NEUTRAL_TINT_15};
  text-decoration: none;
  border-bottom: none;
  margin-bottom: 40px;

  h2 {
    ${Transition};
  }

  picture {
    img {
      ${Transition};
      transition-property: all !important;
      transition-duration: ${duration.DURATION_3} !important;
    }
  }

  :hover,
  :focus {
    ${ArrowRight} {
      transform: translateX(20px);
    }
  }
`

LinkNewsStyle.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
}

export default LinkNews
