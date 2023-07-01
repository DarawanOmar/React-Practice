import useFetch from "../Hooks/useFetch";

const FetchData = () => {

    const {data,isLoading,error,reFecht} = useFetch()

    if(isLoading) {
        return(
            <h1 className="text-center font-bold text-rose-500 text-5xl"> You Have An Error</h1>
        )
    }
    if(error) {
        return(
            <h1 className="text-center font-bold text-rose-500 text-5xl"> You Have An Error</h1>
        )
    }

    return ( 
        <div className="text-center text-3xl font-serif font-bold my-10">
            <p>{data?.fact}</p>
            <button onClick={() => {reFecht()}} className="bg-green-500 text-white text-center px-4 py-2 rounded-md my-6 hover:opacity-70"> Update Data</button>
        </div>
     );
}
 
export default FetchData;