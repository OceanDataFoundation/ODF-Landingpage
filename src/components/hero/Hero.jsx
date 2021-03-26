import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Tokens
import { colorBrandPurple } from '../../utils/tokens/tokenColorBrand'
// Components
import { Container } from '../container/Container'
import LinkButton from '../link-button/LinkButton'
import {H1} from '../typography/heading/Heading'
import P from '../typography/paragraph/Paragraph'

const Hero = props => {
  const { children, bgImage, title, content, to } = props

  return (
  <HeroContainer>
    <Content>
      {/* {children} */}
      <H1 size="larger">
        {title}
      </H1>
      <LinkButton
        to={to}
        style={{ marginTop: '2rem', display: 'inline-block' }}>
        Watch video
      </LinkButton>
      <P lead>
        {content}
      </P>
    </Content>

      <Image src={bgImage} />
    </HeroContainer>
  )
}

Hero.propTypes = {
  children: PropTypes.node,
  bgImage: PropTypes.string
}

const Content = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  margin-top: 2rem;

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 1 / 7;
    grid-row: 1 / 2;
  `}


  p {
    grid-row: 2;
  }
`

const Image = styled.img`
  height: 200px;
  width: 200px;
  grid-row: 1 / 2;
  grid-column: 1 / -1;

  ${mediaQuery.BREAKPOINT_3`
    height: 1200px;
    width: 1200px;
    grid-row: 1 / 2;
    grid-column: 5 / 12;
  `}


  /* max-width: 100vw;
  align-items: start;
  background-color: ${colorBrandPurple.PURPLE_TINT_50};
  background-image: url(${props => (props.bgImage ? props.bgImage : `none`)});
  background-repeat: no-repeat;
  background-position: 65% 170px; */
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
