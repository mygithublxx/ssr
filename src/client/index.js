import React from 'react'
import App from "./App"
import ReactDom from "react-dom"
import "../assets/global.css"
ReactDom.hydrate(<App />, document.getElementById("root"))