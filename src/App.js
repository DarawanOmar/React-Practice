import React from "react";
// import RunCustomHook from "./componets/CustomHook/RunCustomHook";
// import RunReactQuery from "./componets/ReactQuery/RunReactQuery";
import RunRedux from "./componets/redux/login&logout/RunRedux";
// import RunUseContext from "./componets/useContext/RunUseContext";
//import RunUseForm from './componets/FormValidation/RunUseForm'
function App() {  

  return (

    <div className="App">

      <RunRedux/>
      {/* <RunUseContext/> */}
      {/*<RunUseForm />*/} 
      {/* <RunReactQuery/> */}
      {/* <RunCustomHook/> */}
    </div>

  );
}

export default App;
