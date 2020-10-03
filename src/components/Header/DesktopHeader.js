import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import Img from "gatsby-image"
import { Box } from "grommet";

import { getDesktopLinks } from "./utils"

const DesktopHeader = ({ links, logo }) => {

  return (
    <Fragment>
      <a href="/">
        <Box
          width='200px'
          margin={{ left: 'medium' }}
        >
          <Img
            fluid={logo}
            alt="Ironsight Logo"
          />
        </Box>
      </a>
      <Box
        direction='row'
        gap='medium'
        margin={{ right: 'large' }}
      >
        {getDesktopLinks(links)}
      </Box>
    </Fragment>
  )
}

DesktopHeader.propTypes = {
  links: PropTypes.array,
};

DesktopHeader.defaultProps = {
  links: [],
};

export default DesktopHeader;
