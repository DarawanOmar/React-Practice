import React from "react";

// import RunCustomHook from "./componets/CustomHook/RunCustomHook";
// import RunReactQuery from "./componets/ReactQuery/RunReactQuery";
// import RunRedux from "./componets/redux/login&logout/RunRedux";
// import RunUseContext from "./componets/useContext/RunUseContext";
//import RunUseForm from './componets/FormValidation/RunUseForm'
import RunIncrementAndDecrement from "./componets/redux/increment&decrement/RunIncrementAndDecrement";

function App() {  

  return (

    <div className="App">

      {/* <RunRedux/> */}
      {/* <RunUseContext/> */}
      {/*<RunUseForm />*/} 
      {/* <RunReactQuery/> */}
      {/* <RunCustomHook/> */}
      <RunIncrementAndDecrement />
    </div>

  );
}

export default App;
