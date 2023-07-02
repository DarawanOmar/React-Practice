import {  useSelector } from "react-redux";

const Home = () => {
    const username = useSelector((state)=> state.user.value.username)

    return ( 
        <div>
            <h1 className="text-center text-3xl font-bold mt-10">Home Page {username}</h1>
        </div>
     );
}
 
export default Home;