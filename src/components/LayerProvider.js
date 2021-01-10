import React, { Fragment } from "react"
import { useStateContext } from "../app/context"
import { TermsAndConditions, CookiePolicy } from "../layers"

const LayerProvider = ({ children }) => {

	const [{ app: { layer } }] = useStateContext();

	return (
		<Fragment>
			{
				layer === 'TERMS_AND_CONDITIONS' && <TermsAndConditions />
			}
			{
				layer === 'COOKIE_POLICY' && <CookiePolicy />
			}
			{children}
		</Fragment>
	)
}

export default LayerProvider
