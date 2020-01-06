import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

// Tokens
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { fontFamily } from '../../utils/tokens/tokenFontFamily'
import { duration } from '../../utils/tokens/tokenDuration'

// Config
import { space } from '../../utils/configs/confSpace'
import { typeScale } from '../../utils/configs/confTypeScale'

// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'

// Components
import LinkButton from '../link-button/LinkButton'
import { Strong } from '../typography/strong/Strong'

const Survey = props => {
  const { title, description, buttonText, buttonLink } = props
  const [hidden, setHidden] = useState(true)

  return (
    <SurveyWrapper>
      {hidden ? (
        <SurveyButton onClick={() => setHidden(false)}>
          Hide survey
        </SurveyButton>
      ) : (
        <SurveyButton href="#" onClick={() => setHidden(true)}>
          {' '}
          Show survey
        </SurveyButton>
      )}
      {hidden && (
        <SurveyContent>
          <SurveyTitle>{title}</SurveyTitle>
          <div
            style={{ marginBottom: '3rem' }}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <LinkButton to={`news/${buttonLink}`} alignCenter>
            {buttonText}
          </LinkButton>
        </SurveyContent>
      )}
    </SurveyWrapper>
  )
}

const rotate = keyframes`
  from {
    right: -400px;
  }

  to {
    right: 0;
  }
`

const SurveyWrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: -400px;
  bottom: 0;
  z-index: 9999;
  animation: ${rotate} ${duration.DURATION_5} 5s ease-in-out forwards;
`

const SurveyButton = styled.button`
  width: 124px;
  height: 32px;
  padding: 0;
  margin: 0;
  color: ${colorNeutral.NEUTRAL_TINT_15};
  font-family: ${fontFamily.FONT_FAMILY_1.join()};
  position: absolute;
  top: -32px;
  right: 0;
  border-radius: 0;
  border: none;
  box-shadow: none;
  background-color: ${colorBrandGreen.GREEN_TINT_80};

  ${typeScale.TEXT_PRESET_1};
  ${Transition};

  :hover,
  :focus {
    background-color: ${colorBrandGreen.GREEN_TINT_60};
  }
`

const SurveyTitle = styled(Strong)`
  margin-bottom: ${space[4]};
  font-size: 1.5rem;
  display: block;
`

const SurveyContent = styled.div`
  padding: ${space[6]} ${space[6]} ${space[8]} ${space[6]};
  text-align: left;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
`

export default Survey
