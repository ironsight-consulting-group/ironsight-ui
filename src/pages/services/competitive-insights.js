import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box } from "grommet"
import { Contact } from "grommet-icons"
import Img from "gatsby-image"

import { MobileBasicLink, PageWrapper } from "../../components"

const CompetitiveInsights = () => {
  const data = useStaticQuery(
    graphql`
      query CompetitiveInsightsQuery {
        image: file(relativePath: { eq: "competitive_insights_graph.png" }) {
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
      title="Competitive Insights"
      margin={{ horizontal: "large", bottom: "medium" }}
    >
      <Box fill="horizontal" gap="medium">
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="Stay up to date with current trends"
        />
      </Box>
      <Box align="center" margin={{ top: "large" }}>
        <MobileBasicLink
          item={{
            path: "/contact",
            label: "Contact us to learn more",
            icon: <Contact color="blue-3" />,
          }}
        />
      </Box>
    </PageWrapper>
  )
}

export default CompetitiveInsights
