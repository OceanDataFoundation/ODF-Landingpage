import React from 'react'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../../utils/configs/confSpace'
import { typeScale } from '../../utils/configs/confTypeScale'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import { Container } from '../container/Container'
import { H1 } from '../typography/heading/Heading'

const FrontPageHero = props => {
  const { children, bgImage, title } = props

  return (
    <FrontPageHeroWrapper bgImage={bgImage} title={title}>
      <Container>
        <FrontPageHeroContent>
          <FrontPageHeroTitle>{title}</FrontPageHeroTitle>
          {children}
        </FrontPageHeroContent>
      </Container>
    </FrontPageHeroWrapper>
  )
}

const FrontPageHeroWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colorNeutral.NEUTRAL_TINT_0};
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${mediaQuery.BREAKPOINT_2`
    justify-content: center;
  `};
`

const FrontPageHeroContent = styled.div`
  width: 100%;
  padding: 0 ${space[4]};
  margin-top: 40%;

  ${mediaQuery.BREAKPOINT_1`
    padding: 0 ${space[6]};
  `};

  ${mediaQuery.BREAKPOINT_2`
    width: 75%;
    padding: 0 ${space[8]};
    margin-top: auto;
  `};

  ${mediaQuery.BREAKPOINT_5`
    padding: 0;
  `};

  p {
    color: ${colorNeutral.NEUTRAL_TINT_100};

    ${typeScale.TEXT_PRESET_2};

    ${mediaQuery.BREAKPOINT_1`
      ${typeScale.TEXT_PRESET_3};
    `};

    :first-child {
      margin-top: 30px;
    }
  }
`

const FrontPageHeroTitle = styled(H1)`
  ${typeScale.TEXT_PRESET_3};

  color: ${colorNeutral.NEUTRAL_TINT_100};

  ${mediaQuery.BREAKPOINT_1`
    ${typeScale.TEXT_PRESET_5};
  `};

  ${mediaQuery.BREAKPOINT_2`
    ${typeScale.TEXT_PRESET_6};
  `};

  ${mediaQuery.BREAKPOINT_3`
    ${typeScale.TEXT_PRESET_7};
  `};

  ${mediaQuery.BREAKPOINT_4`
    ${typeScale.TEXT_PRESET_8};
  `};
`

export default FrontPageHero
