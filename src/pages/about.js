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
        pane_one: file(relativePath: { eq: "core_of_our_business.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pane_two: file(relativePath: { eq: "comprehensive_solutions.png" }) {
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
        <Img fluid={data.pane_two.childImageSharp.fluid} alt="Comprehensive solutions"  />
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
