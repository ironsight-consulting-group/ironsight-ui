import React, { useState, useContext } from "react"
import { Box, Heading, ResponsiveContext, Text, WorldMap } from "grommet"
import {
	CONTINENT_DESCRIPTION_MAP,
	ACTIVE_CONTINENT_NAMES,
	DISABLED_CONTINENT_NAMES,
	DEFAULT_COLOR,
} from "./constants"
import { getActiveContinentBody, getDisabledContinentBody } from "./utils"

const Map = () => {

	const size = useContext(ResponsiveContext)
	const [hovered, setHovered] = useState('North America');

	return (
		<Box
			fill='horizontal'
		>
			<Heading size='small'>
				We are in the business of creating actionable solutions for patients worldwide
			</Heading>
			<Box
				margin={{ horizontal: size !== 'small' ? 'xlarge' : 'none' }}
			>
				<WorldMap
					fill='horizontal'
					color={DEFAULT_COLOR}
					continents={ACTIVE_CONTINENT_NAMES.map(name => ({
						name,
						...getActiveContinentBody(name, hovered, setHovered)
					})).concat(DISABLED_CONTINENT_NAMES.map(name => ({
						name,
						...getDisabledContinentBody()
					})))}
					onSelectPlace={(lat, lon) => {}}
					selectColor="brand"
				/>
				<Box margin={{ horizontal: size !== 'small' ? 'large' : 'none', top: 'medium' }}>
					<Text weight='bold'>{CONTINENT_DESCRIPTION_MAP[hovered]}</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default Map
