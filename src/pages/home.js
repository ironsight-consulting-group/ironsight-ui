import React, { useContext } from "react"
import { Heading, Box, Text, ResponsiveContext } from "grommet"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Analytics, Article, Calendar } from "grommet-icons"

import { BasicLink, MobileBasicLink } from "../components"
import PageWrapper from "../components/PageWrapper"

const EXPLORE_LINKS = [
  {
    path: "/about",
    label: "Learn about our services",
    icon: <Article color="blue-3" />,
  },
  {
    path: "/contact",
    label: "Schedule a meeting",
    icon: <Calendar color="blue-3" />,
  },
  {
    path: "/about",
    label: "Explore our research",
    icon: <Analytics color="blue-3" />,
  },
]

const Home = () => {
  const size = useContext(ResponsiveContext)
  const data = useStaticQuery(
    graphql`
      query HomeQuery {
        file(relativePath: { eq: "home_backdrop.jpg" }) {
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
    <PageWrapper title="Home">
      <Box
        direction={size === "small" ? "column" : "row"}
        flex="grow"
        gap="large"
        justify="center"
        align="center"
      >
        <Box
          margin={{ bottom: "large" }}
          align={size === "small" ? "center" : "start"}
        >
          <Heading margin={{ top: "none", bottom: "small" }}>
            Experts where you need them
          </Heading>
          <Box
            // width='medium'
            margin={{ horizontal: "xsmall" }}
          >
            <Text margin="none">
              Changing the way we think about pharmaceuticals, one byte at a
              time.
            </Text>
          </Box>
        </Box>
        <Box
          width={size === "small" ? "400px" : "500px"}
          margin={{ left: "small" }}
        >
          <Img fluid={data.file.childImageSharp.fluid} alt="Home Backdrop" />
        </Box>
      </Box>
      {/*<Box*/}
      {/*direction={size === 'small' ? 'column' : 'row'}*/}
      {/*gap={size === 'small' ? 'large' : 'xlarge'}*/}
      {/*align={size === 'small' ? 'center' : 'start'}*/}
      {/*margin={size === 'small' ? 'medium' : 'none'}*/}
      {/*>*/}
      {/*{*/}
      {/*EXPLORE_LINKS.map(item => (*/}
      {/*size === 'small' ? (*/}
      {/*<MobileBasicLink key={item.label} item={item} />*/}
      {/*) : (*/}
      {/*<BasicLink key={item.label} item={item}/>*/}
      {/*)*/}
      {/*))*/}
      {/*}*/}
      {/*</Box>*/}
    </PageWrapper>
  )
}

export default Home
