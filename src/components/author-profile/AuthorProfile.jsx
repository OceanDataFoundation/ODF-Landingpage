import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Utils
import { space } from '../../utils/configs/confSpace'
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
//Components
import { H5 } from '../typography/heading/Heading'
import P from '../typography/paragraph/Paragraph'
import { Small } from '../typography/small/Small'

export const AuthorProfile = ({ author }) => {
  const { name, affiliation, biography, pageUrl } = author
  return (
    <Container>
      <AuthorText>
        <P>WRITTEN BY</P>
        <AuthorName>
          <H5 style={{marginBottom:"0px"}}>{name}</H5>
        </AuthorName>
        <a style={{color: "#fff"}} href={pageUrl} target="blank">
          Read more
        </a>
      </AuthorText>
      <AuthorBio>
        {affiliation && <P>{affiliation}</P>}
        <Small>{biography.biography}</Small>
      </AuthorBio>
    </Container>
  )
}

AuthorProfile.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    biography: PropTypes.objectOf(PropTypes.string.isRequired),
    pageUrl: PropTypes.string,
    affiliation: PropTypes.string,
  }).isRequired,
}

const Container = styled.div`
margin-bottom: ${space[7]};

${mediaQuery.BREAKPOINT_3`
    margin-bottom: 0;
  `};
`

const AuthorText = styled.div`
  width: 100%;
`

const AuthorBio = styled.div`
`
const AuthorName = styled.div`
`
