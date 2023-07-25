import axios from "axios";

export const api = axios.create({
    baseURL : 'http://localhost:3500/Posts1'
})

export  const getPosts = async () => {
    
try {
    const res = await api.get()
    // if(!res.ok) throw Error("Some Thing Went Wrong in The URL");
    return  res.data;

} catch (error) {
    console.log(error.message);
}
  
    
}