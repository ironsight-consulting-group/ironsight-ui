import React from "react"
import { Box, Text } from "grommet"
import { useStaticQuery } from "gatsby"

import { getCopyrightFromData, getFooterLinksFromData } from "./utils"
import LayerLauncher from "../LayerLauncher"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query FooterQuery {
        site {
          siteMetadata {
            footer {
              links {
                layer
                label
              }
              copyright
            }
          }
        }
      }
    `
  )

  const links = getFooterLinksFromData(data)
  const copyright = getCopyrightFromData(data)

  return (
    <Box
      fill="horizontal"
      flex="shrink"
      justify="between"
      direction="row"
      align="center"
      pad={{ horizontal: "small", vertical: "xsmall" }}
    >
      <Box gap="small" direction="row">
        {links.map(item => (
          <LayerLauncher key={item.label} item={item} size="10px" />
        ))}
      </Box>
      <Text size="10px">
        <i>{copyright}</i>
      </Text>
    </Box>
  )
}

export default Footer
