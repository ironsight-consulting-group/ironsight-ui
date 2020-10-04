import React from "react"
import PropTypes from 'prop-types';
import { Box } from "grommet"

const Page = ({
  background,
  children
}) => (
  <Box
    flex={true}
    background={background}
    align='center'
  >
    <Box
      flex={true}
      width={{ max: '1600px' }}
      pad='large'
      fill='horizontal'
      align='start'
      overflow='auto'

    >
      {children}
    </Box>
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
