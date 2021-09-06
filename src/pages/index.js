import { graphql } from "gatsby"
import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SiteIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
		<Layout location={location} title={siteTitle}>
			<Seo title="Bio" />
			<Bio />
		</Layout>
	)
}

export default SiteIndex

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
