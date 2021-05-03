import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

export const Article = styled.article`
  grid-column: 1 / -1;

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 3 / 11;
  `};
`

export const ArticleContainer = styled.div`
`

export const ArticleContent = styled.div`
  margin-top: ${space[6]};
  margin-bottom: ${space[6]};

  ${mediaQuery.BREAKPOINT_3`
    margin-top: ${space[6]};
  `};

  * {
    :last-child {
      margin-bottom: ${space[0]};
    }
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    margin: ${space[4]} 0;
  }

  a {
    color: ${colorBrandGreen.GREEN_TINT_50};
  }
`
