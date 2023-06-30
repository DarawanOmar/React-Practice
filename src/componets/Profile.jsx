import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { login , logout } from "./Store";

const Profile = () => {
    const [newUsername , setNewUsername] = useState("");
    const dispatch = useDispatch();
    const username = useSelector((state)=> state.users.value.username)

    return ( 
        <div>
            <div >
                <div className="max-w-7xl mx-auto  font-serif pt-10 text-center " >
                    <h1 className="text-4xl font-bold">Profile {username}</h1>
                    <input onChange={(e) => { setNewUsername(e.target.value)}} type="text" className="border-2 border-black p-2 rounded-md  w-1/2 mt-6"/>
                    <div className="space-x-4 space-y-4">
                        <button onClick={() => dispatch(login( {username : newUsername}))}  className="bg-black text-white px-4 py-2 rounded-md hover:opacity-75">Login</button>
                        <button onClick={() => dispatch(logout())} className="bg-black text-white px-4 py-2 rounded-md hover:opacity-75">Logout</button>
                    </div>
                </div>
            </div>

        </div>
     );
}
  
export default Profile;