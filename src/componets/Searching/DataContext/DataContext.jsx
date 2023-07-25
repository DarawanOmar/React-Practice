import { createContext , useState } from "react";

const AppContext = createContext({})

export const DataProvider = ({children}) => {


    return (
        <AppContext.Provider value={{

        }}>
            { children } 
        </AppContext.Provider>
    )
}
export default AppContext;