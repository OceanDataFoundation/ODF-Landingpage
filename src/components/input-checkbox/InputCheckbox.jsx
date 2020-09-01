import React from 'react'
import styled from 'styled-components'

// Utils
import { space } from '../../utils/configs/confSpace'
import { borderRadius } from '../../utils/tokens/tokenBorderRadius'
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

// Style
import { Transition } from '../../utils/styles/utility-classes/transition'

import { Label } from '../label/label'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: ${colorNeutral.NEUTRAL_TINT_15};
  stroke-width: 3px;

  :not([fill]) {
    fill: none;
  }
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  top: -2px;
  display: inline-block;
  border-radius: ${borderRadius.BORDER_RADIUS_2};
  border: 1px solid ${colorNeutral.NEUTRAL_TINT_55};
  background-color: ${colorNeutral.NEUTRAL_TINT_100};

  ${Transition};

  ${HiddenCheckbox}:hover + & {
    border-color: ${colorBrandGreen.GREEN_TINT_50};
  }

  ${HiddenCheckbox}:focus + & {
    border-color: ${colorBrandGreen.GREEN_TINT_50};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

const LabelCheckbox = styled(Label)`
  margin-bottom: ${space[4]};

  &:hover {
    cursor: pointer;
  }
`

export const InputCheckbox = ({ checked, ...props }) => (
  <LabelCheckbox htmlFor="checkbox">
    <CheckboxContainer>
      <HiddenCheckbox id="checkbox" checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <span style={{ marginLeft: 8 }}>
      I want to volunteer as an early adopter
    </span>
  </LabelCheckbox>
)
