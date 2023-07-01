import { BrowserRouter,Routes,Route } from "react-router-dom";
import ShowAndHide from "./pages/ShowAndHide";
import FetchData from "./pages/FetchData"
import NavbarCustomHook from "./NavbarCustomHook";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
const RunCustomHook = () => {
    const client = new QueryClient();
    return ( 
        <div>
            <QueryClientProvider client={client}>
            <BrowserRouter>
            <NavbarCustomHook/>
                <Routes>
                    <Route path="showAndHide" element={<ShowAndHide/>}/>
                    <Route path="fetchData" element={<FetchData />}/>
                </Routes>
            </BrowserRouter>
            </QueryClientProvider>
        </div>
     );
}
 
export default RunCustomHook;