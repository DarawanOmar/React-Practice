import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { login ,logout } from "../Store";

const Profile = () => {
    const [newUserName , setNewUserName] = useState("");
    const dispatch = useDispatch();
    const username = useSelector((state)=> state.user.value.username)

    return ( 

        <div className="text-center font-serif">
            <h1 className="text-center text-3xl font-bold mt-10">Profile Page {username}</h1>
            <div className="mt-12">
                <input onChange={(e) => setNewUserName(e.target.value) } className="border-2 border-black p-2 rounded-md w-1/2" type="text" />
                <div className="space-x-4 space-y-4">
                    <button onClick={() => dispatch(login({ username : newUserName}))} className="text-white bg-black px-4 py-2 rounded-md hover:opacity-70">Login</button>
                    <button onClick={() => dispatch(logout())} className="text-white bg-black px-4 py-2 rounded-md hover:opacity-70">Logout</button>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;