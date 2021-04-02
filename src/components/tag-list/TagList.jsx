import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Tokens
import { borderRadius } from '../../utils/tokens/tokenBorderRadius'
import { colorBrandGreen, colorNeutral } from '../../utils/tokens/tokenColorBrand'
import { fontWeight } from '../../utils/tokens/tokenFontWeight'

export const TagList = styled.ol`
  padding: ${space[4]} ${space[0]} ${space[0]} ${space[6]};
  margin: ${space[6]} ${space[0]} ${space[0]} ${space[0]};
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  ${mediaQuery.BREAKPOINT_3`
    padding: ${space[4]} ${space[0]} ${space[0]} ${space[0]};
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
    margin-top: 16px;
    content: '';
    position: absolute;
    left: 0px;
    background-color: ${colorBrandGreen.GREEN_TINT_50};

    ${mediaQuery.BREAKPOINT_3`
      left: -26px;
    `};
  }

  /* HACK: Had to add higher specificity selector to
  * add margin-bottom to last list item in articles
  */
  && li {
    margin-bottom: ${space[4]};
    padding: ${space[2]} ${space[4]};
    border-radius: ${borderRadius.BORDER_RADIUS_2};
    background-color: ${colorNeutral.NEUTRAL_TINT_95};
    color: ${colorNeutral.NEUTRAL_TINT_15};

    :not(:last-child) {
      margin-right: ${space[4]};
    }
  }
`
