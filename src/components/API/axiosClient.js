import axios from "axios";

export const Axios = axios.create({
    baseURL: 'https://631e90d922cefb1edc365723.mockapi.io/',
    headers: {
        'content-type': 'application/json',
    },
});