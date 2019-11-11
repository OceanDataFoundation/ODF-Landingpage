import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

// Config
import { typeScale } from '../../utils/configs/confTypeScale'

const Blockquote = props => {
  const { children } = props

  return <BlockquoteContent>{children}</BlockquoteContent>
}

const BlockquoteContent = styled.blockquote`
  p {
    ${typeScale.TEXT_PRESET_3};
  }
`

export default Blockquote
