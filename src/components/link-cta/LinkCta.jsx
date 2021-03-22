import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'
// Tokens
import { colorBrandBlue, colorNeutral } from '../../utils/tokens/tokenColorBrand'

const LinkCta = props => {
  const { children, href, target } = props

  return (
    <LinkCtaStyle href={href} target={target} rel="noreferrer">
      {children}
      <LinkCtaStyleArrow />
    </LinkCtaStyle>
  )
}

LinkCta.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
}

const LinkCtaStyle = styled(OutboundLink)`
  color: ${colorNeutral.NEUTRAL_TINT_100};
  text-decoration: none;
  position: relative;
  display: block;
  border-bottom: none;
  z-index: 1;

  ${Transition};

  ::before {
    width: 0;
    height: calc(100% + 16px);
    content: '';
    position: absolute;
    top: -8px;
    left: -4px;
    background-color: ${colorNeutral.NEUTRAL_TINT_40};
    z-index: -1;

    ${Transition};
  }

  :hover,
  :focus {
    color: ${colorBrandBlue.GREEN_TINT_40};

    ::before {
      width: ${space[10]};
    }

    // Arrow
    span {
      width: 60px;
      opacity: 1;
      background-color: ${colorNeutral.NEUTRAL_TINT_40};

      ::before,
      ::after {
        background-color: ${colorNeutral.NEUTRAL_TINT_40};
      }
    }
  }
`

const LinkCtaStyleArrow = styled.span`
  width: 0;
  height: 2px;
  margin-left: ${space[4]};
  position: relative;
  bottom: 3px;
  display: inline-block;
  opacity: 0;
  background-color: ${colorBrandBlue.GREEN_TINT_50};

  ${Transition};

  ::before,
  ::after {
    width: 8px;
    height: 2px;
    content: '';
    position: absolute;
    right: -2px;
    background-color: ${colorBrandBlue.GREEN_TINT_50};
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

export default LinkCta
