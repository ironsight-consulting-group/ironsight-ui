import React from "react"
import { Box, Text } from "grommet"
import { useStaticQuery } from "gatsby"

import { getCopyrightFromData, getFooterLinksFromData } from "./utils"
import BasicLink from "../BasicLink"

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

  return (
    <Box
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
            <BasicLink
              key={item.label}
              item={item}
              size='10px'
            />
          ))
        }
      </Box>
      <Text size='10px'><i>{copyright}</i></Text>
    </Box>
  )
}

export default Footer
