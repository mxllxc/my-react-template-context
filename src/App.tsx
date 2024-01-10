import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import React from "react";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    </div>
  );
}

export default App;
