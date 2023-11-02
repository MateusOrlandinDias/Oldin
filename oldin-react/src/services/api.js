import axios from 'axios';

//baseUrl -> Qual o local host do swagger?
const api = axios.create({
    baseURL: "https://x8ki-letl-twmt.n7.xano.io/api:eGFZMu9K",
});

export default api;