import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'

// Config
import { space } from '../../utils/configs/confSpace'
import { typeScale } from '../../utils/configs/confTypeScale'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const Table = styled.table`
  width: ${breakpoints.BREAKPOINT_2};
  table-layout: fixed;
  border-collapse: collapse;

  ${mediaQuery.BREAKPOINT_2`
    width: ${breakpoints.BREAKPOINT_3};
  `};

  ${mediaQuery.BREAKPOINT_3`
    width: 100%;
  `};
`

export const TBody = styled.tbody`
  ${typeScale.TEXT_PRESET_2};
`

export const Tr = styled.tr`
  :first-child td {
    padding-top: ${space[0]};
  }

  :last-child td {
    padding-bottom: ${space[0]};
  }

  :not(:last-child) {
    border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_75};
  }
`

export const Td = styled.td`
  padding: ${space[6]} 0;

  :first-child {
    width: 300px;

    ${mediaQuery.BREAKPOINT_4`
      width: 400px;
    `};
  }

  :last-child {
    width: 240px;
  }

  :not(:last-child) {
    padding-right: ${space[6]};
  }
`
