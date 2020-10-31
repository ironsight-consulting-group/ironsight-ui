import React, { useContext, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, ResponsiveContext } from "grommet"

import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"
import { getImageFromData, getLinksFromData, getMenusFromData } from "./utils"

const Header = () => {
  const size = useContext(ResponsiveContext)
  const data = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            links {
              label
              path
              subPaths {
                label
                path
                live
              }
            }
          }
        }
        file(relativePath: { eq: "primary_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const getLinks = useCallback(() => getLinksFromData(data), [data])
  const getImage = useCallback(() => getImageFromData(data), [data])
  const getMenus = useCallback(() => getMenusFromData(data), [data])

  return (
    <Box
      fill="horizontal"
      flex="shrink"
      justify='between'
      background="white"
      direction="row"
      align="center"
      pad={{ vertical: 'medium' }}
      style={{ position: 'fixed', zIndex: 100 }}
    >
      {size !== "small" ? (
        <DesktopHeader
          logo={getImage()}
          menus={getMenus()}
          links={getLinks()}
        />
      ) : (
        <MobileHeader logo={getImage()} menus={getMenus()} links={getLinks()} />
      )}
    </Box>
  )
}

export default Header
