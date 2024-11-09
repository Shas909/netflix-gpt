import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Toast from "./components/Toast";
import { useState } from "react";
import { createContext } from "react";

function App() {
  return (
    <Provider store={appStore}>
      {/* <div className="toast-container">
        <Toast />
      </div> */}
      <Body />
    </Provider>
  );
}

export default App;
