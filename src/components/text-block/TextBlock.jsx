import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { space } from '../../utils/configs/confSpace'
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'
import { H3 } from '../typography/heading/Heading'

export const TextBlock = ({ textblock }) => {
  const { heading, bodyText } = textblock

  return (
    <StyledTextBlock>
      <H3>{heading}</H3>
      <div
        dangerouslySetInnerHTML={{
          __html: bodyText.content[0].content[0].value
        }}
      />
    </StyledTextBlock>
  )
}


TextBlock.propTypes = {
  textblock: PropTypes.object.isRequired,
}

const StyledTextBlock = styled.div`
  margin-bottom: ${space[5]};

  ${H3} {
    margin-bottom: 6px;
  }

  ${mediaQuery.BREAKPOINT_3`
    margin-bottom: ${space[6]};
  `};
`;

