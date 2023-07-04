import React from "react";

// import RunCustomHook from "./componets/CustomHook/RunCustomHook";
// import RunReactQuery from "./componets/ReactQuery/RunReactQuery";
// import RunRedux from "./componets/redux/login&logout/RunRedux";
// import RunUseContext from "./componets/useContext/RunUseContext";
//import RunUseForm from './componets/FormValidation/RunUseForm'
// import RunIncrementAndDecrement from "./componets/redux/increment&decrement/RunIncrementAndDecrement";
import RunMobileShopping from "./componets/redux/mobile_Shopping/RunMobileShopping";
import { Provider } from "react-redux";
import { store } from "./componets/redux/mobile_Shopping/store";
function App() {  

  return (

    <div className="App">

      {/* <RunRedux/> */}
      {/* <RunUseContext/> */}
      {/*<RunUseForm />*/} 
      {/* <RunReactQuery/> */}
      {/* <RunCustomHook/> */}
      {/* <RunIncrementAndDecrement /> */}
      <Provider store={store}>
      <RunMobileShopping/>
      </Provider>
    </div>

  );
}

export default App;
