import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'
// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'
// Components
import { H6 } from '../typography/heading/Heading'

const Ul = styled.ul`
  padding: ${space[0]};
  margin: ${space[0]};
  list-style-type: none;
  display: flex;
  flex-direction: ${props => (props.inline ? 'row' : 'column')};
`

const Li = styled.li`
  margin-bottom: ${space[3]};
  margin-right: ${props => (props.inline ? '0' : '1rem')};

  ::before {
    display: none;
  }
`

const A = styled.a`
  padding-bottom: ${space[2]};
  color: ${props =>
    props.invert
      ? colorNeutral.NEUTRAL_TINT_15
      : colorNeutral.NEUTRAL_TINT_100};
  text-decoration: none;
  border-bottom: ${props =>
    props.underline
      ? `1px solid ${colorNeutral.NEUTRAL_TINT_100} !important`
      : ''};

  ${Transition};

  :hover,
  :focus {
    color: ${props =>
      props.invert
        ? colorNeutral.NEUTRAL_TINT_15
        : colorNeutral.NEUTRAL_TINT_100};
    border-bottom-color: transparent !important;
  }
`

const LinkList = props => {
  const { linkList, invert, inline, underline } = props
  const { text, listItems } = linkList

  return (
    <>
      <H6 invert={invert}>{text}</H6>
      <Ul inline={inline}>
        {listItems.map(item => (
          <Li key={item.id}>
            <A
              invert={invert}
              underline={underline}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderBottom: 'none' }}>
              {!item.image && item.text}
              {item.image && (
                <img
                  src={item.image.file.url}
                  alt={item.image.description}
                  width="40"
                  style={{ marginTop: '5px' }}
                />
              )}
            </A>
          </Li>
        ))}
      </Ul>
    </>
  )
}

LinkList.propTypes = {
  linkList: PropTypes.object.isRequired,
  invert: PropTypes.bool,
  inline: PropTypes.bool,
  underline: PropTypes.bool,
}

export default LinkList
