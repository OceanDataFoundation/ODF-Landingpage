import React from 'react'
// import { graphql } from 'gatsby'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

const Hero = ({ data }) => {
  // const { title, content } = data.contentfulHero

  return (
    <HeroWrapper>
      {/* {title}
      <div
        dangerouslySetInnerHTML={{
          __html: content.childMarkdownRemark.html,
        }}
      /> */}
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  height: calc(100vh - 66px);
  display: flex;
  background-color: ${colorNeutral.NEUTRAL_TINT_0};

  ${mediaQuery.BREAKPOINT_1`
    height: calc(100vh - 94px);
  `};

  ${mediaQuery.BREAKPOINT_2`
    height: calc(100vh - 121px);
  `};
`

export default Hero

// export const heroQuery = graphql`
//   {
//     contentfulHero(
//       filter: { title: { eq: "Liberating data for one healthy ocean" } }
//     ) {
//       title
//       content {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `
