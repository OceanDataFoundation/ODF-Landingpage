import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import P from '../typography/paragraph/Paragraph'
import { H3 } from '../typography/heading/Heading'

const PartnerContainer = styled.a`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: ${space[8]};
  column-gap: ${space[6]};

  cursor: pointer;
  border-bottom: none;

  ${mediaQuery.BREAKPOINT_3`
    flex-direction: row;
  `}
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 256px;
`

const PartnerImage = styled(Img)`
  margin: auto;
  ${mediaQuery.BREAKPOINT_1`
    margin: auto 0;
`}
`

const PartnerText = styled.div`
  flex: 1;
  max-width: 70ch;

  ${mediaQuery.BREAKPOINT_3`
    display: flex;
    justify-content: center;
    flex-direction: column;

    h3 {
      text-align: center;
    }
`}
`

export const Partner = ({ partner }) => {
  const { url, name, description, logo, id } = partner

  return (
    <PartnerContainer href={url} target="_blank" rel="noopener noreferrer">
      <ImageContainer>
        <PartnerImage fixed={logo.fixed} key={id} />
      </ImageContainer>
      <PartnerText>
        {name && <H3>{name}</H3>}
        {description && <P>{description.description}</P>}
      </PartnerText>
    </PartnerContainer>
  )
}

Partner.propTypes = {
  partner: PropTypes.object.isRequired,
}
