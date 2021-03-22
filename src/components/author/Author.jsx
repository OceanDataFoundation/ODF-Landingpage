import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Utils
import { space } from '../../utils/configs/confSpace'
import { colorNeutral } from '../../utils/tokens/tokenColorBrand'
import { Meta } from '../meta/Meta'
// Components
import { Small } from '../typography/small/Small'

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
  picture: PropTypes.object.isRequired,
  date: PropTypes.string,
  size: PropTypes.string,
}

const AuthorContainer = styled(Meta)`
  display: flex;
  align-items: center;
`

const AuthorText = styled.div`
  margin-left: ${space[4]};

  span {
    color: ${colorNeutral.NEUTRAL_TINT_100};
  }
`