import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Accordion from '../components/accordion/Accordion'
import Blockquote from '../components/blockquote/Blockquote'
import { HightlightedBlockquote } from '../components/blockquote/Blockquote'
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line from '../components/line/Line'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import Statement from '../components/statement/Statement'
import { StatementContent, StatementImage } from '../components/statement/Statement'
import { TextBlock } from '../components/text-block/TextBlock'
import { H1, H3 } from '../components/typography/heading/Heading'
import { mediaQuery } from '../utils/mixins/mixMediaQuery'
import { fontSize } from '../utils/tokens/tokenFontSize'

// Components













// Mixins



const CentrePage = ({ data }) => {
  const PersonList = data.allContentfulPersonLists.edges
  const quotePosts = data.allContentfulQuote.edges
  const textBlockList = data.contentfulTextBlockList.textBlocks;

  return (
    <Layout>
      <SEO title="The Ocean Data Foundation team" />

      <FullWidthContainer offset="true">

        <Header>
          <H1 size="larger">{data.contentfulPage.title}</H1>
          <Line />
        </Header>

        <CustomStatement
          fluid
          image={data.statementOne.image.fluid}
          reverse={data.statementOne.reverseOrder}>
          <H3>{data.statementOne.title}</H3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.statementOne.content.childMarkdownRemark.html,
            }}
          />
        </CustomStatement>

        <CustomStatement
          fluid
          image={data.statementTwo.image.fluid}
          reverse={data.statementTwo.reverseOrder}>
          <H3>{data.statementTwo.title}</H3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.statementTwo.content.childMarkdownRemark.html,
            }}
          />
        </CustomStatement>

        <QuoteContainer>
          {quotePosts.map(({ node: post }) => (
            <Blockquote key={post.id} highlightedQuote={post.highlightedQuote} />
          ))}
        </QuoteContainer>

        <CustomContainer fluid>
          {textBlockList.map(textblock => ( <TextBlock key={textblock.id} textblock={textblock}/> ))}
        </CustomContainer>

        <TeamContainer>
          {PersonList.map(({ node: personLists }) => (
            <div key={personLists.id}>
            {personLists.personLists.map(team => (
                <Accordion key={team.id} title={team.title}>
                  <Container fluid col="3">
                  {team.persons && team.persons.map(person => {
                    console.log(person);
                    return (
                      <div key={person.id}>
                        {person.portrait && <TeamMemberImage
                          fluid={person.portrait.fluid}
                          />}
                        <Name>{person.fullName}</Name>
                        <p>{person.role}</p>
                        {person.bio && person.bio.bio && <p>{person.bio.bio}</p>}
                      </div>
                    )})
                    }
                  </Container>

                </Accordion>
            ))}
            </div>
          ))}
        </TeamContainer>

      </FullWidthContainer>
    </Layout>
  )
}

export default CentrePage

export const pageQuery = graphql`
  query AboutPageQuery {
  allContentfulPersonLists(filter: {contentful_id: {eq: "5bM1DQx9rwgo6VcMJxkWn"}}) {
    edges {
      node {
        title
        id
        personLists {
          title
          id
          persons {
            fullName
            role
            id
            bio {bio}
            portrait {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
          }
        }
      }
    }
  }
  statementOne: contentfulStatement(contentful_id: {eq: "1i5XVfyCJM85bLmq0kGAOD"}) {
    id
    title
    content {
        childMarkdownRemark {
          html
        }
      }
    image {
      fluid(maxWidth: 700) {
        ...GatsbyContentfulFluid
      }
    }
    reverseOrder
  }
  statementTwo: contentfulStatement(contentful_id: {eq: "4rbhcZGkZXpzFdN4bWBf9d"}) {
    id
    title
    content {
        childMarkdownRemark {
          html
        }
      }
    image {
      fluid(maxWidth: 700) {
        ...GatsbyContentfulFluid
      }
    }
    reverseOrder
  }
  allContentfulQuote(
    filter: { contentful_id: { eq: "241q7ySP9319Q5HnwHIAaO" } }
  ) {
    edges {
      node {
        id
        title
        highlightedQuote {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
  contentfulTextBlockList(contentful_id: {eq: "1oFWwJ3edfZHr51VvyOgs1"}) {
    id
    title
    textBlocks {
      id
      heading
      bodyText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
  contentfulPage(contentful_id: {eq: "6Y54nuw3s7Nk1tNOAopLGd"}) {
    id
    title
  }
}
`

CentrePage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

const CustomContainer = styled(Container)`
  margin-bottom: 50px;

  ${mediaQuery.BREAKPOINT_3`
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 145px;
  `};
`;

const QuoteContainer = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 4rem;

  ${HightlightedBlockquote} {
    ${mediaQuery.BREAKPOINT_3`

      p {
        font-size:  ${fontSize.FONT_SIZE_4} !important;
        padding-bottom: 27px;
        :last-child {
          padding-bottom: 0;
        }
      }
  `};
  }

  ${mediaQuery.BREAKPOINT_3`
    ${mediaQuery.BREAKPOINT_3`
      margin-bottom: 100px;
      margin-top: 6rem;
    `};
  `};
`;

const TeamContainer = styled.div`
  ${mediaQuery.BREAKPOINT_3`
    margin-bottom: 100px;
  `};
`;

const CustomStatement = styled(Statement)`

  ${mediaQuery.BREAKPOINT_2`
      margin-bottom: 100px;
  `};

  ${StatementImage} {
    ${mediaQuery.BREAKPOINT_3`
        grid-column: ${props => (props.reverse ? `7 / 13` : ` 1 / 6`)};
      `};
    }

  ${StatementContent} {
    ${mediaQuery.BREAKPOINT_3`
      grid-column: ${props => (props.reverse ? `1 / 6` : `8 / 13`)};
    `};
  }
`;

const Name = styled.h6`
  font-weight: bold;
  margin: 0;
`

const TeamMemberImage = styled(Img)`
  width: 100%;
  height: 320px;
  margin-bottom: 20px;
  margin-top: 10px;

  img {
    object-fit: scale-down;

    ${mediaQuery.BREAKPOINT_3`
      object-fit: cover;
    `};
  }
`