import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const getContests = async () => {
    const res = await axios.get(`${API_SERVER_URL}/contests`);

    return res.data.contests
};

export const getContest = async (id) => {
    const res = await axios.get(`${API_SERVER_URL}/contest/${id}`);

    return res.data.contest
};

export const addNewNameToContest = async ({ contestId, newNameValue }) => {
    const res = await axios.post(`${API_SERVER_URL}/contest/${contestId}`,
        { newNameValue });

    return res.data.updatedContest;
};

export const addNewContest = async ({ data }) => {
    const res = await axios.post(`${API_SERVER_URL}/contest`,
        { data });

    return res.data;
};
