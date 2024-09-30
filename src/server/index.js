import React from "react"
import render from "./render"
const express = require("express");

const app = express();

//设置静态资源拦截
app.use(express.static("./public"));

app.get("*", render);

app.listen(8080, () => {
  console.log("serve is working on 8080");
});
