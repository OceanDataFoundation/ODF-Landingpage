import styled from 'styled-components'

// Tokens
import { borderRadius } from '../../utils/tokens/tokenBorderRadius'
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'
import { fontWeight } from '../../utils/tokens/tokenFontWeight'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const TagList = styled.ol`
  padding: ${space[4]} ${space[0]} ${space[0]} ${space[6]};
  margin: ${space[6]} ${space[0]} ${space[4]} ${space[0]};
  list-style-type: none;
  display: flex;
  position: relative;

  ${mediaQuery.BREAKPOINT_2`
    margin: ${space[6]} ${space[0]} ${space[6]} ${space[0]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding: ${space[4]} ${space[0]};
    margin: ${space[6]} ${space[0]} ${space[8]} ${space[0]};
  `};

  ::before {
    margin-right: ${space[4]};
    font-weight: ${fontWeight.FONT_WEIGHT_4};
    content: 'Tags:';
    position: relative;
    top: 4px;
  }

  ::after {
    width: 16px;
    height: 4px;
    margin-top: 5px;
    content: '';
    position: absolute;
    top: 50%;
    left: 0px;
    background-color: ${colorBrandGreen.GREEN_TINT_50};

    ${mediaQuery.BREAKPOINT_3`
      margin-top: -2px;
      left: -26px;
    `};
  }

  li {
    padding: ${space[2]} ${space[4]};
    border-radius: ${borderRadius.BORDER_RADIUS_2};
    background-color: ${colorNeutral.NEUTRAL_TINT_95};

    :not(:last-child) {
      margin-right: ${space[4]};
    }
  }
`
