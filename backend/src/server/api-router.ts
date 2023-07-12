import express from "express";
import cors from "cors";
import { Collection } from "mongodb"
import { connectClient } from "./db";


const router = express.Router();

router.use(cors());
router.use(express.json());

router.get("/contests", async (req, res) => {
    const client = await connectClient()

    const contests = await client.collection("contests")
        .find()
        .project({
            id: 1,
            categoryName: 1,
            contestName: 1,
            _id: 0
        })
        .toArray()
    res.send({ contests })
})

router.get("/contest/:contestId", async (req, res) => {
    const client = await connectClient();
    const contest = await client.collection("contests")
        .findOne({ id: req.params.contestId });

    res.send({ contest })
});

router.post("/contest/:contestId", async (req, res) => {
    const client = await connectClient();
    const { newNameValue } = req.body;
    const collection: Collection<{ id: string, name: string, timestamp: Date }> = client.collection("contests");
    const doc = await collection
        .findOneAndUpdate(
            { id: req.params.contestId },
            {
                $push: {
                    names: {
                        id: newNameValue.toLowerCase().replace(/\s/g, "-"),
                        name: newNameValue,
                        timestamp: new Date()
                    },
                },
            },
            { returnDocument: "after" }
        );

    res.send({ updatedContest: doc.value })
});

router.post("/contest", async (req, res) => {
    const client = await connectClient();
    const { data } = req.body;
    const collection: Collection<{ id: string, contestName: string, categoryName: string, description: string }> = client.collection("contests");
    data.id = data.contestName.toLowerCase().replace(/\s/g, "-");
    await collection
        .insertOne(data);

    res.send({ data })
});

export default router;