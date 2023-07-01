import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const useFetch = () => { 

    const {data ,isLoading ,error , refetch} = useQuery(["cat"] ,() => {
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data)
    })

    if(error){
        return ( <h1 className="text-center text-rose-500 text-6xl font-bold "> You Have An Error </h1>)
    }

    if(isLoading){
        return  (<p className="text-center text-rose-500 text-6xl font-bold ">Loading...</p>)
    }

    const reFecht = () =>{
        alert("Refetching Data....")
        refetch()
    }

    return {data , isLoading , error , reFecht}

}
 
export default useFetch;