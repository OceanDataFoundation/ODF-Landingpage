import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { zIndex } from '../../utils/tokens/tokenZIndex'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Config
import { space } from '../../utils/configs/confSpace'

// Components
import { Container } from '../container/Container'

const Statement = props => {
  const { children, image, reverse, ...rest } = props

  return (
    <StatementContainer {...rest}>
      <StatementImage reverse={reverse}>
        <Img fluid={image} />
      </StatementImage>
      <StatementContent reverse={reverse}>{children}</StatementContent>
    </StatementContainer>
  )
}

const StatementContainer = styled(Container)`
  padding-right: ${space[0]};
  padding-left: ${space[0]};
  position: relative;

  ${mediaQuery.BREAKPOINT_2`
    margin-bottom: ${space[6]};
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5%;
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-column-gap: 10%;
  `};
`

const StatementImage = styled.div`
  position: relative;

  ${mediaQuery.BREAKPOINT_2`
    top: -${space[8]};
    ${props => (props.reverse ? `order: 2` : `order: 1`)};
  `};

  ::before {
    ${mediaQuery.BREAKPOINT_3`
      width: 160px;
      height: 4px;
      content: '';
      position: absolute;
      top: 116px;
      left: ${props => (props.reverse ? '-120px' : 'calc(100% - 40px)')};
      background-color: ${colorNeutral.NEUTRAL_TINT_85};
      z-index: ${zIndex.Z_INDEX_2};
    `};
  }

  > div {
    height: 200px;

    ${mediaQuery.BREAKPOINT_2`
      height: 600px;
    `};

    ${mediaQuery.BREAKPOINT_3`
      height: 800px;
    `};
  }
`

const StatementContent = styled.div`
  padding: ${space[6]};
  background-color: rgba(255, 255, 255, 0.95);

  ${mediaQuery.BREAKPOINT_2`
    padding: calc(${space[7]}) 0 0 0;
    ${props => (props.reverse ? `order: 1` : `order: 2`)};
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding: calc(${space[10]} * 2) 0 0 0;
  `};
`

StatementContainer.propTypes = {
  children: PropTypes.node,
}

StatementImage.propTypes = {
  reverse: PropTypes.string,
}

StatementContent.propTypes = {
  reverse: PropTypes.string,
}

export default Statement
