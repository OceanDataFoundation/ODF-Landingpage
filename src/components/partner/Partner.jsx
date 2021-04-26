import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'
// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
import { H3 } from '../typography/heading/Heading'
// Components
import P from '../typography/paragraph/Paragraph'

export const Partner = ({ partner }) => {
  const { url, name, description, logo, id } = partner

  console.log('partner', partner);

  return (
    <PartnerContainer href={url} target="_blank" rel="noopener noreferrer">
      <ImageContainer>
        <PartnerImage fluid={logo.fluid} key={id} />
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

const PartnerContainer = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: ${space[8]};
  column-gap: ${space[6]};

  cursor: pointer;
  border-bottom: none;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 256px;
  background-color: white;
`

const PartnerImage = styled(Img)`
  height: auto;
  max-height: 256px;
  width: 300px;

`

const PartnerText = styled.div`
`