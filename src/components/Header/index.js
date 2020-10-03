import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Box, ResponsiveContext } from "grommet";

import get from 'lodash/get';

import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

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

  const links = get(data, 'site.siteMetadata.links');

  return (
    <Box
      style={{
        position: 'fixed',
        zIndex: 2
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
          <DesktopHeader links={links} />
        ) : (
          <MobileHeader />
        )
      }
    </Box>
  );
};

export default Header;
