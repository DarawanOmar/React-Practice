import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:8000/api",
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})