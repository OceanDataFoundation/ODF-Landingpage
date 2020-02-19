import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Img from 'gatsby-image'

//Components
import { H3 } from '../typography/heading/Heading'
import P from '../typography/paragraph/Paragraph'
import { Small } from '../typography/small/Small'
import LinkCta from '../link-cta/LinkCta'

// Utils
import { space } from '../../utils/configs/confSpace'
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { borderWidth } from '../../utils/tokens/tokenBorderWidth'

const Container = styled.div`
  display: flex;

  border-top: ${borderWidth.BORDER_WIDTH_1} solid
    ${colorNeutral.NEUTRAL_TINT_90};
  padding-top: ${space[6]};

  max-width: 70ch;

  ${mediaQuery.BREAKPOINT_3`
    margin-left: ${space[10]};
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

const Profile = styled.div`
  display: flex;

  align-items: center;
  margin-bottom: ${space[5]};

  ${mediaQuery.BREAKPOINT_2`
    margin-bottom: ${space[0]};
  `};
`

const AuthorImg = styled.div`
  width: 80px;
  height: 80px;
`

const AuthorText = styled.div`
  padding-left: ${space[4]};
  width: 100%;
`

const AuthorBio = styled.div`
  ${mediaQuery.BREAKPOINT_2`
    margin-left: 96px;
  `};
`

const HideOnPhone = styled.div`
  display: none;
  ${mediaQuery.BREAKPOINT_2`
    display: block;
  `};
`

const ShowOnPhone = styled.div`
  display: block;
  ${mediaQuery.BREAKPOINT_2`
    display: none;
  `};
`
const AuthorName = styled.div`
  display: flex;
  justify-content: space-between;
`

/**
 * This component was created to showcase author profiles in blog posts.
 * @param {object} author - an object that contains information about an author
 */

export const AuthorProfile = ({ author }) => {
  console.log('TCL: author', author)
  const { name, picture, affiliation, pageUrl, biography } = author
  return (
    <Container>
      <Wrapper>
        <Profile>
          <AuthorImg>
            <Img
              alt={name}
              fixed={picture.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
              style={{ borderRadius: '50%' }}
            />
          </AuthorImg>
          <AuthorText>
            <P>WRITTEN BY</P>
            <AuthorName>
              <H3>{name}</H3>
              {pageUrl && (
                <HideOnPhone>
                  <LinkCta href={pageUrl} target="blank">
                    Read more
                  </LinkCta>
                </HideOnPhone>
              )}
            </AuthorName>
          </AuthorText>
        </Profile>
        <AuthorBio>
          {affiliation && (
            <HideOnPhone>
              <P>{affiliation}</P>
            </HideOnPhone>
          )}
          <Small>{biography.biography}</Small>
          {pageUrl && (
            <ShowOnPhone style={{ marginTop: space[5] }}>
              <LinkCta href={pageUrl} target="blank">
                Read more
              </LinkCta>
            </ShowOnPhone>
          )}
        </AuthorBio>
      </Wrapper>
    </Container>
  )
}

AuthorProfile.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.objectOf(PropTypes.object.isRequired),
    biography: PropTypes.objectOf(PropTypes.string.isRequired),
    pageUrl: PropTypes.string,
    affiliation: PropTypes.string,
  }).isRequired,
}
