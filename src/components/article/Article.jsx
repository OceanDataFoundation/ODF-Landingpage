import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const Article = styled.article``

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  ${mediaQuery.BREAKPOINT_3`
    padding-left: 64px;
  `};
`

export const ArticleContent = styled.div`
  margin-top: ${space[6]};
  margin-bottom: ${space[6]};

  ${mediaQuery.BREAKPOINT_3`
    margin-top: ${space[8]};
  `};

  * {
    max-width: 52rem;

    :last-child {
      margin-bottom: ${space[0]};
    }
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    margin: ${space[4]} 0;
    float: left;
  }
`
