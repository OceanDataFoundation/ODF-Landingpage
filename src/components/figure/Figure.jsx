import styled from 'styled-components'

// Tokens
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'
import { zIndex } from '../../utils/tokens/tokenZIndex'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const Figure = styled.figure`
  margin: ${space[0]};
  position: relative;

  ::before {
    ${mediaQuery.BREAKPOINT_3`
    width: 4px;
    height: 160px;
    content: '';
    position: absolute;
    bottom: -72px;
    left: 24px;
    background-color: ${colorBrandGreen.GREEN_TINT_50};
    z-index: ${zIndex.Z_INDEX_2};
  `};
  }

  img {
    /* width: 100%;
    height: auto; */
  }
`
