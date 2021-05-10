import React from 'react'
import styled from 'styled-components'

import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import PrintLogoSVG from '../components/icons/PrintLogoSVG'
import SEO from '../components/seo/seo'
import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
import { GlobalStyle } from '../utils/styles/global-style'

const OverheadPolicy = () => (
  <PrintWrapper>
    <GlobalStyle />

    <SEO title="Overhead Policy" />

    <FullWidthContainer>
      <PrintHeader>
        <PrintLogoSVG />
        <H1>Overhead Policy</H1>
      </PrintHeader>
      <P>
        As of 1 September 2019, the Ocean Data Foundation does not pay for
        overhead or indirect costs for contractors or third parties that receive
        funds from the Foundation.
      </P>
    </FullWidthContainer>
  </PrintWrapper>
)

const PrintWrapper = styled.div`
  margin-top: 1.5cm;

  @media print {
    @page {
      margin: 0 2cm 2cm 2cm;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`

const PrintHeader = styled(Header)`
  margin-bottom: 0.5cm;
`

export default OverheadPolicy
