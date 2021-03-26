import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

// Asset
import iconLeftQuote from '../../images/icon-left-quote.svg'
import iconRightQuote from '../../images/icon-right-quote.svg'
// Config
import { space } from '../../utils/configs/confSpace'
import { typeScale } from '../../utils/configs/confTypeScale'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Tokens
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'
// Tokens
import { colorBrandGreen, } from '../../utils/tokens/tokenColorBrand'
import { fontSize } from '../../utils/tokens/tokenFontSize'

const Blockquote = props => {
  const { children, cite, author, highlightedQuote } = props

  return (
    <BlockquoteContainer>
      {highlightedQuote && <HightlightedBlockquote>&quot;{highlightedQuote}&quot;</HightlightedBlockquote>}
      <BlockquoteContent>{children}</BlockquoteContent>
      <BlockquoteFooter>
        <BlockquoteAuthor>{author}</BlockquoteAuthor>
        <BlockquoteCite>{cite}</BlockquoteCite>
      </BlockquoteFooter>
    </BlockquoteContainer>
  )
}

const HightlightedBlockquote = styled.blockquote`
  grid-column: 1  / -1;
  color: ${colorBrandGreen.GREEN_TINT_50};
  font-size:  ${fontSize.FONT_SIZE_4};
  margin: 0 0 2rem 0;
  padding: 0;

  ${mediaQuery.BREAKPOINT_3`
      grid-column: 3  / 12;
      margin: 0 0 5rem 0;
      font-size:  ${fontSize.FONT_SIZE_6};
  `};
`;

const BlockquoteContainer = styled.blockquote`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: ${breakpoints.BREAKPOINT_4};
  padding: 0;
  margin: 0;
  position: relative;
  border: none;
  font-style: normal;

  p {
    ${typeScale.TEXT_PRESET_2};
  }
`

const BlockquoteContent = styled.div`
  grid-column: 1 / -1;
  margin-top: 0;
  margin-bottom: 0;

    ${mediaQuery.BREAKPOINT_3`
      grid-column: 4 / 11;
    `};
  }
`

const BlockquoteFooter = styled.footer`
  grid-column: 1 / -1;


  ${mediaQuery.BREAKPOINT_2`
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 4 / 9;
  `};
`

const BlockquoteAuthor = styled.strong`
  display: block;
`

const BlockquoteCite = styled.cite`

`

export default Blockquote
