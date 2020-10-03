import React, { Fragment } from "react";
import { navigate } from "gatsby"
import { Box, Menu } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

import { getMobileLinks } from "./utils"

const MobileHeader = ({ links }) => {

  return (
    <Fragment>
      <Box margin={{ left: 'large' }}>
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
      <Box onClick={() => navigate('/')}>
        /* TODO: add mobile logo here */
        <div/>
      </Box>
    </Fragment>
  )
}

export default MobileHeader;
