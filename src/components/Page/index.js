import React from "react"
import PropTypes from 'prop-types';
import { Box } from "grommet"
import { Footer } from "../index"

const Page = ({
  background,
  children
}) => (
  <Box
    flex={true}
    background={background}
    overflow='auto'
    align='center'
  >
    <Box
      flex='grow'
      width={{ max: '1600px' }}
      fill='horizontal'
      align='start'
    >
      {children}
    </Box>
    <Footer />
  </Box>
)

Page.propTypes = {
  children: PropTypes.object.isRequired,
  background: PropTypes.string,
};

Page.defaultProps = {
  background: 'white'
}

export default Page
