import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Box, Button } from "grommet"
import Img from "gatsby-image"
import { navigate } from "gatsby"

import MobileMenu from "./MobileMenu"

const MobileHeader = ({ links, logo, menus }) => (
  <Fragment>
    <Box margin={{ left: "large" }}>
      <MobileMenu links={links} menus={menus} />
    </Box>
    <Button plain onClick={() => navigate("/")}>
      <Box width="200px" margin={{ right: "large" }}>
        <Img fluid={logo} alt="Ironsight Logo" />
      </Box>
    </Button>
  </Fragment>
)

MobileHeader.propTypes = {
  links: PropTypes.array,
  logo: PropTypes.object,
  menus: PropTypes.array,
}

MobileHeader.defaultProps = {
  links: [],
  logo: {},
  menus: [],
}

export default MobileHeader
