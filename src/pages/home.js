import React, { useContext } from "react"
import { Heading, Box, Text, ResponsiveContext } from "grommet"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';
import { BasicLink, MobileBasicLink } from "../components"
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

  const size = useContext(ResponsiveContext)
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
        direction={size === 'small' ? 'column' : 'row'}
        gap='large'
        justify='center'
        align='center'
      >
        <Box
          margin={{ bottom: 'large' }}
          align={size === 'small' ? 'center' : 'start'}
        >
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
          width={size === 'small' ? '450px' : '600px'}
          margin={{ left: 'medium' }}
        >
          <Img fluid={data.file.childImageSharp.fluid} alt="Home Backdrop"  />
        </Box>
      </Box>
      <Box
        direction={size === 'small' ? 'column' : 'row'}
        gap={size === 'small' ? 'large' : 'xlarge'}
        align={size === 'small' ? 'center' : 'start'}
        margin={size === 'small' ? 'medium' : 'none'}
      >
        {
          EXPLORE_LINKS.map(item => (
            size === 'small' ? (
              <MobileBasicLink key={item.label} item={item} />
            ) : (
              <BasicLink key={item.label} item={item}/>
            )
          ))
        }
      </Box>
    </Box>
  )
}

export default Home
