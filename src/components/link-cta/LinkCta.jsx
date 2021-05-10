import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'
// Tokens
import { colorBrandGreen, colorNeutral } from '../../utils/tokens/tokenColorBrand'
import { SmallArrowRight } from '../arrow/SmallArrowRight'

const LinkCta = props => {
  const { children, href, target } = props

  return (
    <LinkCtaStyle href={href} target={target} rel="noreferrer">
      {children}
      <SmallArrowRight />
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: none;
  z-index: 1;

  &:hover {
    ${SmallArrowRight} {
      transform: translateX(10px);
      background-color: ${colorBrandGreen.GREEN_TINT_50};

      ::before,
      ::after {
        background-color: ${colorBrandGreen.GREEN_TINT_50};
      }
    }
  }

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

  span {
    width: 60px;
    opacity: 1;
    background-color: ${colorNeutral.NEUTRAL_TINT_40};

    ::before,
    ::after {
      background-color: ${colorNeutral.NEUTRAL_TINT_40};
    }
  }
`

export default LinkCta
