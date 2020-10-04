import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Text } from "grommet"

const BasicLink = ({ item, ...rest }) => (
	<Box
		direction='row'
		gap='small'
	>
		{item.icon}
		<Text
			key={item.path}
			{...rest}
		>
			<Link
				style={{
					textDecoration: "none",
					color: "black",
				}}
				to={item.path}
				replace
			>
				{item.label}
			</Link>
		</Text>
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
