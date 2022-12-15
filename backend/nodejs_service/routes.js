const fs = require("fs");
const { mkdir } = require("fs/promises");
const url = require("url");

const requestHandler = (req, res) => {
  const reqUrl = req.url;
  const method = req.method;
  const parsedUrl = url.parse(reqUrl, true);
  const query = parsedUrl.query;
  const path = parsedUrl.path; // returns the full path, including the query
  const pathname = parsedUrl.pathname;

  res.setHeader("Content-Type", "text/html");

  if (pathname === "/submit-message") {
    res.write(`
    <html>
      <head>
        <title>Enter message:</title>
      </head>
      <body>
        <h1>Template NodeJS - Service</h1>
        <h2>Submit Message</h2>
        <form action="/message" method="POST">
          <input type="text" name="message">
          <button type="submit">Submit</button>
        </form>
        ${query ? query.content : "no message"}
      </body>
    </html>
  `);
    return res.end();
  }

  if (pathname === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.mkdir("messages", (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      const date = Date.now();
      fs.promises
        .writeFile(`messages/message-${date}.txt`, message)
        .then(() => fs.promises.readFile(`messages/message-${date}.txt`, "utf-8"))
        .then((data) => {
          console.log(data);
          res.statusCode = 302;
          res.setHeader("Location", `/submit-message?content=${data}`);
          return res.end();
        })
        .catch((err) => console.error(err));
    });
  }

  if (pathname === "/") {
    res.write(`
    <html>
      <head>
        <title>NodeJS Service</title>
      </head>
      <body>
        <h1>Template NodeJS - Service</h1>
        <a href="/submit-message">submit message form</a>
      </body>
    </html>
  `);
    return res.end();
  }
};

module.exports = requestHandler;
