import React, { useState } from "react"
import { WorldMap } from "grommet"
import { CONTINENT_NAMES, DEFAULT_COLOR } from "./constants"
import { getContinentBody } from "./utils"

const Map = () => {
	const [hovered, setHovered] = useState('');

	return (
		<WorldMap
			fill='horizontal'
			color={DEFAULT_COLOR}
			continents={CONTINENT_NAMES.map(name => ({
				name,
				...getContinentBody(name, hovered, setHovered)
			}))}
			onSelectPlace={(lat, lon) => {}}
			selectColor="brand"
		/>
	)
}

export default Map
