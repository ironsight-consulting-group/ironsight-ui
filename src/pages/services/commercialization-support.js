import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Box } from "grommet"
import { Contact } from "grommet-icons"

import { MobileBasicLink, PageWrapper } from "../../components"

const CommercializationSupport = () => {
  const data = useStaticQuery(
    graphql`
      query CommercializationSupportQuery {
        image: file(
          relativePath: { eq: "commercialization_support_graph.png" }
        ) {
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
      title="Commercialization Support"
      margin={{ horizontal: "large", bottom: "medium" }}
    >
      <Box fill="horizontal" gap="medium">
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="Providing insightful, flexible solutions"
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

export default CommercializationSupport
