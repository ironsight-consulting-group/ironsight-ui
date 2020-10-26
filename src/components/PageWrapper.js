import React from "react"
import { Box } from "grommet"
import Seo from "./Seo"

const PageWrapper = ({ children, title, margin }) => {
	return (
		<Box
			flex={false}
			fill={true}
		>
			<Seo title={title} />
			<Box
				flex={false}
				margin={margin || { horizontal: 'large', vertical: 'medium' }}
			>
				{children}
			</Box>
		</Box>
	)
}

export default PageWrapper
