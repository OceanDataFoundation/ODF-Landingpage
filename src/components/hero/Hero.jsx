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
import { H1 } from '../../components/typography/heading/Heading'

const Hero = props => {
  const { children, bgImage, title } = props

  return (
    <HeroWrapper bgImage={bgImage} title={title}>
      <Container>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          {children}
        </HeroContent>
      </Container>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colorNeutral.NEUTRAL_TINT_0};
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const HeroContent = styled.div`
  width: 100%;
  padding: 0 ${space[4]};
  flex: 0 0 50%;

  ${mediaQuery.BREAKPOINT_2`
    width: 70%;
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

const HeroTitle = styled(H1)`
  ${typeScale.TEXT_PRESET_4};

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

  ${mediaQuery.BREAKPOINT_5`
    ${typeScale.TEXT_PRESET_9};
  `};
`

export default Hero
