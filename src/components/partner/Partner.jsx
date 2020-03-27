import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import Img from 'gatsby-image'
import P from '../typography/paragraph/Paragraph'
import { H3 } from '../typography/heading/Heading'

const PartnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: ${space[6]};
  column-gap: ${space[6]};

  ${mediaQuery.BREAKPOINT_3`
    flex-direction: row;
  `}
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
`

export const Partner = ({ partner }) => {
  return (
    <PartnerContainer>
      <PartnerImage fixed={partner.logo.fixed} key={partner.id} />
      <PartnerText>
        <H3>{partner.name}</H3>
        {partner.description.description && (
          <P>{partner.description.description}</P>
        )}
      </PartnerText>
    </PartnerContainer>
  )
}

Partner.propTypes = {
  partner: PropTypes.object.isRequired,
}
