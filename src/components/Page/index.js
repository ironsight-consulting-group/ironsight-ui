import React, { useContext } from "react"
import PropTypes from 'prop-types';
import { Box, ResponsiveContext } from "grommet"
import { Footer } from "../index"

const Page = ({
  background,
  children
}) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      id='container'
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
      {size !== "small" && <Footer />}
    </Box>
  )
}

Page.propTypes = {
  children: PropTypes.object.isRequired,
  background: PropTypes.string,
};

Page.defaultProps = {
  background: 'white'
}

export default Page
