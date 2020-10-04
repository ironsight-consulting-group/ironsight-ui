import React from "react"
import PropTypes from "prop-types";
import { Box, DropButton } from "grommet"

import { Menu as MenuIcon } from "grommet-icons"
import { getMobileLinks } from "./utils"

const MobileMenu = ({ links, menus,...rest }) => {
  return (
    <DropButton
      plain
      icon={
        <MenuIcon
          size='medium'
          color='black'
        />
      }
      dropAlign={{
        left: 'left',
        top: 'bottom'
      }}
      dropContent={
        <Box>
          {getMobileLinks(links, menus)}
        </Box>
      }
      dropProps={{
        responsive: true,
      }}
      {...rest}
    />
  )
};

MobileMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  menus: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default MobileMenu
