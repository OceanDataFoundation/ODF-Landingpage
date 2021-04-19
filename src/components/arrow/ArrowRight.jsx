import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'

export const ArrowRight = styled.div`
  width: 100px;
  height: 4px;
  content: '';
  display: block;
  position: relative;
  background-color: ${colorNeutral.NEUTRAL_TINT_100};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  ::before,
  ::after {
    width: 4px;
    height: 20px;
    border-radius: 50px;
    content: '';
    position: absolute;
    background-color: ${colorNeutral.NEUTRAL_TINT_100};
  }

  ::before {
    right: 5px;
    top: -2px;
    transform: rotate(45deg);
  }

  ::after {
    right: 5px;
    top: -14px;
    transform: rotate(-45deg);
  }
`