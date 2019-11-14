import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import { Container } from '../container/Container'

const PressRelease = props => {
  const { children } = props

  return <PressReleaseContainer>{children}</PressReleaseContainer>
}

const PressReleaseContainer = styled(Container)`
  padding-right: ${space[0]};
  padding-left: ${space[0]};
  margin-bottom: ${space[6]};
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${space[10]};

  ${mediaQuery.BREAKPOINT_2`
    padding-right: ${space[0]};
    padding-left: ${space[0]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    padding-right: ${space[0]};
    padding-left: ${space[0]};
  `};

  a {
    margin-top: ${space[5]};
    margin-bottom: ${space[4]};
  }
`

PressRelease.propTypes = {
  children: PropTypes.node,
}

export default PressRelease
