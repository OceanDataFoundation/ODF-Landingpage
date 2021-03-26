import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Tokens
import { zIndex } from '../../utils/tokens/tokenZIndex'
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
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;

  ${mediaQuery.BREAKPOINT_2`
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 5%;
  `};

  ${mediaQuery.BREAKPOINT_3`
    //grid-column-gap: 10%;
  `};
`

const StatementImage = styled.div`
  position: relative;
  ${props => (props.removeOffset ? `margin: 40px 0 ${space[0]} 0` : null)};

  grid-column: 1 / -1;
  grid-row: 2;
  height: 200px;

  ${mediaQuery.BREAKPOINT_2`
    ${props => (props.reverse ? `order: 2` : `order: 1`)};
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 1 / 7;
  `};

  > div {
    //height: 200px;

    ${mediaQuery.BREAKPOINT_2`
      //height: 600px;
    `};

    ${mediaQuery.BREAKPOINT_3`
      height: 547px;
      //width: 820px;
    `};
  }
`

const StatementContent = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;

  ${mediaQuery.BREAKPOINT_2`
    ${props => (props.reverse ? `order: 1` : `order: 2`)};
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 7 / 13;
    grid-row: 2;
  `};
`

Statement.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object,
  reverse: PropTypes.string,
  removeOffset: PropTypes.string
}

export default Statement
