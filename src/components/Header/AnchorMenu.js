import React, { useContext, useState } from "react"
import PropTypes from "prop-types";
import { Box, DropButton, ResponsiveContext } from "grommet"

import Anchor from "./Anchor"
import { menuIsActive } from "./utils"

const AnchorMenu = ({ items, label, ...rest }) => {
  const size = useContext(ResponsiveContext);
  const [open, setOpen] = useState(false);
  return (
    <Box {...rest}>
      <DropButton
        pad='large'
        plain
        color='black'
        label={label}
        open={open}
        style={menuIsActive(label)}
        onClick={() => setOpen(!open)}
        dropAlign={(() => (
          size === 'small' ? {
            left: 'right'
          } : {
            top: 'bottom',
            left: "left"
          }
        ))()}
        dropContent={
          <Box>
            {
              items.map(item => (
                <Anchor
                  key={item.label}
                  item={item}
                  onClick={() => setOpen(false)}
                  pad={{
                    horizontal: 'medium',
                    vertical: 'small',
                  }}
                />
              ))
            }
          </Box>
        }
        dropProps={{
          responsive: true,
          onClickOutside: () => setOpen(false),
        }}
      />
    </Box>
  )
};

AnchorMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  label: PropTypes.string.isRequired,
};

export default AnchorMenu
