import styled from 'styled-components'

// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'
// Tokens
import { colorBrandGreen, colorNeutral } from '../../utils/tokens/tokenColorBrand'

export const SmallArrowRight = styled.div`
  width: 40px;
  height: 2px;
  content: '';
  display: block;
  position: relative;
  background-color: ${colorNeutral.NEUTRAL_TINT_100};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  ${Transition};

  :hover {
    transform: translateX(20px);
    background-color: ${colorBrandGreen.GREEN_TINT_50};
  }

  ::before,
  ::after {
    width: 2px;
    height: 10px;
    border-radius: 50px;
    content: '';
    position: absolute;
    background-color: ${colorNeutral.NEUTRAL_TINT_100};

    &:hover {
      background-color: ${colorBrandGreen.GREEN_TINT_50};
    }
  }

  ::before {
    right: 2px;
    top: -1px;
    transform: rotate(45deg);
  }

  ::after {
    right: 2px;
    top: -7px;
    transform: rotate(-45deg);
  }
`