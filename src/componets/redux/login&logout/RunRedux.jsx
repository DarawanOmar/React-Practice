import { BrowserRouter,Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavbarRedux from "./NavbarRedux";
import { Provider } from "react-redux";
import { store } from "./Store";
const RunRedux = () => {
    return ( 
        <div>
            <Provider store={store}>
            <BrowserRouter>
            <NavbarRedux/>
                <Routes>
                    <Route path="/malawa" element={ < Home />}/>
                    <Route path="/profile2" element={<Profile />}/>
                </Routes>
            </BrowserRouter>
            </Provider>
        </div>
     );
}
 
export default RunRedux;