import React from 'react'
import styled from 'styled-components'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Tokens
import { colorBrandPurple } from '../../utils/tokens/tokenColorBrand'
// Components
import { Container } from '../container/Container'

const Hero = props => {
  const { children, bgImage } = props

  return (
  <HeroContainer>
    <Content>
      {children}
    </Content>

      {/* <BackgroundImage bgImage={bgImage}>
      </BackgroundImage> */}
    </HeroContainer>
  )
}

const Content = styled.div`
  grid-column: 1 / span 7;
`

const BackgroundImage = styled.div`
  height: 200px;
  max-width: 100vw;
  align-items: start;
  background-color: ${colorBrandPurple.PURPLE_TINT_50};
  background-image: url(${props => (props.bgImage ? props.bgImage : `none`)});
  background-repeat: no-repeat;
  background-position: 65% 170px;
`;

const HeroContainer = styled(Container)`
  height: 100vh;
  /* display: grid;
  grid-template-columns: repeat(12, 1fr); */
  /* max-width: 100vw;
  align-items: start;
  background-color: ${colorBrandPurple.PURPLE_TINT_50};
  background-image: url(${props => (props.bgImage ? props.bgImage : `none`)});
  //background-size: cover;
  background-repeat: no-repeat;
  background-position: 65% 170px; */

  ${mediaQuery.BREAKPOINT_2`
    //background-position: 85% 170px;
  `};

  ${mediaQuery.BREAKPOINT_3`
    align-items: center;
    //background-position: center 40px;
  `};

  ${mediaQuery.BREAKPOINT_4`
    background-position: right 35% bottom 45%;

  `};
`

export default Hero
