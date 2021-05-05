import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'
// Components
import { ArrowLeft } from '../arrow/ArrowLeft'
import { ArrowRight } from '../arrow/ArrowRight'

export const Header = styled.header`
  position: relative;
  margin: ${space[0]};
  ${Transition};

  a {

    &:hover {
      ${ArrowLeft} {
        transform: translateX(20px);
        background-color: ${colorBrandGreen.GREEN_TINT_50};

        ::before,
        ::after {
          background-color: ${colorBrandGreen.GREEN_TINT_50};
        }
      }

      ${ArrowRight} {
        transform: translateX(20px);
        background-color: ${colorBrandGreen.GREEN_TINT_50};

        ::before,
        ::after {
          background-color: ${colorBrandGreen.GREEN_TINT_50};
        }
      }
    }

  }
`
