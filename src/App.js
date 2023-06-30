import React from "react";
// import {BrowserRouter,Routes , Route} from 'react-router-dom';
// import Home from './componets/Home'
// import Contact from './componets/Contact'
// import Navbar from './componets/Navbar'
// import P404 from "./componets/404";
// import User from './componets/pages/User'
// import Features from "./componets/pages/Features";
// import New from "./componets/pages/New";
// import Profile from "./componets/Profile";
// import { Provider } from "react-redux";
// import { store } from "./componets/Store";
// import RunRedux from "./componets/redux/RunRedux";
import RunUseContext from "./componets/useContext/RunUseContext";
 
function App() {  

  return (

    <div className="App">
      {/* <Provider store={store}>
      <BrowserRouter >
      <Navbar /> 
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path="profile" element={<Profile />}/>
            <Route path='/contact' element={ <Contact /> }/>
            <Route path="*" element={ <P404 />}/>
            <Route path="/User/:username/:id" element={ <User /> }> 
              <Route path="features" element={<Features />}/>
              <Route path="new" element={<New />}/>
            </Route>
          </Routes>
      </BrowserRouter>
      </Provider> */}
      {/* <RunRedux/> */}
      <RunUseContext/>
      
    </div>

  );
}

export default App;
