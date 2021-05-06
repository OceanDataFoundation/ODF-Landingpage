import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Components
import { Container } from '../container/Container'
import OctopusSVG from '../icons/OctopusSVG'
import LinkButton from '../link-button/LinkButton'
import { H1 } from '../typography/heading/Heading'
import P from '../typography/paragraph/Paragraph'

const Hero = props => {
  const { title, content, to } = props

  return (
  <HeroContainer>
    <Content>
      <TextAndLinkContainer>
        <H1 size="larger">
          {title}
        </H1>
        <CustomLinkButton
          to={to}>
          Watch video
        </CustomLinkButton>
      </TextAndLinkContainer>
      <CustomP lead>
        {content}
      </CustomP>
    </Content>

    {/* <Image src={bgImage} /> */}
    <IconContainer>
      <OctopusSVG />
    </IconContainer>
    </HeroContainer>
  )
}

Hero.propTypes = {
  // bgImage: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  to: PropTypes.string
}

const TextAndLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${H1} {

    ${mediaQuery.BREAKPOINT_3`
    margin-bottom: 6rem;
  `}
  }
`;

const CustomLinkButton = styled(LinkButton)`
  max-width: 200px;
  max-height: 60px;
  margin-bottom: 0;
`;

const CustomP = styled(P)`
   margin-bottom: 100px;

   ${mediaQuery.BREAKPOINT_3`
    margin-bottom: -50px;
  `}
`;

const Content = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  margin-top: 70vh;
  z-index: 100;

  ${mediaQuery.BREAKPOINT_2`
    grid-column: 1 / 11;
    grid-row: 1;
    margin-top: 0;
    margin-bottom: 40px;

    display: grid;
    height: 100vh;
    grid-template-rows: 2fr 1fr;

    ${TextAndLinkContainer} {
      grid-row: 1;
    }

    ${CustomP} {
      grid-row: 2;
      display: flex;
      align-items: flex-end;
    }
  `}

  ${mediaQuery.BREAKPOINT_3`
    grid-column: 1 / 7;
  `}


  p {
    grid-row: 2;
  }
`

const IconContainer = styled.div`
  height: 650px;
  width: 650px;
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  position: absolute;
  left: 86px;
  top: 50px;

  ${mediaQuery.BREAKPOINT_2`
    position: relative;
    height: 600px;
    width: 600px;
    grid-row: 1 / 2;
    grid-column: 8 / 12;
    top: 50px;
    left: 186px;
  `}

  ${mediaQuery.BREAKPOINT_3`
    position: relative;
    height: 1200px;
    width: 1200px;
    grid-row: 1 / 2;
    grid-column: 5 / 12;
    top: 0;
  `}
`;

const HeroContainer = styled(Container)`
  overflow: hidden;

  ${mediaQuery.BREAKPOINT_2`
    margin-top: 4rem;
    overflow: initial;
  `};

  ${mediaQuery.BREAKPOINT_4`
    background-position: right 35% bottom 45%;
  `};
`

export default Hero
