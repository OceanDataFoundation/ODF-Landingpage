import styled from 'styled-components'

// Config
import { space } from '../../../utils/configs/confSpace'
import { typeScale } from '../../../utils/configs/confTypeScale'
// Mixins
import { mediaQuery } from '../../../utils/mixins/mixMediaQuery'
// Global style
import {
  GlobalH1,
  GlobalH2,
  GlobalH3,
  GlobalH4,
  GlobalH5,
  GlobalH6,
} from '../../../utils/styles/typography/heading'
// Tokens
import { colorNeutral } from '../../../utils/tokens/tokenColorBrand'

export const H1 = styled.h1`
  margin-bottom: ${props =>
    props.size === 'larger'
      ? space[5]
      : props.size === 'large'
      ? space[4]
      : props.size === 'none'
      ? space[0]
      : space[3]};
  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_0
      : colorNeutral.NEUTRAL_TINT_100};
  ${props =>
    props.size === 'large'
      ? typeScale.TEXT_PRESET_4
      : props.size === 'larger'
      ? typeScale.TEXT_PRESET_4
      : GlobalH1};

  ${mediaQuery.BREAKPOINT_2`
    margin-bottom: ${props =>
      props.size === 'large'
        ? space[6]
        : props.size === 'larger'
        ? space[5]
        : space[4]};
    ${props =>
      props.size === 'large'
        ? typeScale.TEXT_PRESET_6
        : props.size === 'larger'
        ? typeScale.TEXT_PRESET_7
        : GlobalH1};
  `};

  ${mediaQuery.BREAKPOINT_3`
  margin-bottom: ${props =>
    props.size === 'large'
      ? space[7]
      : props.size === 'larger'
      ? space[6]
      : space[5]};
    ${props =>
      props.size === 'large'
        ? typeScale.TEXT_PRESET_7
        : props.size === 'larger'
        ? typeScale.TEXT_PRESET_8
        : GlobalH1};
  `};

  ${mediaQuery.BREAKPOINT_4`
    ${props =>
      props.size === 'large'
        ? typeScale.TEXT_PRESET_8
        : props.size === 'larger'
        ? typeScale.TEXT_PRESET_9
        : GlobalH1};
  `};
`

export const H2 = styled.h2`
  ${GlobalH2};
  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_15
      : colorNeutral.NEUTRAL_TINT_100};
`

export const H3 = styled.h3`
  ${GlobalH3};
  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_15
      : colorNeutral.NEUTRAL_TINT_100};
`

export const H4 = styled.h4`
  ${GlobalH4};
  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_15
      : colorNeutral.NEUTRAL_TINT_100};
`

export const H5 = styled.h5`
  ${GlobalH5};
  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_15
      : colorNeutral.NEUTRAL_TINT_100};
`

export const H6 = styled.h6`
  ${GlobalH6};
  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_15
      : colorNeutral.NEUTRAL_TINT_100};
`
