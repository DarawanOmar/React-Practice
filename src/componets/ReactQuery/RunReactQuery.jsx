import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavbarReactQuery from "./NavbarReactQuery";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
const RunReactQuery = () => {
    const clientProvider = new QueryClient();
    return ( 
        <div>
            <QueryClientProvider client={clientProvider}>
            <BrowserRouter>
            <NavbarReactQuery/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
            </QueryClientProvider>
        </div>
     );
}
 
export default RunReactQuery;