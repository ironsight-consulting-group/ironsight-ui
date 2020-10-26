import React from "react"
import PropTypes from "prop-types"
import { Box, Text } from "grommet"
import { Link } from "gatsby"

import { isActive } from "./utils"

const Anchor = ({ item, disabled, ...rest }) => (
  <Box {...rest}>
    <Text key={item.path}>
      <Link
        style={{
          textDecoration: "none",
          color: !disabled ? "black" : "#CCC",
          pointerEvents: !disabled ? "auto" : "none",
          pointer: !disabled ? "auto" : "default",
        }}
        to={item.path}
        getProps={isActive}
        partiallyActive
        replace
      >
        {item.label}
      </Link>
    </Text>
  </Box>
)

Anchor.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  disabled: PropTypes.bool
}

Anchor.defaultProps = {
  disabled: false
}

export default Anchor
