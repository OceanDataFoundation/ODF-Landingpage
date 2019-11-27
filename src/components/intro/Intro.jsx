import React from 'react'
import styled from 'styled-components'

// Tokens
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

const Intro = props => {
  const { children } = props

  return (
    <IntroContainer>
      <IntroContent>{children}</IntroContent>
    </IntroContainer>
  )
}

const IntroContainer = styled.div`
  max-width: ${breakpoints.BREAKPOINT_4};
  padding-top: 8rem;
  margin: ${space[0]} auto;

  ${mediaQuery.BREAKPOINT_2`
    padding-top: 12rem;
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding-top: 0;
  `};

  ${mediaQuery.BREAKPOINT_4`
    padding-right: ${space[8]};
    padding-left: ${space[8]};
  `};
`

const IntroContent = styled.section`
  width: 100%;
  position: relative;

  ${mediaQuery.BREAKPOINT_3`
    width: 60%;
  `};
`

export default Intro
