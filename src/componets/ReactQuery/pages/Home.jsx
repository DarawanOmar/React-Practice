import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
const Home = () => {
    const {data ,isLoading ,error,refetch} = useQuery(["cat"] ,()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data)
    })

    if(error){
        return ( <h1 className="text-center text-rose-500 text-6xl font-bold "> You Have An Error </h1>)
    }

    if(isLoading){
        return  (<p className="text-center text-rose-500 text-6xl font-bold ">Loading...</p>)
    }

    const ReFetch = ()=>{
        alert("Data Refetching ......")
        refetch()
    }

    return ( 
        <div className="text-center text-4xl font-bold font-serif mt-10">
            <h1> Home Page</h1>
            <p className="text-center mt-6">{data?.fact}</p>
            <button onClick={ReFetch} className="bg-green-500 text-white px-4 py-2 rounded-md text-center mt-5">Update Data</button>
        </div>
     );
}
 
export default Home;