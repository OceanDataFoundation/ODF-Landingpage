import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
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
      <CustomLinkButton
        to={to}>
        Watch video
      </CustomLinkButton>
      <CustomP lead>
        {content}
      </CustomP>
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

const CustomLinkButton = styled(LinkButton)`
  margin-bottom: 200px;
`;

const CustomP = styled(P)`
   margin-bottom: 100px;

   ${mediaQuery.BREAKPOINT_3`
    margin-bottom: 0px;
  `}
`;

const Content = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  margin-top: 70vh;
  z-index: 100;

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 1 / 8;
    grid-row: 1;
    margin-top: 0;
  `}


  p {
    grid-row: 2;
  }
`

const Image = styled.img`
  height: 650px;
  width: 650px;
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  position: absolute;
  left: 86px;
  top: 50px;

  ${mediaQuery.BREAKPOINT_3`
    position: relative;
    height: 1200px;
    width: 1200px;
    grid-row: 1 / 2;
    grid-column: 5 / 12;
  `}
`;

const HeroContainer = styled(Container)`
  overflow: hidden;

  ${mediaQuery.BREAKPOINT_2`
    margin-top: 4rem;
    overflow: initial;
  `};

  ${mediaQuery.BREAKPOINT_3`
    align-items: center;
    height: calc(100vh - 55px);
  `};

  ${mediaQuery.BREAKPOINT_4`
    background-position: right 35% bottom 45%;
  `};
`

export default Hero
