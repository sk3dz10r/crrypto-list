import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import AppContainer from "./pages/appcointainer/appcontainer.component";

function App() {
  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
