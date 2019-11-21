import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Components
import { H6 } from '../typography/heading/Heading'

// Styles
const Li = styled.li`
  display: ${props => (props.inline ? 'inline-block' : 'list-item')};

  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_100
      : colorNeutral.NEUTRAL_TINT_15};

  a {
    margin-right: ${props => (props.inline ? '1rem' : '0')};
  }
`

const LinkList = props => {
  const { linkList, invert, inline } = props
  const { text, listItems } = linkList

  return (
    <>
      <H6 invert={invert}>{text}</H6>
      <ul>
        {listItems.map(item => (
          <Li invert={invert} inline={inline} key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {!item.image && item.text}
              {item.image && (
                <img
                  src={item.image.file.url}
                  alt={item.image.description}
                  width="48"
                />
              )}
            </a>
          </Li>
        ))}
      </ul>
    </>
  )
}

LinkList.propTypes = {
  linkList: PropTypes.object.isRequired,
  invert: PropTypes.bool,
  inline: PropTypes.bool,
}

export default LinkList
