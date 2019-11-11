import React from 'react'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import { Container } from '../container/Container'

const Hero = props => {
  const { children, bgImage } = props

  return <HeroContainer bgImage={bgImage}>{children}</HeroContainer>
}

const HeroContainer = styled(Container)`
  max-width: 100vw;
  height: 100vh;
  align-items: start;
  background-color: ${colorNeutral.NEUTRAL_TINT_0};
  background-image: url(${props => (props.bgImage ? props.bgImage : `none`)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${mediaQuery.BREAKPOINT_3`
    align-items: center;
  `};
`

export default Hero
