import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:8000/api",
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export const postData = async (URL,data) =>{
    await axios.post(`http://localhost:8000/api/${URL}`,{data},{headers:{"Accept":'application/json',"Content-Type":"application/json"}})
}