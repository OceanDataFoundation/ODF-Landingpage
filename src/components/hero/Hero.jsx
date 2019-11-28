import React from 'react'
import styled from 'styled-components'

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
  background-color: black;
  background-image: url(${props => (props.bgImage ? props.bgImage : `none`)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 65% 170px;

  ${mediaQuery.BREAKPOINT_2`
    background-position: 85% 170px;
  `};

  ${mediaQuery.BREAKPOINT_3`
    align-items: center;
    background-position: center 40px;
  `};

  ${mediaQuery.BREAKPOINT_4`
    background-position: center -80px;
  `};
`

export default Hero
