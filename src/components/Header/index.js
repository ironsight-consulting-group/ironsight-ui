import React, { useContext, useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Box, ResponsiveContext } from "grommet";

import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"
import { getLinksFromData } from "./utils"

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
      }
    `
  );

  const getLinks = useCallback(() => getLinksFromData(data), [data]);

  return (
    <Box
      // style={{
      //   position: 'fixed',
      //   zIndex: 2
      // }}
      pad={{
        left: 'medium',
        right: 'large'
      }}
      fill='horizontal'
      height='xsmall'
      justify='between'
      background='white'
      direction='row'
      align='center'
    >
      {
        size !== 'small' ? (
          <DesktopHeader links={getLinks()} />
        ) : (
          <MobileHeader links={getLinks()} />
        )
      }
    </Box>
  );
};

export default Header;
