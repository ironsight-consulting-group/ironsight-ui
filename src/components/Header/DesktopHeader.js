import React, { Fragment } from "react";
import { navigate } from "gatsby"
import { Box } from "grommet";

import { getDesktopLinks } from "./utils"

const DesktopHeader = ({ links }) => (
  <Fragment>
    <a href="#">
      <Box
        onClick={() => navigate('/')}
      >
        /* TODO: add desktop logo here */
        <div />
      </Box>
    </a>
    <Box
      direction='row'
      gap='medium'
    >
      {getDesktopLinks(links)}
    </Box>
  </Fragment>
)

export default DesktopHeader;
