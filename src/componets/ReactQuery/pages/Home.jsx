import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
    const {data : catFact ,isLoading ,error,refetch} = useQuery(["cat"] ,()=>{
        return axios.get("https://catfact.ninja/fact").then((res)=> res.data)
    })

    if(error){
        return ( <h1 className="text-center text-rose-500 text-6xl font-bold mt-20"> Error : {error.message} </h1>)
    }


    if(isLoading){
        return  (<p className="text-center text-rose-500 text-6xl font-bold mt-20">Loading...</p>)
    }


    const ReFetch = ()=>{
        alert("Data Refetching ......")
        refetch()
    }

    return ( 
        <div className="text-center text-4xl font-bold font-serif mt-10">
            <h1> Home Page</h1>
            <p className="text-center mt-6">{catFact?.fact}</p>
            <button onClick={ReFetch} className="bg-green-500 text-white px-4 py-2 rounded-md text-center mt-5">Update Data</button>
        </div>
     );
}
 
export default Home;