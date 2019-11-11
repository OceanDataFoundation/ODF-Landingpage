import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import { Container } from '../container/Container'

const Intro = props => {
  const { children } = props

  return (
    <IntroContainer>
      <IntroContent>{children}</IntroContent>
    </IntroContainer>
  )
}

const IntroContainer = styled(Container)`
  padding-top: 8rem;
  padding-right: ${space[3]};
  padding-left: ${space[3]};

  ${mediaQuery.BREAKPOINT_1`
    padding-right: ${space[6]};
    padding-left: ${space[6]};
  `};

  ${mediaQuery.BREAKPOINT_2`
    padding-top: 12rem;
    padding-right: ${space[8]};
    padding-left: ${space[8]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding-top: 0;
  `};
`

const IntroContent = styled.section`
  width: 100%;

  ${mediaQuery.BREAKPOINT_3`
    width: 60%;
  `};
`

export default Intro
