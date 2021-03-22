import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
import { typeScale } from '../../utils/configs/confTypeScale'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'

export const TableWrapper = styled.div``

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TBody = styled.tbody`
  ${typeScale.TEXT_PRESET_2};
`

export const Tr = styled.tr`
  border-bottom: none;

  th,
  td {
    :not(:last-child) {
      border: none;
    }
  }

  :first-child td {
    ${mediaQuery.BREAKPOINT_3`
      padding-top: ${space[0]};
    `};
  }

  :last-child td {
    ${mediaQuery.BREAKPOINT_3`
      padding-bottom: ${space[0]};
    `};
  }

  :not(:last-child) {
    border-bottom: 1px solid ${colorNeutral.NEUTRAL_TINT_75};
  }
`

export const Td = styled.td`
  width: 100%;
  padding: ${space[3]} 0;
  display: inline-block;
  vertical-align: top;

  ${mediaQuery.BREAKPOINT_2`
    width: 50%;
    padding: ${space[5]} 0 ${space[2]} 0;
  `};

  ${mediaQuery.BREAKPOINT_3`
    width: auto;
    padding: ${space[5]} 0;
    display: table-cell;
  `};

  :first-child {
    padding-top: ${space[5]};
    padding-left: ${space[5]};

    ${mediaQuery.BREAKPOINT_3`
      padding-left: ${space[0]};
    `};

    ${mediaQuery.BREAKPOINT_4`
      width: 400px;
    `};
  }

  :last-child {
    margin-top: ${space[4]};
    padding-bottom: ${space[5]};
    padding-left: ${space[5]};

    ${mediaQuery.BREAKPOINT_3`
      width: 240px;
      padding-left: ${space[0]};
      margin-top: ${space[0]};
      vertical-align: middle;
    `};
  }

  :not(:last-child) {
    padding-right: ${space[6]};
  }

  :nth-child(2) {
    padding-left: ${space[5]};

    ${mediaQuery.BREAKPOINT_3`
      padding-left: ${space[0]};
    `};
  }
`
