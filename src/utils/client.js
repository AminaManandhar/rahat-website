const { default: axios } = require("axios");
let baseURL = "http://localhost:5000";

const client = axios.create({
    baseURL: "http://localhost:5200",
});

export const communityClient = axios.create({
    baseURL: "http://localhost:5000",
});

export default client;
