import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Box, Menu } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

import { getMobileLinks } from "./utils"
import Img from "gatsby-image"

const MobileHeader = ({ links, logo }) => {

  return (
    <Fragment>
      <Box
        margin={{ left: 'large' }}
      >
      <Menu
        size='large'
        icon={
          <MenuIcon
            size='medium'
            color='black'
          />
        }
        items={getMobileLinks(links)}
      />
      </Box>
      <a href="/">
        <Box
          width='200px'
          margin={{ right: 'large' }}
        >
          <Img
            fluid={logo}
            alt="Ironsight Logo"
          />
        </Box>
      </a>
    </Fragment>
  )
};

MobileHeader.propTypes = {
  links: PropTypes.array,
};

MobileHeader.defaultProps = {
  links: [],
};

export default MobileHeader;
