import styled from 'styled-components'

import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Tokens
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

export const NewsBlock = styled.div`
  padding-top: ${space[4]};
  padding-bottom: ${space[3]};
  margin-bottom: ${space[6]};
  position: relative;

  ::after {
    width: 40px;
    height: 4px;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${colorBrandGreen.GREEN_TINT_50};

    ${mediaQuery.BREAKPOINT_3`
      display: none;
    `};
  }

  ${mediaQuery.BREAKPOINT_3`
    padding: ${space[4]} 2rem 0 3rem;
    margin-bottom: 0;

    ::before {
      width: 4px;
      height: 160px;
      content: '';
      position: absolute;
      top: -40px;
      left: 12px;
      background-color: #d9d9d9;
    }
  `};
`
