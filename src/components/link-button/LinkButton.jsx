import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { space } from '../../utils/configs/confSpace'
import { typeScale } from '../../utils/configs/confTypeScale'
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
import { Transition } from '../../utils/styles/utility-classes/transition'
import { borderRadius } from '../../utils/tokens/tokenBorderRadius'
import { colorBrandBlue, colorBrandGreen, colorNeutral } from '../../utils/tokens/tokenColorBrand'
import { fontFamily } from '../../utils/tokens/tokenFontFamily'
import { fontWeight } from '../../utils/tokens/tokenFontWeight'

const LinkButton = props => {
  const { children, to, showArrow, pressRelease, alignCenter, invert, ...rest } = props

  return (
    <>
      {pressRelease || alignCenter ? (
        <LinkButtonWrapper
          pressRelease={pressRelease}
          alignCenter={alignCenter}>
          <LinkButtonStyle to={to} {...rest}>
            {children}
            {showArrow ? <LinkButtonStyleArrow /> : null}
          </LinkButtonStyle>
        </LinkButtonWrapper>
      ) : (
        <LinkButtonStyle to={to} {...rest}>
          {children}
          {showArrow ? <LinkButtonStyleArrow /> : null}
        </LinkButtonStyle>
      )}
    </>
  )
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  showArrow: PropTypes.bool,
  pressRelease: PropTypes.bool,
  alignCenter: PropTypes.bool,
  invert: PropTypes.bool
}

const LinkButtonWrapper = styled.div`
  margin: 0 auto 4rem auto;
  display: ${props => (props.alignCenter ? `table` : 'inline-block')};

  ${mediaQuery.BREAKPOINT_2`
    ${props => (props.pressRelease ? `margin-bottom: 3.5rem` : null)};
  `};
`

const LinkButtonStyle = styled(Link)`
  padding: ${space[4]} ${space[8]};
  margin: 0 auto;
  color: ${props => props.invert ? colorNeutral.NEUTRAL_TINT_100 : colorNeutral.NEUTRAL_TINT_15 };
  font-family: ${fontFamily.FONT_FAMILY_2};
  font-weight: ${fontWeight.FONT_WEIGHT_4};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  border-radius: ${borderRadius.BORDER_RADIUS_6};
  border: none;
  background: ${`linear-gradient(
        to right,
        ${colorBrandBlue.BLUE_TINT_80},
        ${colorBrandGreen.GREEN_TINT_50}
      )`};

  ${typeScale.TEXT_PRESET_2};
  ${Transition};

  &:hover {
    cursor: pointer;
  }

  :hover,
  :focus {

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
  background-color: ${colorNeutral.NEUTRAL_TINT_100};

  ${Transition};
  transition-property: width, opacity;

  ::before,
  ::after {
    width: 8px;
    height: 2px;
    content: '';
    position: absolute;
    right: -2px;
    background-color: ${colorNeutral.NEUTRAL_TINT_100};
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

export default LinkButton
