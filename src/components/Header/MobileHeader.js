import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from "gatsby"
import { Box, Menu } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

import { getMobileLinks } from "./utils"
import Img from "./MobileHeader"

const MobileHeader = ({ links }) => {

  const data = useStaticQuery(
    graphql`
        query MobileHeaderQuery {
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
      <Menu
        size='large'
        icon={
          <MenuIcon
            size='medium'
            color='black'
          />
        }
        items={getMobileLinks(links)}
      />
      <a href="/">
        <Box width='200px'>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Ironsight Logo"
          />
        </Box>
      </a>
    </Fragment>
  )
};

MobileHeader.propTypes = {
  links: PropTypes.array,
};

MobileHeader.defaultProps = {
  links: [],
};

export default MobileHeader;
