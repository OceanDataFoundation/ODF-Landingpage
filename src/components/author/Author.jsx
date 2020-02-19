import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

// Components
import { Small } from '../typography/small/Small'
import { Meta } from '../meta/Meta'

// Utils
import { space } from '../../utils/configs/confSpace'

const AuthorContainer = styled(Meta)`
  display: flex;
  align-items: center;
`

const AuthorText = styled.div`
  margin-left: ${space[4]};
`

export const Author = ({ name, picture, date, size }) => {
  return (
    <AuthorContainer>
      <Img
        alt={name}
        fixed={picture}
        objectFit="cover"
        objectPosition="50% 50%"
        style={{
          borderRadius: '50%',
          width: size || '48px',
          height: size || '48px',
        }}
      />
      <AuthorText>
        <div>
          <span>{name}</span>
        </div>
        {date && <Small>{date}</Small>}
      </AuthorText>
    </AuthorContainer>
  )
}

Author.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  date: PropTypes.string,
  size: PropTypes.string,
}
