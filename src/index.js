import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import store from "./store/store/store"

import Navbar from "./components/Navbar/Navbar"
import Content from "./components/Content/Content"


ReactDOM.render(<Provider store={store}>
    <Navbar />
    <Content />
</Provider>, document.getElementById("root"))