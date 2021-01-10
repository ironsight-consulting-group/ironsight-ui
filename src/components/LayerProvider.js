import React, { Fragment } from "react"
import { useStateContext } from "../app/context"
import { TermsAndConditions } from "../layers"

const LayerProvider = ({ children }) => {

	const [{ app: { layer } }] = useStateContext();

	return (
		<Fragment>
			{
				layer === 'TERMS_AND_CONDITIONS' && <TermsAndConditions />
			}
			{children}
		</Fragment>
	)
}

export default LayerProvider
