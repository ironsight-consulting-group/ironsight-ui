import React from "react"
import { Box, Grommet } from "grommet"

import { StateProvider } from "./context"
import theme from "./theme"
import { reducers, initialState } from "../state"
import { Header, Page, LayerProvider } from "../components"

const App = ({ children }) => (
  <Grommet full theme={theme}>
    <StateProvider initialState={initialState} reducer={reducers}>
      <Box fill={true}>
        <LayerProvider>
          <Header />
          <Page>{children}</Page>
        </LayerProvider>
      </Box>
    </StateProvider>
  </Grommet>
)

export default App
