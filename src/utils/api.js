import Axios from "axios";

export default {
    async connection(){
        return Axios.create({
            baseURL: process.env.REACT_APP_API_URL,
        })
    },
    async get(url, params) {
        return (await this.connection()).get(url, params);
    },
    async post(url, body) {
        return (await this.connection()).post(url, body);
    },
    async put(url, body) {
        return (await this.connection()).put(url, body);
    },
    async delete(url, params) {
        return (await this.connection()).delete(url, params);
    }
};