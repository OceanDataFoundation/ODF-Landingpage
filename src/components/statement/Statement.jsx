import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Components
import { Container } from '../container/Container'

const Statement = props => {
  const { children, image, reverse, removeOffset, ...rest } = props

  return (
    <StatementContainer {...rest}>
      <StatementImage reverse={reverse} removeOffset={removeOffset}>
        <Img fluid={image} />
      </StatementImage>
      <StatementContent reverse={reverse}>{children}</StatementContent>
    </StatementContainer>
  )
}

const StatementContainer = styled(Container)`
  display: grid;
  position: relative;

  ${mediaQuery.BREAKPOINT_2`
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 20px;
    margin-bottom: 200px;
  `};
`

export const StatementImage = styled.div`
  position: relative;
  ${props => (props.removeOffset ? `margin: 40px 0 ${space[0]} 0` : null)};
  margin: 0 -20px 40px -20px;

  grid-column: 1 / -1;

  ${mediaQuery.BREAKPOINT_2`
    ${props => (props.reverse ? `order: 2` : `order: 1`)};
    margin: 0;
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 1 / 7;
  `};

  > div {
    ${mediaQuery.BREAKPOINT_3`
      height: 547px;
    `};
  }
`

export const StatementContent = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 100px;

  ${mediaQuery.BREAKPOINT_2`
    ${props => (props.reverse ? `order: 1` : `order: 2`)};
    margin-bottom: 0;
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 7 / 13;
  `};
`

Statement.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object,
  reverse: PropTypes.string,
  removeOffset: PropTypes.string
}

export default Statement
