import React, { useContext, useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Box, ResponsiveContext } from "grommet";

import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"
import { getImageFromData, getLinksFromData } from "./utils"

const Header = () => {

  const size = useContext(ResponsiveContext);
  const data = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            links {
              label
              path
            }
          }
        }
        file(relativePath: { eq: "ironsight_logo.png" }) {
            childImageSharp {
                fluid(maxHeight: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    `
  );

  const getLinks = useCallback(() => getLinksFromData(data), [data, getLinksFromData]);
  const getImage = useCallback(() => getImageFromData(data), [data, getImageFromData]);

  return (
    <Box
      // style={{
      //   position: 'fixed',
      //   zIndex: 2
      // }}
      fill='horizontal'
      height='xsmall'
      justify='between'
      background='white'
      direction='row'
      align='center'
    >
      {
        size !== 'small' ? (
          <DesktopHeader logo={getImage()} links={getLinks()} />
        ) : (
          <MobileHeader logo={getImage()} links={getLinks()} />
        )
      }
    </Box>
  );
};

export default Header;
