import React, { useContext } from "react"
import { Box, ResponsiveContext } from "grommet"
import Seo from "./Seo"
import secondaryLogo from "../images/secondary_logo.png"

const PageWrapper = ({ children, title, margin, showBackground }) => {
	const size = useContext(ResponsiveContext);
	return (
		<Box
			flex={false}
			fill={true}
			background={(showBackground && size !== 'small') ? {
				position: 'right',
				opacity: 'weak',
				repeat: "no-repeat",
				size: "contain",
				image: `url(${secondaryLogo})`
			} : {}}
		>
			<Seo title={title} />
			<Box
				flex={true}
				margin={margin || { horizontal: 'large', vertical: 'medium' }}
			>
				{children}
			</Box>
		</Box>
	)
}

export default PageWrapper
