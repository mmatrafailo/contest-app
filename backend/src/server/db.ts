import {MONGODB_URI, DB_NAME} from "./config";
import {MongoClient} from "mongodb";

let connectedClient: MongoClient;

export const connectClient = async () => {
    if (connectedClient) {
        return connectedClient.db(DB_NAME);
    }

    const client = new MongoClient(MONGODB_URI);
    await client.connect()
    await client.db(DB_NAME).command({ping: 1});

    connectedClient = client
    return connectedClient.db(DB_NAME)
};

export const stopClient = async () => {
    await connectedClient?.close();
};