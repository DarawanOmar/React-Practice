import React from "react";
import RunRestApiLaravel from "./componets/Rest_Api_Laravel/RunRest_Api_Laravel";
// import RunCard from "./componets/Card/RunCard";
// import RunSearchingWithApi from "./componets/Searching/SearchingWithApi/RunSearchingWithApi";
// import RunFirebase from "./componets/Firebase/RunFirebase";
// import RunShoppingContext from "./componets/useContext/shopping/RunShoppingContext";
// import RunSwiper from "./componets/Swiper/RunSwiper";
// import App2 from "./Pagination/App2";
// import RunSearching from "./componets/Searching/RunSearching";
// import RunMainPostApplication from "./componets/PostApplicaton/RunMainPostApplication";
// import RunFetchAPI from "./componets/Fetch_API/RunFetchAPI";
// import RunPost2 from "./componets/redux/Post2/RunPost2";
// import RunCustomHook from "./componets/CustomHook/RunCustomHook";
// import RunReactQuery from "./componets/ReactQuery/RunReactQuery";
// import RunRedux from "./componets/redux/login&logout/RunRedux";
// import RunUseContext from "./componets/useContext/RunUseContext";
// import RunUseForm from './componets/FormValidation/RunUseForm'
// import RunIncrementAndDecrement from "./componets/redux/increment&decrement/RunIncrementAndDecrement";
// import RunMobileShopping from "./componets/redux/mobile_Shopping/RunMobileShopping";
// import RunMainMobileShopping from "./componets/redux/mobile_Shopping/RunMainMobileShopping";
// import RunPost from "./componets/redux/Post/RunPost";
// import RunContext from "./componets/useContext/context/RunContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./componets/Rest_Api_Laravel/features/store";

function App() {
  return (
    <div className="App">
      {/* <RunRedux/> */}
      {/* <RunUseContext/> */}
      {/* <RunUseForm />  */}
      {/* <RunReactQuery/> */}
      {/* <RunCustomHook/> */}
      {/* <RunIncrementAndDecrement /> */}
      {/* <RunMainMobileShopping/> */}
      {/* <RunPost/> */}
      {/* <RunPost2/> */}
      {/* <RunFetchAPI/> */}
      {/* <RunMainPostApplication/> */}
      {/* <RunSearching/> */}
      {/* <App2/> */}
      {/* <RunSwiper/> */}
      {/* <RunContext/> */}
      {/* <RunShoppingContext/> */}
      {/* <RunFirebase/> */}
      {/* <RunSearchingWithApi/> */}
      {/* <RunCard/> */}
      <Provider store={store}>
        <BrowserRouter>
          <div className="">
            <RunRestApiLaravel />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
