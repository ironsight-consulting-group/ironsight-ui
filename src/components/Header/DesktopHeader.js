import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { navigate } from "gatsby"
import { Box, Button } from "grommet"

import { getDesktopLinks } from "./utils"

const DesktopHeader = ({ links, logo, menus }) => {
  return (
    <Fragment>
      <Button plain onClick={() => navigate("/")}>
        <Box width="200px" margin={{ left: "medium" }}>
          <Img fluid={logo} alt="Ironsight Logo" />
        </Box>
      </Button>
      <Box direction="row" gap="medium" margin={{ right: "large" }}>
        {getDesktopLinks(links, menus)}
      </Box>
    </Fragment>
  )
}

DesktopHeader.propTypes = {
  links: PropTypes.array,
  logo: PropTypes.object,
  menus: PropTypes.array,
}

DesktopHeader.defaultProps = {
  links: [],
  logo: {},
  menus: [],
}

export default DesktopHeader
