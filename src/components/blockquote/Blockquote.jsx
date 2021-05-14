import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
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
      {highlightedQuote &&
        <HightlightedBlockquote
          dangerouslySetInnerHTML={{ __html: highlightedQuote.childMarkdownRemark.html}} />}
      <BlockquoteContent>{children}</BlockquoteContent>
      <BlockquoteFooter>
        <BlockquoteAuthor>{author}</BlockquoteAuthor>
        <BlockquoteCite>{cite}</BlockquoteCite>
      </BlockquoteFooter>
    </BlockquoteContainer>
  )
}

Blockquote.propTypes = {
  children: PropTypes.node,
  cite: PropTypes.string,
  author: PropTypes.string,
  highlightedQuote: PropTypes.object,
}


export const HightlightedBlockquote = styled.blockquote`
  margin: 0;
  grid-column: 1  / -1;
  padding: 0 0 0 0;

  p {
    color: ${colorBrandGreen.GREEN_TINT_50};
    font-size:  ${fontSize.FONT_SIZE_4} !important;
    line-height: auto !important;
    margin: 0;
    padding: 0 0 1rem 1rem;
    font-family: 'Domine';

    &:last-child {
      padding-bottom: 0;
    }
  }

  ${mediaQuery.BREAKPOINT_3`
      grid-column: 3  / 12;

      p {
        line-height: auto !important;
        padding: 0 0 1rem 1rem;
        font-size:  ${fontSize.FONT_SIZE_6} !important;
      }
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
    ${typeScale.TEXT_PRESET_1};
  }
`;

const BlockquoteContent = styled.div`
  grid-column: 1 / -1;
  margin-top: 0;
  margin-bottom: 0;

    ${mediaQuery.BREAKPOINT_3`
      grid-column: 4 / 11;
    `};
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
