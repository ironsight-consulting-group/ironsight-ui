import React, { useState } from "react"
import { Box, Text } from "grommet"

import types from '../state/types';
import { useStateContext } from "../app/context"

const LayerLauncher = ({ item, ...rest }) => {

	const [hovered, setHovered] = useState(false);
	const [_, dispatch] = useStateContext()

	return (
		<Box
			direction='row'
			gap='small'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={() => dispatch({ type: types.SET_LAYER, data: item.layer })}
		>
			<Text
				key={item.label}
				style={{
					textDecoration: hovered ? 'underline' : 'none',
					color: "black",
				}}
				{...rest}
			>
				{item.label}
			</Text>
		</Box>
	)
}

export default LayerLauncher
