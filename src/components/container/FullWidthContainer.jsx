import styled from 'styled-components'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
import { Container } from './Container'

export const FullWidthContainer = styled(Container)`
  grid-template-columns: repeat(1, 100%);

  ${mediaQuery.BREAKPOINT_3`
  grid-template-columns: repeat(1, 100%);
  `};
`;
