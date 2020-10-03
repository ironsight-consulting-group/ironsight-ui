import React from "react"
import Home from "./home"
import withApp from "../HOCs/withApp"

const IndexPage = () => <Home />

export default withApp(IndexPage);
