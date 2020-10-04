import React, { useState } from "react"
import PropTypes from "prop-types";
import { Box, DropButton } from "grommet"

import { Menu as MenuIcon } from "grommet-icons"
import { getMobileLinks } from "./utils"

const MobileMenu = ({ links, menus,...rest }) => {
  const [open, setOpen] = useState(false);
  return (
    <DropButton
      plain
      open={open}
      onClick={() => setOpen(!open)}
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
          {
            getMobileLinks(
              links,
              menus,
              () => setOpen(false)
            )
          }
        </Box>
      }
      dropProps={{
        responsive: true,
        onClickOutside: () => setOpen(false),
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
