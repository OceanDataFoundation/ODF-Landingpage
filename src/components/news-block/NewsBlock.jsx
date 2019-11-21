import styled from 'styled-components'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const NewsBlock = styled.div`
  position: relative;

  ${mediaQuery.BREAKPOINT_3`
    padding: 0 2rem 0 3rem;

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
