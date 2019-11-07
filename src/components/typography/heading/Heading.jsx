import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Config
import { typeScale } from '../../../utils/configs/confTypeScale'

// Global style
import {
  GlobalH1,
  GlobalH2,
  GlobalH3,
  GlobalH4,
  GlobalH5,
  GlobalH6,
} from '../../../utils/styles/typography/heading'

export const H1 = props => {
  const { children, size, ...rest } = props

  return (
    <HeadingH1 size={size} {...rest}>
      {children}
    </HeadingH1>
  )
}

const HeadingH1 = styled.h1`
  ${props =>
    props.size === 'large'
      ? typeScale.TEXT_PRESET_8
      : props.size === 'larger'
      ? typeScale.TEXT_PRESET_9
      : GlobalH1};
`

export const H2 = styled.h2`
  ${GlobalH2};
`

export const H3 = styled.h3`
  ${GlobalH3};
`

export const H4 = styled.h4`
  ${GlobalH4};
`

export const H5 = styled.h5`
  ${GlobalH5};
`

export const H6 = styled.h6`
  ${GlobalH6};
`

H1.propTypes = {
  size: PropTypes.oneOf(['large', 'larger']),
}
