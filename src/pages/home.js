import React from "react"
import { Heading, Box, Text } from "grommet"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';
import BasicLink from "../components/BasicLink"
import { Analytics, Article, Calendar } from "grommet-icons"

const EXPLORE_LINKS = [
  {
    path: '/',
    label: 'Learn about our services',
    icon: <Article color='bronze' />
  },
  {
    path: '/',
    label: 'Schedule a meeting',
    icon: <Calendar color='bronze' />
  },
  {
    path: '/',
    label: 'Explore our research',
    icon: <Analytics color='bronze' />
  },
]

const Home = () => {

  const data = useStaticQuery(
    graphql`
      query HomeQuery {
        file(relativePath: { eq: "sample_home_backdrop.jpg" }) {
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
    <Box
      fill={true}
      justify='center'
      align='center'
      gap='xlarge'
    >
      <Box
        direction='row'
        gap='large'
        justify='center'
        align='center'
      >
        <Box margin={{ bottom: 'large' }}>
          <Heading margin={{ top: 'none', bottom: 'small' }}>
            Automate your CI
          </Heading>
          <Box
            width='medium'
            margin={{ horizontal: 'xsmall' }}
          >
            <Text margin='none'>
              Changing pharmaceutical analysis, one byte at a time.
            </Text>
          </Box>
        </Box>
        <Box
          width='600px'
          margin={{ left: 'medium' }}
        >
          <Img fluid={data.file.childImageSharp.fluid} alt="Home Backdrop"  />
        </Box>
      </Box>
      <Box
        direction='row'
        gap='xlarge'
      >
        {
          EXPLORE_LINKS.map(item => (
            <BasicLink key={item.label} item={item}/>
          ))
        }
      </Box>
    </Box>
  )
}

export default Home
