import React, { Fragment } from "react"
import { useStateContext } from "../../app/context"

const LayerProvider = ({ children }) => {

	const { app } = useStateContext();

	return (
		<Fragment>
			{children}
		</Fragment>
	)
}

export default LayerProvider
