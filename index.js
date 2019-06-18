const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.get("*", (req, res) => {
  res.status(200).send(`<!DOCTYPE html>
    <html prefix="og: http://ogp.me/ns#">
      <head></head>
      <body>
        <h1>Hello Wolrd</h1>
      </body>
    </html>`);
});

module.exports = app;
