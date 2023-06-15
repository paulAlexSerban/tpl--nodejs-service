const express = require("express");
const logger = require("./utils/logger");
const app = express();
app.use(express.json());
app.get("/:name/:age", (req, res) => {
    const { method, path } = req;
    logger.info(`Handling ${method} method for ${path}`);
    logger.info(`Params: ${JSON.stringify(req.params)}`);
    logger.info(`Query: ${JSON.stringify(req.query)}`);
    logger.info(`Body: ${JSON.stringify(req.body)}`);
    res.status(200).json({
        success: true,
        date: new Date(Date.now()),
        data: { message: "Hello, World!" },
    });
});

app.post("/", (req, res) => {
    const { method, path } = req;
    logger.info(`Handling ${method} method for ${path}`);
    logger.info(`Params: ${JSON.stringify(req.params)}`);
    logger.info(`Query: ${JSON.stringify(req.query)}`);
    logger.info(`Body: ${JSON.stringify(req.body)}`);
    res.status(200).json({

        success: true,
        date: new Date(Date.now()),
        data: { message: "Hello, World!" },
    });
});

app.get("/", (req, res) => {
    const { method, path } = req;
    logger.info(`Handling ${method} method for ${path}`);
    logger.info(`Params: ${JSON.stringify(req.params)}`);
    logger.info(`Query: ${JSON.stringify(req.query)}`);
    logger.info(`Body: ${JSON.stringify(req.body)}`);
    res.status(200).json({
        success: true,
        date: new Date(Date.now()),
        data: { message: "Hello, World!" },
    });
});

// set communication endpoint
const PORT = process.env.NODE_PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

app.listen(PORT, HOSTNAME, () => {
    console.log(`Listen to requests on port http://${HOSTNAME}:${PORT}`);
});
