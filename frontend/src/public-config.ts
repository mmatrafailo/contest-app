export const PORT = process.env.PORT ?? "8080";
export const HOST: string = process.env.HOST ?? "0.0.0.0";
export const API_SERVER_URL: string = `http://${HOST}:${PORT}/api`;