import express from "express";
import config from "./config"
import router from "./api-router";

const server = express();
//serve static files
server.use(express.static("dist"));

server.set("view engine", "ejs");

//Api router entrypoint
server.use("/api", router);

server.listen(config.PORT, config.HOST);