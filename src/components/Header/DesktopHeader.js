import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "grommet";

import { getDesktopLinks } from "./utils"

const DesktopHeader = ({ links }) => {

  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "ironsight_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Fragment>
      <a href="/">
        <Box width='200px'>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Ironsight Logo"
          />
        </Box>
      </a>
      <Box
        direction='row'
        gap='medium'
      >
        {getDesktopLinks(links)}
      </Box>
    </Fragment>
  )
}

DesktopHeader.propTypes = {
  links: PropTypes.array,
};

DesktopHeader.defaultProps = {
  links: [],
};

export default DesktopHeader;
