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
  const { children, to, showArrow, pressRelease, invert, ...rest } = props

  return (
    <>
      {pressRelease ? (
        <LinkButtonWrapper
          pressRelease={pressRelease}>
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
  invert: PropTypes.bool
}

const LinkButtonWrapper = styled.div`
  margin: 0 auto 4rem auto;

  ${mediaQuery.BREAKPOINT_2`
    ${props => (props.pressRelease ? `margin-bottom: 3.5rem` : null)};
  `};
`

const LinkButtonStyle = styled(Link)`
  padding: 5px ${space[8]};
  margin-bottom: 93px;
  display: inline-block;
  min-width: 335px;
  text-align: center;
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

  ${typeScale.TEXT_PRESET_4};
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

  ${mediaQuery.BREAKPOINT_2`
    padding: ${space[4]} ${space[8]};
  `};
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
