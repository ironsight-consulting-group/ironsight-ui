import React, { Fragment, useContext, useState } from "react"
import PropTypes from "prop-types"
import { Box, DropButton, ResponsiveContext, Text } from "grommet"

import noop from "lodash/noop"
import compose from "lodash/fp/compose"
import filter from "lodash/fp/filter"
import map from "lodash/fp/map"

import Anchor from "./Anchor"
import { menuIsActive } from "./utils"

const getMenuItems = (links, onMenuItemClick, setOpen) => {
  const topItems = compose(
    items => [<Box key="0">{items}</Box>],
    items =>
      items.map((item, index) => (
        <Anchor
          hoverIndicator={true}
          key={item.label}
          item={item}
          onClick={() => {
            setOpen(false)
            onMenuItemClick()
          }}
          pad={{
            horizontal: "medium",
            vertical: "small",
          }}
        />
      )),
    filter(item => item.live)
  )(links)
  const bottomItems = compose(
    items => [
      <Fragment key="1">
        {!!items.length && (
          <Box
            border={{
              color: "light-2",
              side: "top",
            }}
          >
            <Box margin={{ top: "small", horizontal: "small" }}>
              <Text
                size="xsmall"
                color="brand"
                margin="none"
                style={{ cursor: "default" }}
              >
                Coming soon!
              </Text>
            </Box>
            {items}
          </Box>
        )}
      </Fragment>,
    ],
    map(item => (
      <Anchor
        key={item.label}
        item={item}
        disabled={true}
        pad={{
          horizontal: "medium",
          vertical: "small",
        }}
      />
    )),
    filter(item => !item.live)
  )(links)
  return topItems.concat(bottomItems)
}

const AnchorMenu = ({ items, label, onMenuItemClick, ...rest }) => {
  const size = useContext(ResponsiveContext)
  const [open, setOpen] = useState(false)
  return (
    <Box {...rest}>
      <DropButton
        plain
        color="black"
        label={label}
        open={open}
        style={menuIsActive(label)}
        onClick={() => setOpen(!open)}
        dropAlign={(() =>
          size === "small"
            ? {
                left: "right",
              }
            : {
                top: "bottom",
                left: "left",
              })()}
        dropContent={<Box>{getMenuItems(items, onMenuItemClick, setOpen)}</Box>}
        dropProps={{
          responsive: true,
          onClickOutside: () => setOpen(false),
        }}
      />
    </Box>
  )
}

AnchorMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  onMenuItemClick: PropTypes.func,
}

AnchorMenu.defaultProps = {
  onMenuItemClick: noop,
}

export default AnchorMenu
