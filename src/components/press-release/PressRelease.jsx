import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

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
  grid-template-columns: repeat(1, 100%);

  ${mediaQuery.BREAKPOINT_2`
    padding-right: ${space[0]};
    padding-left: ${space[0]};
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-column-gap: ${space[10]};
    grid-template-columns: repeat(3, 1fr);
  `};

  article {
    position: relative;

    :not(:last-child) {
      padding-bottom: ${space[4]};
      margin-bottom: ${space[6]};

      ::after {
        width: 16px;
        height: 4px;
        content: '';
        position: absolute;
        bottom: 0;
        background-color: ${colorBrandGreen.GREEN_TINT_50};

        ${mediaQuery.BREAKPOINT_3`
        display: none;
      `};
      }
    }

    ${mediaQuery.BREAKPOINT_3`
      padding-bottom: ${space[0]};
      margin-bottom: ${space[0]};
    `};
  }

  p {
    margin-top: ${space[6]};
  }

  a {
    margin-top: ${space[5]};
    margin-bottom: ${space[4]};
  }
`

PressRelease.propTypes = {
  children: PropTypes.node,
}

export default PressRelease
