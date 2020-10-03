import React from "react";
import App from "../app/App";
import Header from "../components/Header";

export default Component => props => (
  <App {...props}>
    <Header />
    <Component {...props} />
  </App>
);
