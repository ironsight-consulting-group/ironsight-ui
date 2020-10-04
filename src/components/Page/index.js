import React from "react"
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

export default Page
