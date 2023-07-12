//process.env
const env = process.env

//HTTP server config
export const PORT: number = env.PORT ? parseInt(env.PORT): 8080;
export const HOST: string = env.HOST ?? "0.0.0.0";
export const SERVER_URL: string = `http://${HOST}:${PORT}`;

//DB config
export const MONGODB_URI: string = env.MONGODB_URI ?? "mongodb://localhost:27017";
export const DB_NAME: string = "local";

export default {
    PORT,
    HOST,
    SERVER_URL,
}