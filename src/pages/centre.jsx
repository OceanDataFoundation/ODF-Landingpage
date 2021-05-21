import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Components
import Accordion from '../components/accordion/Accordion'
import { Container } from '../components/container/Container'
import { FullWidthContainer } from '../components/container/FullWidthContainer'
import { Header } from '../components/header/Header'
import Line from '../components/line/Line'
import SEO from '../components/seo/seo'
import Layout from '../components/site-layout/Layout'
import Statement from '../components/statement/Statement'
import { StatementContent, StatementImage } from '../components/statement/Statement'
import {TextBlock} from '../components/text-block/TextBlock'
import { H1, H2 } from '../components/typography/heading/Heading'
import P from '../components/typography/paragraph/Paragraph'
// Mixins
import { mediaQuery } from '../utils/mixins/mixMediaQuery'

const CentrePage = ({ data }) => {
  const PersonList = data.allContentfulPersonLists.edges
  const faqList = data.allContentfulFaqList.edges

  return (
    <Layout>
      <SEO title="The Ocean Data Foundation team" />

      <FullWidthContainer offset="true">

        <Header>
          <H1>{data.ourStory.title}</H1>
          <Line />
        </Header>

        <CustomStatement
          fluid
          image={data.ourStory.image.fluid}
          reverse={data.ourStory.reverseOrder}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.ourStory.content.childMarkdownRemark.html,
            }}
          />
        </CustomStatement>

        <TeamContainer>
          {PersonList.map(({ node: personLists }) => (
            <div key={personLists.id}>
            {personLists.personLists.map(team => (
                <Accordion key={team.id} title={team.title}>
                  <Container fluid col="3">
                  {team.persons && team.persons.map(person => {
                    return (
                      <div key={person.id}>
                        {person.portrait && <TeamMemberImage
                          fluid={person.portrait.fluid}
                          />}
                        <Name>{person.fullName}</Name>
                        <p>{person.role}</p>
                      </div>
                    )})
                    }
                  </Container>
                  {team.textBlocks &&<TextBlockContainer fluid>
                    {team.textBlocks.map(textblock => ( <TextBlock key={textblock.id} textblock={textblock}/> ))}
                  </TextBlockContainer>}

                </Accordion>
            ))}
            </div>
          ))}
        </TeamContainer>

        <Container fluid>
          <FaqContainer>
            <CustomH2>Faq</CustomH2>
            {faqList.map(({ node: faq}) => (
              <div key={faq.id}>
                {faq.questions.map(question => {
                  return (
                    <Faq key={question.id}>
                      <Question>{question.question.question}</Question>
                      <CustomP>{question.answer.answer}</CustomP>
                    </Faq>
                  )
                })}
              </div>
            ))}
          </FaqContainer>
        </Container>
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
            portrait {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
          }
          textBlocks {
            id
            bodyText {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
  ourStory: contentfulStatement(contentful_id: {eq: "1i5XVfyCJM85bLmq0kGAOD"}) {
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
  allContentfulFaqList {
    edges {
      node {
        id
        questions {
          id
          question {
            question
          }
          answer {
            answer
          }
        }
      }
    }
  }
  }
`

CentrePage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

const CustomP = styled(P)`
  font-weight: 300;
`;

const CustomH2 = styled(H2)`
  margin-bottom: 20px;

  ${mediaQuery.BREAKPOINT_3`
    margin-bottom: 40px;
  `};
`;

const Question = styled(P)`
  font-weight: bold;
  margin-bottom: 10px !important;
`;

const FaqContainer = styled.div`
  ${mediaQuery.BREAKPOINT_3`
    grid-column: 4 / 10;
  `};
`;

const TeamContainer = styled.div`
  ${mediaQuery.BREAKPOINT_3`
    margin-bottom: 100px;
  `};
`;

const Faq = styled.div`
  margin-bottom: 60px;

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

const TextBlockContainer = styled(Container)`
  > div{
    grid-column: 1 / 7;
  }
`;