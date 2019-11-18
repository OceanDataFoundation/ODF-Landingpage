import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'
import { borderRadius } from '../../utils/tokens/tokenBorderRadius'
import { fontWeight } from '../../utils/tokens/tokenFontWeight'

// Config
import { space } from '../../utils/configs/confSpace'

// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'

const LinkButton = props => {
  const { children, to, showArrow, ...rest } = props

  return (
    <LinkButtonStyle to={to} {...rest}>
      {children}
      {showArrow ? <LinkButtonStyleArrow /> : null}
    </LinkButtonStyle>
  )
}

const LinkButtonStyle = styled(Link)`
  padding: ${space[4]} ${space[8]};
  margin: 0 auto ${space[9]} auto;
  color: ${colorNeutral.NEUTRAL_TINT_15};
  font-weight: ${fontWeight.FONT_WEIGHT_4};
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  border-radius: ${borderRadius.BORDER_RADIUS_2};
  background: linear-gradient(
    to right,
    ${colorBrandGreen.GREEN_TINT_80} 50%,
    ${colorBrandGreen.GREEN_TINT_60} 50%
  );
  background-size: calc(210%) calc(210%);

  ${Transition};
  transition-property: background-position;

  :hover,
  :focus {
    background-position: calc(-95%) center;

    span {
      opacity: 1;
      width: 60px;
    }
  }
`

const LinkButtonStyleArrow = styled.span`
  width: 0;
  height: 2px;
  margin-top: -2px;
  margin-left: 12px;
  margin-right: 12px;
  content: '';
  opacity: 0;
  display: inline-block;
  position: absolute;
  top: 50%;
  background-color: ${colorNeutral.NEUTRAL_TINT_15};

  ${Transition};
  transition-property: width, opacity;

  ::before,
  ::after {
    width: 8px;
    height: 2px;
    content: '';
    position: absolute;
    right: -2px;
    background-color: ${colorNeutral.NEUTRAL_TINT_15};
  }

  ::before {
    bottom: 2px;
    transform: rotate(45deg);
  }

  ::after {
    top: 2px;
    transform: rotate(-45deg);
  }
`

LinkButtonStyle.propTypes = {
  to: PropTypes.string,
  showArrow: PropTypes.bool,
}

export default LinkButton
