import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box } from "grommet"
import Img from "gatsby-image"
import PageWrapper from "../components/PageWrapper"
import { Map } from "../components"
import { Contact } from "grommet-icons"
import MobileBasicLink from "../components/MobileBasicLink"

const About = () => {

  const data = useStaticQuery(
    graphql`
      query AboutQuery {
        pane_one: file(relativePath: { eq: "core_of_business.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pane_two: file(relativePath: { eq: "solutions_table.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pane_three: file(relativePath: { eq: "clinical_trial_graph.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pane_four: file(relativePath: { eq: "commercialization_support_graph.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pane_five: file(relativePath: { eq: "competitive_insights_graph.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <PageWrapper
      title='About'
      margin={{ horizontal: 'large', bottom: 'medium' }}
    >
      <Box
        fill='horizontal'
        gap='medium'
      >
        <Map />
        <Img fluid={data.pane_one.childImageSharp.fluid} alt="The core of our business"  />
        <Img fluid={data.pane_two.childImageSharp.fluid} alt="Solutions table"  />
        <Img fluid={data.pane_three.childImageSharp.fluid} alt="Clinical trial recruitment" />
        <Img fluid={data.pane_four.childImageSharp.fluid} alt="Commercialization support" />
        <Img fluid={data.pane_five.childImageSharp.fluid} alt="Competitive insights" />
      </Box>
      <Box
        align='center'
        margin={{ top: 'large' }}
      >
      <MobileBasicLink
        item={{
          path: '/contact',
          label: 'Contact us to learn more',
          icon: <Contact color='blue-3' />
        }}
      />
      </Box>
    </PageWrapper>
  )
}

export default About
