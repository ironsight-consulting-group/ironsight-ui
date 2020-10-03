import React from "react";
import { Grommet } from 'grommet';

import { StateProvider } from "./context";
import theme from './theme';
import { reducers, initialState } from "../state";
import Header from "../components/Header"

const App = ({ children }) => (
  <Grommet full={true} theme={theme}>
    <StateProvider initialState={initialState} reducer={reducers}>
      <Header />
      {children}
    </StateProvider>
  </Grommet>
);

export default App;