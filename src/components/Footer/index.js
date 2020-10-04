import React from "react"
import { Box, Text } from "grommet"
import { useStaticQuery, Link } from "gatsby"
import { getCopyrightFromData, getFooterLinksFromData } from "./utils"

const Footer = () => {

    const data = useStaticQuery(
      graphql`
        query FooterQuery {
          site {
            siteMetadata {
              footer {
                links {
                  path
                  label
                }
                copyright
              }
            }
          }
        }
      `
    )

  const links = getFooterLinksFromData(data);
  const copyright = getCopyrightFromData(data);

  console.log(links);
  console.log(copyright);

  return (
    <Box
      // fill="horizontal"
      flex='shrink'
      justify="between"
      direction="row"
      align="center"
      margin={{ horizontal: 'small', vertical: 'xsmall' }}
    >
      <Box
        gap='small'
        direction='row'
      >
        {
          links.map(item => (
            <Text
              size='10px'
              key={item.path}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={item.path}
                replace
              >
                {item.label}
              </Link>
            </Text>
          ))
        }
      </Box>
      <Text size='10px'><i>{copyright}</i></Text>
    </Box>
  )
}

export default Footer
