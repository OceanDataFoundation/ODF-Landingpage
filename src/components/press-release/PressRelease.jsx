import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
// Components
import { Container } from '../container/Container'

const PressRelease = props => {
  const { children, columnGap, columnWidth } = props

  return (
    <PressReleaseContainer columnGap={columnGap} columnWidth={columnWidth}>
      {children}
    </PressReleaseContainer>
  )
}

const PressReleaseContainer = styled(Container)`
  padding-right: ${space[0]};
  padding-left: ${space[0]};
  margin-bottom: ${space[6]};
  grid-template-columns: repeat(1, 100%);
  grid-row-gap: ${props => (props.columnWidth ? space[6] : null)};

  ${mediaQuery.BREAKPOINT_2`
    padding-right: ${space[0]};
    padding-left: ${space[0]};
    grid-column-gap: ${props =>
      props.columnGap === 'large' ? space[5] : space[6]};
    grid-template-columns: ${props =>
      props.columnWidth === 'large' ? `repeat(2, 1fr)` : `repeat(1, 100%)`};
  `};

  ${mediaQuery.BREAKPOINT_3`
    grid-column-gap: ${props =>
      props.columnGap === 'large' ? space[10] : space[6]};
    grid-template-columns: repeat(3, 1fr);
  `};

  article {
    position: relative;

    :not(:last-child) {
      padding-bottom: ${space[4]};
      margin-bottom: ${space[0]};
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
  columnGap: PropTypes.oneOf(['small', 'large']),
  columnWidth: PropTypes.oneOf(['small', 'large']),
}

export default PressRelease
