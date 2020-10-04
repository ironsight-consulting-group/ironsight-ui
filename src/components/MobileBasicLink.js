import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Button, Text } from "grommet"

const BasicLink = ({ item, ...rest }) => (
	<Box
		direction='row'
		gap='small'
	>
		<Link
			to={item.path}
			replace
		>
			<Button
				primary
				key={item.path}
				label={item.label}
				icon={item.icon}
				{...rest}
			/>
		</Link>
	</Box>
)

BasicLink.propTypes = {
	item: PropTypes.shape({
		path: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		icon: PropTypes.node,
	}).isRequired,
}

export default BasicLink