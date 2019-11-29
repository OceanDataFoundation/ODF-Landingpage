import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

// Config
import { space } from '../../utils/configs/confSpace'
import { typeScale } from '../../utils/configs/confTypeScale'

// Asset
import iconLeftQuote from '../../images/icon-left-quote.svg'
import iconRightQuote from '../../images/icon-right-quote.svg'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Set global dimention
const quoteDimention = '56px'

const Blockquote = props => {
  const { children, cite, author } = props

  return (
    <BlockquoteContainer>
      <BlockquoteContent>{children}</BlockquoteContent>
      <BlockquoteFooter>
        <BlockquoteAuthor>{author}</BlockquoteAuthor>
        <BlockquoteCite>{cite}</BlockquoteCite>
      </BlockquoteFooter>
    </BlockquoteContainer>
  )
}

const BlockquoteContainer = styled.blockquote`
  max-width: 100%;
  margin: ${quoteDimention} auto;
  position: relative;
  border: none;
  font-style: normal;

  ${mediaQuery.BREAKPOINT_3`
    max-width: 75%;
  `};

  p {
    ${typeScale.TEXT_PRESET_2};
  }
`

const BlockquoteContent = styled.div`
  margin-top: 0;
  margin-bottom: 0;

  ${mediaQuery.BREAKPOINT_3`
    padding-left: ${quoteDimention};
    padding-right: ${quoteDimention};
    position: relative;
  `};

  ::before,
  ::after {
    width: calc(${quoteDimention} / 2);
    height: calc(${quoteDimention} / 2);
    content: '';
    position: absolute;
    background-position: center center;
    background-size: calc(${quoteDimention} / 2) calc(${quoteDimention} / 2);
    background-repeat: no-repeat;

    ${mediaQuery.BREAKPOINT_3`
      width: ${quoteDimention};
      height: ${quoteDimention};
      background-size: ${quoteDimention} ${quoteDimention};
    `};
  }

  ::before {
    top: -${quoteDimention};
    left: 0;
    background-image: url(${iconLeftQuote});

    ${mediaQuery.BREAKPOINT_3`
      top: -${quoteDimention};
      left: -${quoteDimention};
    `};
  }

  ::after {
    top: calc(100% + ${quoteDimention} / 2);
    right: 0;
    background-image: url(${iconRightQuote});

    ${mediaQuery.BREAKPOINT_3`
      top: auto;
      right: -${quoteDimention};
      bottom: -${quoteDimention};
    `};
  }
`
const BlockquoteFooter = styled.footer`
  max-width: 100%;
  padding-left: ${space[5]};
  margin-top: calc(${quoteDimention} / 2);
  position: relative;

  ${mediaQuery.BREAKPOINT_2`
    max-width: 75%;
  `};

  ${mediaQuery.BREAKPOINT_3`
    max-width: 50%;
    padding-left: 0;
    margin-top: ${quoteDimention};
    margin-right: ${quoteDimention};
    margin-left: ${quoteDimention};
  `};

  ::before {
    width: 16px;
    height: 4px;
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    background-color: ${colorBrandGreen.GREEN_TINT_50};

    ${mediaQuery.BREAKPOINT_3`
      left: -24px;
    `};
  }
`

const BlockquoteAuthor = styled.strong`
  display: block;
`

const BlockquoteCite = styled.cite`
  ${typeScale.TEXT_PRESET_1};
`

export default Blockquote
