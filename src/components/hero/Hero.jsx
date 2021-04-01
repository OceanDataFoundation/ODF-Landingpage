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
  const { bgImage, title, content, to } = props

  return (
  <HeroContainer>
    <Content>
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
  bgImage: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  to: PropTypes.string
}

const Content = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  margin-top: 2rem;
  z-index: 100;

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 1 / 7;
    grid-row: 1 / 2;
  `}


  p {
    grid-row: 2;
  }
`

const Image = styled.img`
  height: 700px;
  width: 700px;
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
  grid-template-rows: repeat(2, 1fr);
  margin-top: 8rem;

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
    margin-top: 4rem;
  `};

  ${mediaQuery.BREAKPOINT_3`
    align-items: center;
    height: calc(100vh - 55px);
    //background-position: center 40px;
  `};

  ${mediaQuery.BREAKPOINT_4`
    background-position: right 35% bottom 45%;
  `};
`

export default Hero
