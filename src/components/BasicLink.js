import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Text } from "grommet"

const BasicLink = ({ item, ...rest }) => {

	const [hovered, setHovered] = useState(false);
	return (
		<Box
			direction='row'
			gap='small'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{item.icon}
			<Text
				key={item.path}
				{...rest}
			>
				<Link
					style={{
						textDecoration: hovered ? 'underline' : 'none',
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
}

BasicLink.propTypes = {
	item: PropTypes.shape({
		path: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		icon: PropTypes.node,
	}).isRequired,
}

export default BasicLink
