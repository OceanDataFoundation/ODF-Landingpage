import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo/seo'

import { GlobalStyle } from '../utils/styles/global-style'

import { Container } from '../components/container/Container'
import { Header } from '../components/header/Header'
import { H1 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'

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

const PrintLogo = styled.div`
  width: 160px;
  margin-bottom: 2cm;
`

const OverheadPolicy = () => (
  <PrintWrapper>
    <GlobalStyle />

    <SEO title="Overhead Policy" />

    <Container>
      <PrintHeader>
        <PrintLogo>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 350.7 80"
            enableBackground="new 0 0 350.7 80">
            <rect fill="none" width="350.7" height="80" />
            <g>
              <path
                fill="#00D2C8"
                d="M82,40L82,40l0,2h-3.9l0-2l0,0l0-2H82L82,40z"
              />
              <path
                fill="#00D2C8"
                d="M81.1,32L81.1,32l-0.4-1.8l-3.5,0.7l0.3,1.8l0,0l0.3,1.8l3.6-0.7L81.1,32z"
              />
              <path
                fill="#00D2C8"
                d="M78.6,24.4L78.6,24.4L78,22.8l-3.1,1.3l0.6,1.6l0,0l0.6,1.6l3.2-1.3L78.6,24.4z"
              />
              <path
                fill="#00D2C8"
                d="M74.8,17.4L74.8,17.4l-0.9-1.3l-2.6,1.7l0.8,1.3l0,0l0.8,1.3l2.7-1.8L74.8,17.4z"
              />
              <path
                fill="#00D2C8"
                d="M69.7,11.4L69.7,11.4l-1.1-1l-2,2l1,1.1l0,0l1,1.1l2.1-2.1L69.7,11.4z"
              />
              <path
                fill="#00D2C8"
                d="M63.5,6.4L63.5,6.4l-1.2-0.8l-1.5,2.2L62,8.6l0,0l1.1,0.8l1.5-2.3L63.5,6.4z"
              />
              <path
                fill="#00D2C8"
                d="M56.4,2.8L56.4,2.8l-1.2-0.4l-0.9,2.2l1.1,0.5l0,0l1.1,0.5l0.9-2.3L56.4,2.8z"
              />
              <path
                fill="#00D2C8"
                d="M48.9,0.7L48.9,0.7l-1.1-0.2l-0.4,2.1l1.1,0.2l0,0l1.1,0.2l0.4-2.2L48.9,0.7z"
              />
              <path fill="#00D2C8" d="M42,2h-1l0,0h-1V0h1l0,0h1V2z" />
              <path
                fill="#00D2C8"
                d="M33.3,0.9L33.3,0.9l-0.8,0.2l0.3,1.6l0.8-0.1l0,0l0.8-0.1l-0.4-1.7L33.3,0.9z"
              />
              <path
                fill="#00D2C8"
                d="M25.8,3.2L25.8,3.2l-0.7,0.3l0.5,1.3l0.7-0.3l0,0L27,4.3L26.4,3L25.8,3.2z"
              />
              <path
                fill="#00D2C8"
                d="M19,7.1L19,7.1l-0.5,0.4l0.7,1l0.5-0.3l0,0l0.5-0.3l-0.7-1L19,7.1z"
              />
              <path
                fill="#00D2C8"
                d="M13.1,12.1L13.1,12.1l-0.4,0.4l0.7,0.7l0.4-0.4l0,0l0.4-0.4l-0.7-0.7L13.1,12.1z"
              />
              <path
                fill="#00D2C8"
                d="M8.2,18.1L8.2,18.1L8,18.4l0.6,0.4l0.2-0.3l0,0L9,18.2l-0.6-0.4L8.2,18.1z"
              />
              <path
                fill="#00D2C8"
                d="M4.7,25L4.7,25l-0.1,0.2l0.4,0.2l0.1-0.2l0,0l0.1-0.2l-0.4-0.2L4.7,25z"
              />
              <path
                fill="#00D2C8"
                d="M2.9,32.3L2.9,32.3L2.9,32.3l0,0.2l-0.3,0l0-0.1l0,0l0-0.1L2.9,32.3z"
              />
              <path
                fill="#00D2C8"
                d="M74.2,40L74.2,40l0-2h-3.8l0,2l0,0l0,2h4L74.2,40z"
              />
              <path
                fill="#00D2C8"
                d="M73.1,32.1L73.1,32.1l-0.5-1.8l-3.4,0.8l0.4,1.8l0,0l0.4,1.8l3.5-0.9L73.1,32.1z"
              />
              <path
                fill="#00D2C8"
                d="M70.1,24.7L70.1,24.7l-0.8-1.5l-2.8,1.5l0.8,1.5l0,0l0.8,1.5l3-1.6L70.1,24.7z"
              />
              <path
                fill="#00D2C8"
                d="M65.5,18.3L65.5,18.3l-1-1.1l-2.2,2l1,1.2l0,0l1,1.2l2.3-2L65.5,18.3z"
              />
              <path
                fill="#00D2C8"
                d="M59.5,13.2L59.5,13.2l-1.2-0.8l-1.5,2.2l1.1,0.8l0,0l1.1,0.8l1.6-2.3L59.5,13.2z"
              />
              <path
                fill="#00D2C8"
                d="M52.5,9.7L52.5,9.7l-1.2-0.4l-0.8,2.2l1.1,0.4l0,0l1.1,0.4l0.9-2.3L52.5,9.7z"
              />
              <path
                fill="#00D2C8"
                d="M44.9,8L44.9,8l-1.1-0.1l-0.3,2l1,0.1l0,0l1,0.1l0.3-2.1L44.9,8z"
              />
              <path
                fill="#00D2C8"
                d="M37.2,8.1L37.2,8.1l-0.9,0.1l0.2,1.8l0.9-0.1l0,0l0.9-0.1L38,8L37.2,8.1z"
              />
              <path
                fill="#00D2C8"
                d="M29.7,10.1L29.7,10.1L29,10.4l0.5,1.4l0.7-0.3l0,0l0.7-0.3l-0.5-1.4L29.7,10.1z"
              />
              <path
                fill="#00D2C8"
                d="M23,13.8L23,13.8l-0.5,0.4l0.7,1l0.5-0.3l0,0l0.5-0.3l-0.7-1L23,13.8z"
              />
              <path
                fill="#00D2C8"
                d="M17.3,19L17.3,19L17,19.3l0.7,0.6l0.3-0.3l0,0l0.3-0.3l-0.7-0.6L17.3,19z"
              />
              <path
                fill="#00D2C8"
                d="M13.1,25.3L13.1,25.3L13,25.6l0.5,0.3l0.1-0.3l0,0l0.1-0.3L13.3,25L13.1,25.3z"
              />
              <path
                fill="#00D2C8"
                d="M10.9,32.4l0,0.1l0,0l0,0.2l-0.3-0.1l0-0.1l0,0l0-0.1L10.9,32.4z"
              />
              <path
                fill="#00D2C8"
                d="M66.4,40L66.4,40l0-2h-3.8l0,2l0,0l0,2h4L66.4,40z"
              />
              <path
                fill="#00D2C8"
                d="M64.7,31.4L64.7,31.4L64,29.8l-3.2,1.2l0.5,1.6l0,0l0.5,1.6l3.3-1.2L64.7,31.4z"
              />
              <path
                fill="#00D2C8"
                d="M60.1,24L60.1,24l-1-1.2l-2.3,1.9l0.9,1.2l0,0l1,1.2l2.4-2L60.1,24z"
              />
              <path
                fill="#00D2C8"
                d="M53.4,18.6L53.4,18.6L52.2,18L51,20.2l1.1,0.7l0,0l1.1,0.7l1.3-2.3L53.4,18.6z"
              />
              <path
                fill="#00D2C8"
                d="M45.3,15.9L45.3,15.9l-1.1-0.2l-0.4,2.1l1.1,0.2l0,0l1.1,0.2l0.4-2.2L45.3,15.9z"
              />
              <path
                fill="#00D2C8"
                d="M36.8,16.1L36.8,16.1l-0.9,0.2l0.3,1.7l0.8-0.1l0,0l0.8-0.1l-0.3-1.8L36.8,16.1z"
              />
              <path
                fill="#00D2C8"
                d="M29,19.2L29,19.2l-0.6,0.4l0.6,1.1l0.6-0.3l0,0l0.6-0.3l-0.7-1.2L29,19.2z"
              />
              <path
                fill="#00D2C8"
                d="M22.7,24.7L22.7,24.7L22.5,25l0.7,0.5l0.3-0.3l0,0l0.3-0.3l-0.7-0.6L22.7,24.7z"
              />
              <path
                fill="#00D2C8"
                d="M18.8,31.9L18.8,31.9l-0.1,0.2l0.4,0.1l0.1-0.2l0,0l0.1-0.2l-0.4-0.1L18.8,31.9z"
              />
              <path
                fill="#00D2C8"
                d="M58.6,40L58.6,40l0-2h-3.8l-0.1,2l0,0l-0.1,2h4L58.6,40z"
              />
              <path
                fill="#00D2C8"
                d="M55.9,31.4L55.9,31.4L55,30l-2.7,1.6l0.8,1.5l0,0l0.8,1.5l2.9-1.7L55.9,31.4z"
              />
              <path
                fill="#00D2C8"
                d="M49.4,25.4L49.4,25.4l-1.2-0.6l-1.2,2.2l1.1,0.7l0,0l1.1,0.7l1.4-2.4L49.4,25.4z"
              />
              <path
                fill="#00D2C8"
                d="M41,23.4L41,23.4l-1,0v1.9l0.9,0l0,0l1,0v-2L41,23.4z"
              />
              <path
                fill="#00D2C8"
                d="M32.9,25.9L32.9,25.9l-0.6,0.4l0.6,1.1l0.6-0.3l0,0l0.6-0.3l-0.6-1.2L32.9,25.9z"
              />
              <path
                fill="#00D2C8"
                d="M27.2,32.1L27.2,32.1l-0.2,0.3l0.5,0.3l0.2-0.3l0,0l0.2-0.3l-0.6-0.4L27.2,32.1z"
              />
              <path fill="#00D2C8" d="M0,40L0,40l0,2h3.9l0-2l0,0l0-2H0L0,40z" />
              <path
                fill="#00D2C8"
                d="M0.9,48L0.9,48l0.4,1.8l3.5-0.7l-0.3-1.8l0,0l-0.3-1.8l-3.6,0.7L0.9,48z"
              />
              <path
                fill="#00D2C8"
                d="M3.4,55.6L3.4,55.6L4,57.2l3.1-1.3l-0.6-1.6l0,0l-0.6-1.6L2.7,54L3.4,55.6z"
              />
              <path
                fill="#00D2C8"
                d="M7.2,62.6L7.2,62.6l0.9,1.3l2.6-1.7l-0.8-1.3l0,0L9,59.5l-2.7,1.8L7.2,62.6z"
              />
              <path
                fill="#00D2C8"
                d="M12.4,68.6L12.4,68.6l1.1,1l2-2l-1-1.1l0,0l-1-1.1l-2.1,2.1L12.4,68.6z"
              />
              <path
                fill="#00D2C8"
                d="M18.6,73.6L18.6,73.6l1.2,0.8l1.5-2.2l-1.1-0.8l0,0L19,70.6l-1.5,2.3L18.6,73.6z"
              />
              <path
                fill="#00D2C8"
                d="M25.6,77.2L25.6,77.2l1.2,0.4l0.9-2.2l-1.1-0.5l0,0l-1.1-0.5l-0.9,2.3L25.6,77.2z"
              />
              <path
                fill="#00D2C8"
                d="M33.6,77.2L33.6,77.2l1.1,0.2l-0.4,2.1l-1.1-0.2l0,0l-1.1-0.2l0.4-2.2L33.6,77.2z"
              />
              <path fill="#00D2C8" d="M41,78L41,78h1V80h-1l0,0h-1v-2L41,78z" />
              <path
                fill="#00D2C8"
                d="M48.8,79.1L48.8,79.1l0.8-0.2l-0.3-1.6l-0.8,0.1l0,0l-0.8,0.1l0.4,1.7L48.8,79.1z"
              />
              <path
                fill="#00D2C8"
                d="M56.2,76.8L56.2,76.8l0.7-0.3l-0.5-1.3l-0.7,0.3l0,0L55,75.7l0.6,1.4L56.2,76.8z"
              />
              <path
                fill="#00D2C8"
                d="M63,72.9L63,72.9l0.5-0.4l-0.7-1l-0.5,0.3l0,0l-0.5,0.3l0.7,1L63,72.9z"
              />
              <path
                fill="#00D2C8"
                d="M68.9,67.9L68.9,67.9l0.4-0.4l-0.7-0.7l-0.4,0.4l0,0l-0.4,0.4l0.7,0.7L68.9,67.9z"
              />
              <path
                fill="#00D2C8"
                d="M73.7,61.9L73.7,61.9l0.2-0.3l-0.6-0.4l-0.2,0.3l0,0l-0.2,0.3l0.6,0.4L73.7,61.9z"
              />
              <path
                fill="#00D2C8"
                d="M77.3,55L77.3,55l0.1-0.2l-0.4-0.2l-0.1,0.2l0,0l-0.1,0.2l0.4,0.2L77.3,55z"
              />
              <path
                fill="#00D2C8"
                d="M79.4,47.5l0,0.1l0,0l0,0.1l-0.2,0l0-0.1l0,0l0-0.1L79.4,47.5z"
              />
              <path
                fill="#00D2C8"
                d="M7.8,40L7.8,40l0,2h3.8l0-2l0,0l0-2h-4L7.8,40z"
              />
              <path
                fill="#00D2C8"
                d="M9,47.9L9,47.9l0.5,1.8l3.4-0.8l-0.4-1.8l0,0l-0.4-1.8l-3.5,0.9L9,47.9z"
              />
              <path
                fill="#00D2C8"
                d="M11.9,55.3L11.9,55.3l0.8,1.5l2.8-1.5l-0.8-1.5l0,0L14,52.3l-3,1.6L11.9,55.3z"
              />
              <path
                fill="#00D2C8"
                d="M16.5,61.7L16.5,61.7l1,1.1l2.2-2l-1-1.2l0,0l-1-1.2l-2.3,2L16.5,61.7z"
              />
              <path
                fill="#00D2C8"
                d="M22.5,66.8L22.5,66.8l1.2,0.8l1.5-2.2L24,64.6l0,0l-1.1-0.8L21.4,66L22.5,66.8z"
              />
              <path
                fill="#00D2C8"
                d="M29.5,70.3L29.5,70.3l1.2,0.4l0.8-2.2L30.4,68l0,0l-1.1-0.4l-0.9,2.3L29.5,70.3z"
              />
              <path
                fill="#00D2C8"
                d="M37.1,72L37.1,72l1.1,0.1l0.3-2l-1-0.1l0,0l-1-0.1l-0.3,2.1L37.1,72z"
              />
              <path
                fill="#00D2C8"
                d="M44.8,71.9L44.8,71.9l0.9-0.1L45.5,70l-0.9,0.1l0,0l-0.9,0.1l0.2,1.8L44.8,71.9z"
              />
              <path
                fill="#00D2C8"
                d="M52.3,69.9L52.3,69.9l0.7-0.3l-0.5-1.4l-0.7,0.3l0,0l-0.7,0.3l0.5,1.4L52.3,69.9z"
              />
              <path
                fill="#00D2C8"
                d="M59.1,66.2L59.1,66.2l0.5-0.4l-0.7-1l-0.5,0.3l0,0l-0.5,0.3l0.7,1L59.1,66.2z"
              />
              <path
                fill="#00D2C8"
                d="M64.7,61L64.7,61l0.3-0.4l-0.7-0.6L64,60.4l0,0l-0.3,0.3l0.7,0.6L64.7,61z"
              />
              <path
                fill="#00D2C8"
                d="M68.9,54.7L68.9,54.7l0.1-0.3l-0.5-0.3l-0.1,0.3l0,0l-0.1,0.3l0.5,0.3L68.9,54.7z"
              />
              <path
                fill="#00D2C8"
                d="M71.5,47.4l0,0.1l0,0l0,0.1l-0.3-0.1l0-0.1l0,0l0-0.1L71.5,47.4z"
              />
              <path
                fill="#00D2C8"
                d="M15.7,40L15.7,40l0,2h3.8l0-2l0,0l0-2h-4L15.7,40z"
              />
              <path
                fill="#00D2C8"
                d="M17.4,48.6L17.4,48.6l0.6,1.6l3.1-1.2l-0.5-1.6l0,0l-0.5-1.6l-3.3,1.2L17.4,48.6z"
              />
              <path
                fill="#00D2C8"
                d="M21.9,56L21.9,56l1,1.2l2.3-1.9l-0.9-1.2l0,0l-0.9-1.2l-2.4,2L21.9,56z"
              />
              <path
                fill="#00D2C8"
                d="M28.6,61.4L28.6,61.4l1.2,0.6l1.3-2.2L30,59.2l0,0l-1.1-0.7l-1.3,2.3L28.6,61.4z"
              />
              <path
                fill="#00D2C8"
                d="M36.7,64.1L36.7,64.1l1.1,0.2l0.4-2.1L37.1,62l0,0l-1.1-0.2l-0.4,2.2L36.7,64.1z"
              />
              <path
                fill="#00D2C8"
                d="M45.2,63.9L45.2,63.9l0.9-0.2L45.8,62l-0.8,0.1l0,0l-0.8,0.1l0.3,1.8L45.2,63.9z"
              />
              <path
                fill="#00D2C8"
                d="M53,60.8L53,60.8l0.6-0.4L53,59.4l-0.6,0.3l0,0L51.8,60l0.7,1.2L53,60.8z"
              />
              <path
                fill="#00D2C8"
                d="M59.2,55.3L59.2,55.3l0.3-0.4l-0.7-0.5l-0.3,0.3l0,0l-0.3,0.3l0.7,0.6L59.2,55.3z"
              />
              <path
                fill="#00D2C8"
                d="M63.2,48.1L63.2,48.1l0.1-0.2l-0.4-0.1L62.8,48l0,0l-0.1,0.2l0.4,0.1L63.2,48.1z"
              />
              <path
                fill="#00D2C8"
                d="M23.5,40L23.5,40l0,2h3.8l0.1-2l0,0l0.1-2h-4L23.5,40z"
              />
              <path
                fill="#00D2C8"
                d="M26.1,48.6L26.1,48.6L27,50l2.7-1.6L28.9,47l0,0l-0.8-1.5l-2.9,1.7L26.1,48.6z"
              />
              <path
                fill="#00D2C8"
                d="M32.5,54.6L32.5,54.6l1.2,0.6l1.2-2.2l-1.1-0.7l0,0l-1.1-0.7l-1.4,2.4L32.5,54.6z"
              />
              <path
                fill="#00D2C8"
                d="M41,56.6L41,56.6l1,0v-1.9l-1,0l0,0l-1,0v2L41,56.6z"
              />
              <path
                fill="#00D2C8"
                d="M49.1,54.1L49.1,54.1l0.6-0.4l-0.6-1.1l-0.6,0.3l0,0l-0.6,0.3l0.7,1.2L49.1,54.1z"
              />
              <path
                fill="#00D2C8"
                d="M54.8,48L54.8,48l0.2-0.3l-0.5-0.3l-0.2,0.3l0,0l-0.2,0.3l0.6,0.4L54.8,48z"
              />
              <path fill="#00D2C8" d="M56.6,40L56.6,40L56.6,40L56.6,40z" />
              <path
                fill="#0F161B"
                d="M254.1,34.6c2-11,3.9-21.8,5.8-32.8h0.5c2.6,0,5.2,0,7.8,0c2.6,0,5.1,0.3,7.5,1.3c3.1,1.4,5.3,3.6,6.5,6.8
    c0.9,2.6,1,5.3,0.8,8.1c-0.3,2.5-0.9,4.9-2.1,7.1c-1.2,2.4-2.9,4.3-5.1,5.8c-2.8,2-5.9,3-9.3,3.4c-1.3,0.2-2.7,0.2-4,0.2
    c-2.6,0-5.2,0-7.8,0C254.5,34.6,254.3,34.6,254.1,34.6z M256.4,32.8c0.1,0,0.1,0,0.1,0c2.8,0,5.7,0,8.5-0.1
    c2.5-0.1,4.9-0.7,7.1-1.8c2.7-1.3,4.9-3.2,6.4-5.8c1.2-2.1,2-4.3,2.3-6.8c0.4-2.7,0.3-5.3-0.5-7.8c-0.7-2-1.9-3.7-3.6-4.9
    c-2.2-1.5-4.6-2-7.1-2.1c-2.4-0.1-4.7,0-7.1,0c-1.1,0-0.9-0.1-1.1,0.9c-0.6,3.1-1.2,6.3-1.7,9.5c-0.5,2.8-1,5.7-1.5,8.6
    c-0.5,2.7-1,5.4-1.5,8.1C256.6,31.4,256.5,32.1,256.4,32.8z"
              />
              <path
                fill="#0F161B"
                d="M345.5,30c0,0.1,0,0.1-0.1,0.2c-1.1,1.3-2.3,2.5-3.6,3.4c-1.7,1.2-3.7,1.7-5.8,1.5
    c-1.2-0.1-2.3-0.4-3.3-1.1c-1.6-1-2.6-2.5-3.2-4.3c-0.7-2-0.7-4.1-0.5-6.2c0.2-2.3,0.8-4.5,1.9-6.5c1.5-2.8,3.8-5,6.8-6
    c2.5-0.8,5-0.8,7.4,0.3c1.2,0.5,2.1,1.2,3,2.1c0.1,0.1,0.1,0.3,0.2,0.4c0,0,0.1-0.1,0.2-0.1c0.2-0.7,0.4-1.3,0.5-2
    c0.2-0.7,0.1-0.7,0.9-0.8c0.8,0,0.9,0,0.7,0.8c-0.4,2.3-0.8,4.5-1.2,6.7c-0.4,2.4-0.8,4.9-1.3,7.4c-0.3,1.6-0.6,3.2-0.8,4.9
    c0,0.4,0,0.9,0.1,1.3c0.2,0.6,0.7,0.9,1.3,1c0.8,0.1,0.8,0.1,0.7,0.9c-0.1,0.7-0.1,0.7-0.8,0.7c-2.2-0.2-3.3-1.6-3.1-3.8
    c0-0.2,0.1-0.5,0.1-0.7C345.6,30,345.6,30,345.5,30z M341.8,12c-1.7,0-3,0.1-4.2,0.7c-2.4,1.1-4.1,3-5.3,5.4
    c-0.8,1.7-1.3,3.5-1.5,5.4c-0.2,2.2-0.2,4.3,0.7,6.3c1.1,2.7,2.9,3.8,5.6,3.7c1.8,0,3.3-0.7,4.7-1.7c1.6-1.2,2.9-2.8,4-4.5
    c0.1-0.1,0.1-0.3,0.2-0.5c0.4-1.9,0.7-3.8,1-5.6c0.3-1.8,0.7-3.6,1-5.5c0-0.2,0-0.4-0.1-0.5C346.2,13.3,344.1,12.1,341.8,12z"
              />
              <path
                fill="#0F161B"
                d="M303.4,30c-1.1,1.2-2.3,2.4-3.5,3.3c-1.3,1-2.7,1.6-4.4,1.7c-1.6,0.2-3,0-4.4-0.7c-1.7-0.8-2.8-2.1-3.5-3.8
    c-0.6-1.4-0.9-2.8-0.9-4.3c-0.1-2.7,0.3-5.4,1.3-7.9c1.4-3.4,3.6-5.9,7.1-7.3c3.7-1.4,7.7-0.9,10.7,2.1c0.1,0.1,0.3,0.3,0.5,0.4
    c0.2-0.7,0.3-1.4,0.5-2c0.1-0.3,0.2-0.7,0.3-0.7c0.4-0.1,0.8,0,1.2,0c0,0,0.1,0.2,0.1,0.4c-0.1,0.9-0.3,1.8-0.5,2.7
    c-0.4,2-0.7,3.9-1,5.9c-0.3,1.5-0.5,3.1-0.8,4.6c-0.4,2.2-0.8,4.4-1.1,6.6c-0.2,1.1,0.4,2,1.6,2.1c0.5,0,0.5,0,0.5,0.6
    c0,1-0.2,1.1-1.2,0.8c-1-0.2-1.9-0.6-2.4-1.6c-0.4-0.8-0.4-1.6-0.3-2.4C303.3,30.4,303.4,30.2,303.4,30z M288.5,24.8
    c0,0.5,0,1.1,0.1,1.6c0.1,1.7,0.5,3.3,1.5,4.8c0.7,1,1.6,1.8,2.8,2c2.4,0.6,4.7,0,6.7-1.5c1.6-1.2,2.9-2.7,4-4.4
    c0.1-0.2,0.2-0.4,0.3-0.6c0.3-1.5,0.5-2.9,0.8-4.3c0.4-2.3,0.8-4.5,1.2-6.7c0-0.3,0-0.4-0.2-0.7c-1.5-1.6-3.1-2.7-5.3-3
    c-1.7-0.3-3.4-0.1-5,0.6c-2.4,1.1-4.1,3-5.3,5.4C289,20.3,288.6,22.5,288.5,24.8z"
              />
              <path
                fill="#0F161B"
                d="M323.5,32.4c0.2,0.5,0.4,0.9,0.7,1.4c-2.2,1.2-4.3,1.8-6.8,1.1c-1.6-0.5-2.4-1.8-2.7-3.4
    c-0.2-1.3,0.2-2.6,0.4-3.9c0.5-3,1.1-6,1.6-9c0.3-1.8,0.7-3.6,1-5.4c0-0.2,0-0.3,0-0.5h-4.3c0-0.1,0-0.1,0-0.1
    c0.1-1.5,0.1-1.5,1.5-1.5h3.1c0.1-0.6,0.2-1.2,0.4-1.9c0.3-1.9,0.7-3.7,1-5.5c0-0.3,0.1-0.4,0.4-0.4c0.5,0,1,0,1.5,0
    c-0.5,2.6-0.9,5.1-1.4,7.8h7c0,0.4-0.1,0.8-0.2,1.1c0,0.4-0.2,0.5-0.6,0.5c-1.9,0-3.8,0-5.7,0c-0.8,0-0.8,0-0.9,0.8
    c-0.7,3.9-1.4,7.9-2.1,11.8c-0.3,1.6-0.5,3.1-0.8,4.7c-0.1,0.5,0,1.1,0,1.6c0.3,1.5,1,2,2.5,2.1c1.2,0.1,2.4-0.3,3.5-0.8
    C323,32.6,323.2,32.5,323.5,32.4z"
              />
              <path
                fill="#0F161B"
                d="M128.5,1.3c4.5,0,8.1,1.5,10.7,4.8c1.7,2.1,2.6,4.6,2.9,7.2c0.3,2.5,0.1,5-0.5,7.4
    c-0.8,3.3-2.4,6.3-4.8,8.7c-2.7,2.8-6.1,4.6-10,5.4c-2.4,0.4-4.9,0.5-7.3-0.2c-2.3-0.7-4.3-1.9-5.9-3.7c-2-2.3-3.1-5-3.4-8
    c-0.5-4.5,0.4-8.8,2.7-12.7c1.9-3.2,4.6-5.5,7.9-7.2c1.7-0.8,3.4-1.4,5.2-1.6C126.8,1.4,127.8,1.4,128.5,1.3z M111.8,21.3
    c0,2,0.5,4.5,1.8,6.8c1.3,2.2,3.1,3.8,5.5,4.7c2.4,0.9,4.9,0.9,7.4,0.4c3.9-0.8,7.2-2.8,9.8-5.9c2.1-2.7,3.5-5.7,3.9-9.1
    c0.4-3,0.1-5.9-1.1-8.6c-1.2-2.7-3.1-4.6-5.9-5.7c-2.3-0.9-4.7-1-7.1-0.6c-4.2,0.7-7.6,2.8-10.3,6.1
    C113.1,12.6,111.8,16.4,111.8,21.3z"
              />
              <path
                fill="#0F161B"
                d="M208.6,30c-0.4,0.5-0.9,1-1.3,1.5c-1,1-2,2-3.3,2.6c-1.6,0.8-3.2,1.2-5,1c-1.2-0.1-2.3-0.4-3.3-1.1
    c-1.6-1-2.6-2.5-3.2-4.3c-0.7-2-0.8-4.2-0.5-6.3c0.2-2.3,0.8-4.4,1.9-6.4c1.5-2.9,3.8-5,6.9-6.1c2.2-0.8,4.3-0.8,6.6-0.1
    c1.5,0.5,2.7,1.3,3.8,2.4c0.1,0.1,0.2,0.3,0.3,0.5c0.1,0,0.1-0.1,0.2-0.1c0.2-0.7,0.4-1.4,0.5-2c0.2-0.7,0.2-0.7,0.8-0.7
    c0.9,0,0.9,0,0.8,0.9c-0.5,2.9-1,5.9-1.6,8.8c-0.4,1.9-0.7,3.8-1,5.7c-0.3,1.5-0.5,2.9-0.8,4.4c0,0.4,0,0.8,0,1.2
    c0.1,0.7,0.6,1.1,1.3,1.2c0,0,0.1,0,0.2,0c0.6,0.1,0.6,0.1,0.5,0.7c0,0,0,0.1,0,0.1c-0.1,0.8-0.1,0.8-0.8,0.7
    c-1.2-0.1-2.2-0.6-2.7-1.7c-0.3-0.7-0.4-1.4-0.2-2.2c0-0.2,0.1-0.4,0.1-0.6C208.6,30.1,208.6,30.1,208.6,30z M193.8,24.7
    c0,2,0.2,3.6,0.8,5c1.1,2.7,3,3.8,5.6,3.8c1.8,0,3.3-0.7,4.7-1.8c1.6-1.2,2.9-2.8,4-4.4c0.1-0.1,0.1-0.4,0.2-0.5
    c0.3-1.6,0.6-3.3,0.9-4.9c0.4-2,0.8-4.1,1.1-6.1c0-0.2,0-0.4-0.1-0.5c-1.1-1.2-2.3-2.2-3.9-2.8c-2-0.7-4.1-0.7-6,0.1
    c-2.3,0.8-3.9,2.4-5.1,4.4C194.5,19.6,193.8,22.3,193.8,24.7z"
              />
              <path
                fill="#0F161B"
                d="M173.7,22.3c-1.6,0-2.7,0-3.8,0c-0.3,0-0.4,0.1-0.4,0.4c0,1-0.2,2.1-0.1,3.1c0,1.8,0.4,3.5,1.5,5.1
    c0.9,1.3,2.1,2.1,3.7,2.4c3.3,0.7,6.3,0,9.1-1.7c0.6-0.4,0.6-0.4,1,0.2v0c0.5,0.8,0.7,0.7-0.3,1.2c-1.7,1-3.6,1.7-5.6,2
    c-1.9,0.3-3.8,0.3-5.6-0.3c-2.6-0.8-4.2-2.7-5.1-5.2c-0.7-2-0.8-4.1-0.5-6.3c0.2-1.7,0.7-3.4,1.4-5c1.3-2.9,3.5-5,6.3-6.4
    c1.9-1,4-1.4,6.1-1.4c1.4,0,2.8,0.2,4.1,0.8c2.4,1.2,3.8,4.1,2.5,6.6c-0.5,1.1-1.5,1.8-2.5,2.4c-1.6,0.9-3.4,1.3-5.1,1.6
    c-1.2,0.2-2.4,0.3-3.5,0.4C175.6,22.3,174.4,22.3,173.7,22.3z M169.9,20.7c0.2,0,0.3,0,0.4,0c2.5,0,5,0,7.5-0.2
    c1.5-0.1,2.9-0.4,4.3-0.6c1.2-0.2,2.3-0.6,3.2-1.4c1-0.8,1.5-1.7,1.4-2.9c-0.2-1.6-1.1-2.4-2.4-3.1c-1.3-0.6-2.8-0.6-4.2-0.5
    c-2.4,0.2-4.5,1.2-6.3,2.7C171.8,16.4,170.6,18.4,169.9,20.7z"
              />
              <path
                fill="#0F161B"
                d="M217.6,34.6c0.1-0.5,0.1-1,0.2-1.5c0.5-2.7,1-5.3,1.4-8c0.6-3.2,1.1-6.5,1.7-9.7c0.2-1.4,0.5-2.7,0.7-4.1
    c0-0.2,0.1-0.4,0.4-0.4s0.5,0,0.8,0c0.4,0,0.5,0.1,0.4,0.5c-0.2,1.1-0.3,2.2-0.4,3.3c-0.1,0.5-0.1,1.1-0.1,1.7
    c0.1-0.1,0.3-0.3,0.4-0.4c1.3-1.7,2.9-3.2,4.7-4.3c2.4-1.3,4.8-1.8,7.4-1c1.6,0.5,2.7,1.7,3.2,3.4c0.4,1.2,0.3,2.4,0,3.6
    c-0.5,3-1,5.9-1.6,8.9c-0.4,2.3-0.8,4.6-1.3,6.9c-0.2,1-0.2,1-1.2,1c-0.2,0-0.4,0-0.6,0c0,0-0.1,0-0.1-0.1c0.1-0.6,0.2-1.2,0.3-1.8
    c0.5-2.7,1-5.4,1.5-8.1c0.3-1.7,0.7-3.5,0.9-5.2c0.2-1.3,0.4-2.6,0.4-3.9c0-1.4-0.9-2.7-2.2-3.2c-0.9-0.4-1.9-0.4-2.9-0.3
    c-2.4,0.3-4.3,1.5-6,3.1c-1.2,1.2-2.4,2.5-3.3,3.9c-0.2,0.3-0.3,0.6-0.3,1c-0.3,1.6-0.6,3.2-0.8,4.8c-0.4,2.1-0.8,4.3-1.1,6.4
    c-0.2,1-0.4,2-0.5,3c0,0.3-0.2,0.4-0.5,0.4C218.6,34.6,218.2,34.6,217.6,34.6z"
              />
              <path
                fill="#0F161B"
                d="M145.9,25.1c0-3.6,0.9-6.7,2.8-9.3c2.1-2.9,4.8-4.7,8.4-5.1c1.9-0.3,3.8-0.2,5.5,0.5
    c0.8,0.4,1.6,0.9,2.4,1.3c0.3,0.1,0.3,0.4,0.1,0.6c-0.3,0.3-0.5,0.7-0.8,0.8c-0.3,0-0.6-0.3-0.9-0.5c-1.9-1.2-3.9-1.5-6.1-1.1
    c-4.7,0.8-7.4,3.7-8.9,8c-0.7,1.9-0.8,3.8-0.7,5.7c0.1,1.9,0.5,3.7,1.7,5.2c0.9,1.2,2.1,2,3.5,2.3c2.8,0.6,5.4-0.1,7.8-1.7
    c0.9-0.6,0.7-0.6,1.2,0.2c0.6,0.8,0.5,0.6-0.2,1.1c-1.5,1-3,1.7-4.7,2c-2.2,0.4-4.3,0.4-6.4-0.6c-2-0.9-3.2-2.5-4.1-4.4
    C146.1,28.2,145.9,26.5,145.9,25.1z"
              />
              <path
                fill="#0F161B"
                d="M235.8,56.9c0.1-0.8,0.3-1.7,0.4-2.5c0.7-3.8,1.3-7.6,2-11.4c0-0.3,0.2-0.4,0.5-0.4c0.4,0,0.9,0,1.5,0
    c-0.2,0.9-0.3,1.7-0.4,2.6c-0.7,3.7-1.3,7.4-2,11c-0.8,4.6-1.6,9.2-2.4,13.8c-0.4,2.5-0.9,5.1-1.3,7.5c-0.1,0.4-0.2,0.6-0.7,0.6
    c-0.3,0-0.6,0-0.9,0c0.2-1.6,0.3-3.1,0.5-4.7c-0.5,0.6-1,1.2-1.6,1.7c-1.1,1.1-2.2,2.2-3.7,2.8c-3.1,1.2-6,1.2-8.6-1
    c-1.3-1.1-2.1-2.5-2.5-4.2c-1.1-4.7-0.4-9.1,2-13.2c2-3.2,4.8-5.3,8.6-5.7c3-0.4,5.6,0.6,7.8,2.7c0.2,0.1,0.3,0.3,0.5,0.4
    C235.7,56.9,235.7,56.9,235.8,56.9z M229.8,55.3c-4,0-6.3,1.1-8.1,3.2c-3.3,3.9-4.1,8.4-3.2,13.3c0.3,1.5,0.9,2.8,2.1,3.9
    c1.8,1.5,4.8,1.7,7,0.6c2.1-1.1,3.7-2.7,5.1-4.6c0.4-0.5,0.8-1,0.8-1.6c0.7-3.6,1.3-7.3,2-11c0-0.2,0-0.5-0.2-0.7
    C233.4,56.5,231.3,55.3,229.8,55.3z"
              />
              <path
                fill="#0F161B"
                d="M259.7,73.4c-0.5,0.6-1,1.1-1.5,1.6c-1.2,1.2-2.6,2.4-4.3,3.1c-4.1,1.6-8.9,0.2-10.6-4.8
    c-0.7-2.1-0.7-4.2-0.5-6.3c0.2-2.2,0.8-4.3,1.7-6.2c1.5-2.9,3.6-5.1,6.7-6.3c1.8-0.7,3.6-0.9,5.5-0.6c2.2,0.3,3.9,1.4,5.5,2.9
    c0.1,0,0.1,0.1,0.3,0.2c0.2-0.8,0.4-1.4,0.5-2.1c0-0.2,0.2-0.6,0.3-0.6c0.4-0.1,0.8,0,1.2,0c0,0,0.1,0.3,0.1,0.5
    c-0.3,1.7-0.6,3.4-0.9,5.1c-0.6,3.1-1.1,6.3-1.7,9.4c-0.3,1.6-0.5,3.1-0.8,4.7c0,0.4-0.1,0.7,0,1.1c0.1,0.9,0.6,1.3,1.5,1.5
    c0.2,0,0.6,0.2,0.6,0.3c0,0.4,0,0.8-0.1,1.2c0,0-0.2,0.1-0.4,0.1c-2.3,0-3.8-1.7-3.3-4C259.6,73.9,259.7,73.7,259.7,73.4z
    M244.7,68.5c0,1.8,0.2,3.3,0.8,4.8c0.5,1.3,1.3,2.4,2.5,3c1.9,1,3.8,0.9,5.7,0.1c2.2-0.9,3.8-2.6,5.2-4.4c0.6-0.8,1.3-1.6,1.3-2.6
    c0-0.2,0-0.4,0.1-0.6c0.5-3.1,1.1-6.2,1.7-9.3c0.1-0.6,0-1-0.4-1.3c-2-2.1-4.5-3.1-7.5-2.7c-2.8,0.3-5,1.8-6.7,4.1
    C245.5,62.3,244.8,65.4,244.7,68.5z"
              />
              <path
                fill="#0F161B"
                d="M136.7,45.2c-0.1,0.5-0.1,1-0.2,1.5c0,0.1-0.2,0.2-0.3,0.2c-0.1,0-0.3,0-0.4,0c-5.9,0-11.8,0-17.7,0
    c-0.5,0-0.7,0.1-0.8,0.6c-0.8,4.3-1.5,8.6-2.3,12.9c0,0,0,0,0,0.1h17.1c-0.1,0.6-0.2,1.1-0.3,1.6c0,0.1-0.1,0.2-0.3,0.2
    c-0.1,0-0.3,0-0.4,0c-5.3,0-10.5,0-15.8,0h-0.7c-0.2,0.9-0.4,1.9-0.5,2.8c-0.8,4.2-1.5,8.4-2.2,12.5c0,0.3-0.2,0.5-0.5,0.5
    c-0.5,0-1,0-1.5,0c0.1-0.8,0.2-1.5,0.4-2.2c0.7-3.9,1.4-7.8,2.1-11.7c0.8-4.4,1.6-8.8,2.4-13.2c0.3-1.8,0.6-3.5,0.9-5.3
    c0-0.4,0.1-0.5,0.6-0.5c6.7,0,13.4,0,20.1,0C136.4,45.1,136.5,45.1,136.7,45.2z"
              />
              <path
                fill="#0F161B"
                d="M158.7,64.2c0,3.8-1.2,7.3-3.8,10.2c-2.9,3.1-6.5,4.7-10.8,4.3c-3.9-0.3-6.7-3.1-7.5-6.5
    c-1.2-4.7-0.4-9.1,2.4-13c1.9-2.7,4.6-4.4,7.8-5.1c2.3-0.4,4.5-0.4,6.7,0.6c2.4,1.2,3.9,3.1,4.6,5.6c0.4,1.3,0.4,2.7,0.7,3.9
    C158.8,64.1,158.8,64.1,158.7,64.2z M156.9,64.2c-0.2-1.2-0.3-2.4-0.6-3.6c-0.6-2.4-2-4.2-4.5-4.9c-3.3-0.9-6.4-0.1-9,2
    c-4.3,3.5-5.6,9.8-4,14.6c0.8,2.3,2.3,3.9,4.7,4.3c4.1,0.8,7.5-0.5,10.2-3.6C155.8,70.6,156.7,67.5,156.9,64.2z"
              />
              <path
                fill="#0F161B"
                d="M319.3,64.2c0,3.8-1.1,7.1-3.6,10c-2.9,3.3-6.5,4.8-10.9,4.4c-3.9-0.3-6.7-3.1-7.5-6.6
    c-1.1-4.7-0.4-9,2.4-13c2-2.7,4.6-4.4,7.9-5.1c2.2-0.4,4.5-0.4,6.6,0.6c2.4,1.2,3.9,3.1,4.6,5.5c0.4,1.3,0.4,2.7,0.7,4
    C319.4,64.1,319.4,64.2,319.3,64.2z M317.4,64.2c-0.1-0.9-0.1-1.8-0.3-2.6c-0.4-2.4-1.5-4.4-3.8-5.5c-1.8-0.9-3.8-0.9-5.7-0.4
    c-3.7,0.9-6.2,3.3-7.7,6.7c-1.3,2.9-1.6,5.9-0.9,8.9c0.4,2,1.3,3.6,3.1,4.7c2,1.2,4.1,1.2,6.3,0.8c2.7-0.6,4.9-2.2,6.5-4.5
    C316.6,69.8,317.4,67.1,317.4,64.2z"
              />
              <path
                fill="#0F161B"
                d="M179.5,78c0.2-1.8,0.4-3.6,0.7-5.4c0,0,0,0-0.1,0c-0.4,0.4-0.8,0.9-1.2,1.3c-1.1,1.2-2.4,2.4-3.8,3.2
    c-1.9,1.2-3.9,1.6-6.1,1.4c-1.1-0.1-2.1-0.4-2.9-1c-1.5-1.1-2.1-2.7-2.1-4.5c0-1.3,0.2-2.6,0.4-3.8c0.6-3.5,1.2-6.9,1.9-10.3
    c0.3-1.4,0.5-2.8,0.8-4.3c0-0.1,0.3-0.4,0.4-0.4c0.4,0,0.8,0,1.2,0c0.3,0,0.4,0.1,0.4,0.4c-0.3,1.7-0.6,3.4-0.9,5.1
    c-0.5,2.9-1.1,5.9-1.6,8.8c-0.3,1.4-0.5,2.9-0.6,4.3c-0.1,1.3,0.3,2.4,1.3,3.2c0.6,0.5,1.4,0.7,2.2,0.8c2.4,0.2,4.5-0.6,6.3-2
    c1.9-1.4,3.4-3.2,4.7-5.1c0.3-0.4,0.3-1,0.4-1.5c0.8-4.3,1.5-8.6,2.3-12.9c0.2-1.2,0.2-1.2,1.5-1.2c0.7,0,0.7,0,0.6,0.6
    c-0.4,2.2-0.8,4.4-1.2,6.6c-0.5,3-1,6-1.6,9c-0.4,2.1-0.8,4.2-1.1,6.3c0,0,0,0.1,0,0.1C181.1,78.2,180.8,78.3,179.5,78z"
              />
              <path
                fill="#0F161B"
                d="M328.8,59.9c0.6-0.7,1-1.2,1.5-1.7c1.7-1.8,3.6-3.3,6-4c1.7-0.5,3.5-0.6,5.1,0c1.9,0.6,3.1,2.1,3.4,4.2
    c0.3,1.7-0.2,3.4-0.4,5.1c-0.6,3.4-1.2,6.8-1.8,10.2c-0.3,1.4-0.5,2.8-0.8,4.2c0,0.3-0.2,0.5-0.5,0.5c-0.4,0-0.9,0-1.5,0
    c0.2-1,0.3-1.9,0.5-2.8c0.6-3.5,1.2-7,1.9-10.5c0.3-1.5,0.5-3,0.7-4.5c0.2-1.2,0.1-2.4-0.6-3.5c-0.6-0.9-1.6-1.3-2.7-1.5
    c-1.9-0.3-3.6,0.2-5.3,1.2c-2.5,1.5-4.3,3.6-5.9,6c-0.3,0.4-0.3,1-0.4,1.6c-0.4,2.1-0.8,4.3-1.1,6.4c-0.4,2.4-0.9,4.8-1.3,7.1
    c0,0.4-0.2,0.4-0.6,0.4c-0.4,0-0.9,0-1.5,0c0.2-1,0.3-1.8,0.4-2.7c0.5-3,1.1-6,1.6-9c0.5-2.7,0.9-5.3,1.4-8
    c0.2-1.2,0.4-2.4,0.7-3.7c0-0.4,0.2-0.4,0.5-0.4c1.5,0,1.2-0.1,1,1.2C329.2,56.9,329,58.3,328.8,59.9z"
              />
              <path
                fill="#0F161B"
                d="M195,54.3c-0.2,1.9-0.4,3.6-0.7,5.4c0,0,0,0,0.1,0c0.1-0.1,0.2-0.2,0.3-0.4c1.3-1.7,2.9-3.2,4.7-4.3
    c2.4-1.3,4.9-1.8,7.5-1.1c1.7,0.5,2.8,1.7,3.3,3.4c0.4,1.2,0.3,2.4,0.1,3.5c-0.7,4-1.4,8-2.1,12.1c-0.3,1.5-0.5,3-0.8,4.5
    c0,0.4-0.2,0.5-0.5,0.5c-0.4,0-0.9,0-1.4,0c0.2-0.9,0.3-1.8,0.4-2.6c0.6-3.3,1.2-6.5,1.8-9.8c0.3-1.7,0.6-3.3,0.8-5
    c0.2-1.4,0.2-2.7-0.7-3.9c-0.7-0.9-1.6-1.2-2.6-1.3c-1.9-0.3-3.5,0.2-5.2,1.1c-2.6,1.5-4.4,3.7-6,6.1c-0.1,0.2-0.2,0.4-0.2,0.7
    c-0.6,3.5-1.2,7.1-1.9,10.6c-0.2,1.3-0.5,2.5-0.7,3.8c0,0.4-0.3,0.5-0.7,0.5c-0.4,0-0.8,0-1.4,0c0.1-0.9,0.3-1.7,0.4-2.5
    c0.5-3.1,1.1-6.1,1.6-9.2c0.5-3,1.1-6,1.6-9c0.2-0.9,0.3-1.8,0.4-2.7c0-0.4,0.3-0.6,0.7-0.5C194.3,54.3,194.6,54.3,195,54.3z"
              />
              <path
                fill="#0F161B"
                d="M274.6,55.9h-2.7c-0.4,0-0.8,0-1.1,0s-0.5-0.2-0.4-0.5c0-0.2,0.1-0.4,0.1-0.6c0-0.4,0.2-0.5,0.6-0.5
    c1.2,0,2.3,0,3.4,0c0.4,0,0.6-0.1,0.6-0.5c0.4-2.3,0.8-4.6,1.2-6.8c0-0.3,0.2-0.5,0.5-0.4c0.3,0,0.7,0,1,0c0.4,0,0.5,0.1,0.4,0.5
    c-0.4,2.3-0.8,4.6-1.2,6.9c0,0.1,0,0.2,0,0.4h0.6c1.9,0,3.8,0,5.8,0c0.7,0,0.8,0.1,0.6,0.7c-0.2,0.9-0.2,0.9-1.2,0.9
    c-1.9,0-3.7,0-5.5,0c-0.4,0-0.5,0.1-0.6,0.5c-0.6,3.4-1.2,6.9-1.8,10.3c-0.4,2.1-0.8,4.2-1.1,6.3c-0.1,0.6-0.1,1.3,0,2
    c0.1,1.3,1.2,2.1,2.5,2.2c1.3,0.1,2.6-0.3,3.7-0.9c0.4-0.2,0.7-0.2,0.8,0.3c0.4,1,0.5,0.9-0.4,1.3c-1.8,0.8-3.6,1.2-5.5,0.8
    c-1.7-0.4-3-2-3.1-3.7c-0.1-1.6,0.3-3.1,0.5-4.6c0.4-2.2,0.8-4.4,1.2-6.6c0.4-2.4,0.8-4.8,1.3-7.2
    C274.6,56.2,274.6,56.1,274.6,55.9z"
              />
              <path
                fill="#0F161B"
                d="M286,78.1c1.4-8,2.8-15.9,4.2-23.8h1.9c-0.2,1-0.3,1.9-0.5,2.9c-0.8,4.3-1.5,8.5-2.3,12.8
    c-0.4,2.5-0.9,5.1-1.3,7.6c-0.1,0.4-0.2,0.6-0.7,0.5C287,78.1,286.6,78.1,286,78.1z"
              />
              <path
                fill="#0F161B"
                d="M291.6,46.9c0.1-0.8,0.3-1.6,0.4-2.4c0.1-0.4,0.1-1,0.3-1.1c0.5-0.1,1.2,0,1.8,0c-0.2,0.8-0.3,1.7-0.5,2.5
    c-0.2,1-0.2,1-1.2,1L291.6,46.9L291.6,46.9z"
              />
            </g>
          </svg>
        </PrintLogo>
        <H1>Overhead Policy</H1>
      </PrintHeader>
      <P>
        As of 1 September 2019, the Ocean Data Foundation does not pay for
        overhead or indirect costs for contractors or third parties that receive
        funds from the Foundation.
      </P>
    </Container>
  </PrintWrapper>
)

export default OverheadPolicy
