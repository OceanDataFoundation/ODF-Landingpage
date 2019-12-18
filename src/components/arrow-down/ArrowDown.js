import styled from 'styled-components'

// Tokens
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const ArrowDown = styled.a`
  width: 2px;
  height: 40px;
  content: '';
  position: absolute;
  bottom: ${space[6]};
  left: ${space[5]};
  background-color: ${colorBrandGreen.GREEN_TINT_50};

  ::before,
  ::after {
    width: 2px;
    height: 12px;
    content: '';
    position: absolute;
    bottom: -1px;
    background-color: ${colorBrandGreen.GREEN_TINT_50};
  }

  ::before {
    left: 5px;
    transform: rotate(45deg);
  }

  ::after {
    right: 5px;
    transform: rotate(-45deg);
  }

  ${mediaQuery.BREAKPOINT_2`
    left: ${space[6]};
    bottom: ${space[10]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    margin-left: -1px;
    left: 50%;
    bottom: ${space[6]};
  `};
`
