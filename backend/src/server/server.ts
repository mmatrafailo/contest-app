import express from "express";
import config from "./config"
import router from "./api-router";

const server = express();
//serve static files

//Api router entrypoint
server.use("/api", router);

server.listen(config.PORT, config.HOST);
