import React from "react"
const ReactDOMServer = require("react-dom/server");
import getScript from "./getScript";
import App from "./App";
export default (req, res) => {
  const componentHTML = ReactDOMServer.renderToString(<App />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root">${componentHTML}</div>
        ${getScript()}
    </body>
    </html>`;
  res.send(html);
};
