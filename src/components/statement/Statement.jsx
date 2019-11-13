import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

// Tokens
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
    padding-right: ${space[8]};
    padding-left: ${space[8]};
    grid-template-columns: 47.5% 47.5%;
    grid-column-gap: 5%;
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-template-columns: 45% 45%;
    grid-column-gap: 10%;
  `};
`

const StatementImage = styled.div`
  ${props => (props.reverse ? `order: 2` : `order: 1`)};

  ${mediaQuery.BREAKPOINT_2`
    position: relative;
    top: -${space[8]};
  `};
`

const StatementContent = styled.div`
  padding: ${space[4]};
  position: absolute;
  top: ${space[7]};
  left: ${space[7]};
  z-index: ${zIndex.Z_INDEX_1};
  background-color: rgba(255, 255, 255, 0.95);
  ${props => (props.reverse ? `order: 1` : `order: 2`)};

  ${mediaQuery.BREAKPOINT_2`
    padding-top: calc(${space[10]});
    position: relative;
    top: auto;
    left: auto;
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding-top: calc(${space[10]} * 2);
  `};
`

StatementContainer.propTypes = {
  children: PropTypes.node,
}

StatementImage.propTypes = {
  reverse: PropTypes.bool,
}

StatementContent.propTypes = {
  reverse: PropTypes.bool,
}

export default Statement
