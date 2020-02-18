import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Img from 'gatsby-image'

// Utils
import { space } from '../../utils/configs/confSpace'
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

const Container = styled.div`
  display: flex;

  border-top: 1px solid ${colorNeutral.NEUTRAL_TINT_90};
  padding-top: ${space[6]};

  max-width: 70ch;

  ${mediaQuery.BREAKPOINT_3`
    margin-left: 64px;
  `};
`

const Wrapper = styled.div`
  margin-bottom: ${space[10]};
  div > p {
    margin-bottom: ${space[3]};
  }

  h3 {
    margin: 0;
  }
`

const AuthorImg = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
`

const AuthorText = styled.div`
  /* margin-left: ${space[4]}; */
`

export const Author = ({ author }) => {
  console.log('TCL: author', author)
  const { name, picture, affiliation, pageUrl, biography } = author
  return (
    <Container>
      <Wrapper>
        <span style={{ display: 'block', marginBottom: '24px' }}>
          <AuthorImg>
            <Img
              alt={name}
              fixed={picture.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
              style={{ borderRadius: '50%' }}
            />
          </AuthorImg>
          <div style={{ paddingLeft: '96px' }}>
            <p>WRITTEN BY</p>
          </div>
          <div style={{ marginBottom: '8px', paddingLeft: '96px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{name}</h3>
              <div style={{ display: 'none' }}>
                <a href={pageUrl} target="blank">
                  Link
                </a>
              </div>
            </div>
          </div>
        </span>
        <AuthorText>
          <div style={{ display: 'none' }}>
            {affiliation && <p>{affiliation}</p>}
          </div>
          <small>{biography.biography}</small>
          <div>
            <a href={pageUrl} target="blank">
              Link
            </a>
          </div>
        </AuthorText>
      </Wrapper>
    </Container>
  )
}

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.objectOf(PropTypes.object.isRequired),
    biography: PropTypes.objectOf(PropTypes.string.isRequired),
    pageUrl: PropTypes.string,
    affiliation: PropTypes.string,
  }),
}
