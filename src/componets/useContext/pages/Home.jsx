import { useContext } from "react";
import { AppContext } from "../RunUseContext";

const Home = () => {
    const {username} = useContext(AppContext)
    return ( 
        <div>
            <h1 className="text-center text-3xl font-bold mt-10 font-serif">Home Page {username}</h1>
        </div>
     );
}
 
export default Home;