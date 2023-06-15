const url = require("url");
const logger = require("../utils/logger");

const requestHandler = (req, res) => {
    const reqUrl = req.url;
    const method = req.method;
    const headers = req.headers;
    const parsedUrl = url.parse(reqUrl, true);
    const query = parsedUrl.query;
    const path = parsedUrl.path; // returns the full path, including the query
    const pathname = parsedUrl.pathname;

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Language", "en-US");
    res.setHeader("Date", new Date(Date.now()));
    res.setHeader("X-Powered-By", "NodeJS");

    logger.info(`Handling ${method} method for ${pathname}`);

    if (pathname === "/" && method === "POST" && headers["content-type"] === "application/json") {
        let bodyData = "";

        req.on("data", (chunk) => {
            bodyData += chunk.toString(); // convert Buffer to string
        });

        req.on("end", () => {
            const data = JSON.parse(bodyData); // parse the JSON body

            const response = {
                success: true,
                date: Date.now(),
                data,
            };

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response)); // respond with the same JSON data
            logger.info("Data processed and response sent");
            return;
        });
    } else if (pathname === "/") {
        const response = {
            success: true,
            date: Date.now(),
            data: { message: "Hello, World!" },
        };
        res.end(JSON.stringify(response));
        logger.info("Responded with default message");
        return;
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Not Found" }));
        logger.warn(`Attempted access to ${pathname} but not found`);
        return;
    }
};

module.exports = requestHandler;
