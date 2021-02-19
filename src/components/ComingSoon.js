import React from "react"
import { Box, Heading } from "grommet"
import { UserWorker } from "grommet-icons"

const ComingSoon = () => {
  return (
    <Box
      flex={false}
      fill={true}
      align="center"
      justify="center"
      direction="row"
      gap="medium"
    >
      <UserWorker color="brand" size="large" />
      <Heading>Coming soon!</Heading>
    </Box>
  )
}

export default ComingSoon
