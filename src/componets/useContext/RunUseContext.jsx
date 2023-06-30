import { BrowserRouter,Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavbarUseContext from "./NavbarUseContext";
import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext()
const RunRedux = () => {
    const [username ,setUsername] = useState("")
    return ( 
        <div>
            <AppContext.Provider value={{username , setUsername}} >
            <BrowserRouter>
            <NavbarUseContext/>
                <Routes>
                    <Route path="/malawa3" element={ < Home />}/>
                    <Route path="/profile3" element={<Profile />}/>
                </Routes>
            </BrowserRouter>
            </AppContext.Provider>
        </div>
     );
}
 
export default RunRedux;