import axios from "axios";

export const api = axios.create({
    // baseURL : "http://localhost:3500/Posts1"
    baseURL : 'https://jsonplaceholder.typicode.com/posts'
})

export  const getPosts = async () => {
    const res = await api.get();
    return res.data;
}

