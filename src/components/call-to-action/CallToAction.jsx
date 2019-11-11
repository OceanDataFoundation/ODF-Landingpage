import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Tokens
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

// Config
import { space } from '../../utils/configs/confSpace'

// Styles
import { SrOnly } from '../../utils/styles/utility-classes/sr-only'

const CallToAction = props => {
  const { href } = props

  return (
    <CallToActionContainer to={href}>
      <CallToActionArrow>
        <CallToActionContent>Scroll to content</CallToActionContent>
      </CallToActionArrow>
    </CallToActionContainer>
  )
}

const CallToActionContainer = styled(Link)`
  position: absolute;
  bottom: -8rem;
  left: ${space[2]};

  background-color: red;
`

const CallToActionArrow = styled.div`
  width: 4px;
  height: 60px;
  content: '';
  position: relative;
  background-color: ${colorBrandGreen.GREEN_TINT_50};

  ::before {
    width: 20px;
    height: 4px;
    content: '';
    position: absolute;
    bottom: 3px;
    left: -2px;
    transform: rotate(-45deg);
    background-color: ${colorBrandGreen.GREEN_TINT_50};
  }

  ::after {
    width: 20px;
    height: 4px;
    content: '';
    position: absolute;
    bottom: 3px;
    left: -14px;
    transform: rotate(45deg);
    background-color: ${colorBrandGreen.GREEN_TINT_50};
  }
`

const CallToActionContent = styled.span`
  ${SrOnly};
`

CallToAction.propTypes = {
  href: PropTypes.string,
}

export default CallToAction
