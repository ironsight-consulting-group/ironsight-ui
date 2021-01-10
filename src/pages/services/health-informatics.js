import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box } from "grommet"
import Img from "gatsby-image"
import { Contact } from "grommet-icons"

import { MobileBasicLink, PageWrapper } from "../../components"

const HealthInformatics = () => {

	const data = useStaticQuery(
		graphql`
        query HealthInformaticsQuery {
            image: file(relativePath: { eq: "health_informatics_graph.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
		`
	)

	return (
		<PageWrapper
			title='Health Informatics Solutions'
			margin={{ horizontal: 'large', bottom: 'medium' }}
		>
			<Box
				fill='horizontal'
				gap='medium'
			>
				<Img fluid={data.image.childImageSharp.fluid} alt="A patient-centric, data-driven approach to medication management"  />
			</Box>
			<Box
				align='center'
				margin={{ top: 'large' }}
			>
				<MobileBasicLink
					item={{
						path: '/contact',
						label: 'Contact us to learn more',
						icon: <Contact color='blue-3' />
					}}
				/>
			</Box>
		</PageWrapper>
	)
}

export default HealthInformatics
