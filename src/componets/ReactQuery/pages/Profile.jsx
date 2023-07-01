import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Profile = () => {
    const {data ,isLoading ,error} = useQuery(["cat"] ,()=>{
        return Axios.get("https://jsonplaceholder.typicode.com/comments/1").then((res)=> res.data)
    })

    if(error){
        return ( <h1 className="text-center text-rose-500 text-6xl font-bold "> You Have An Error </h1>)
    }

    if(isLoading){
        return  (<p className="text-center text-rose-500 text-6xl font-bold ">Loading...</p>)
    }


    return ( 
        <div className="text-center text-4xl font-bold font-serif mt-10">
            <h1 className="text-6xl"> Profile Page</h1><br></br>
            <p> ID : {data?.id}</p><br></br>
            <p> Name : {data?.name}</p><br></br>
            <p> email : {data?.email}</p><br></br>
            <p> body :<br/> {data?.body}</p>
        </div>
     );
}
 
export default Profile;