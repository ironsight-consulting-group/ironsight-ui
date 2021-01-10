import React from "react"
import { Box, Layer, Markdown } from "grommet"

import types from '../state/types';
import { useStateContext } from "../app/context"

const CONTENT = `
## Cookie Policy

We do not use cookies 🍪.
`

const CookiePolicy = () => {

	const [_, dispatch] = useStateContext();

	return (
		<Layer onClickOutside={() => dispatch({ type: types.CLEAR_LAYER })}>
			<Box
				overflow='scroll'
				pad='medium'
			>
				<Markdown>{CONTENT}</Markdown>
			</Box>
		</Layer>
	)
}

export default CookiePolicy