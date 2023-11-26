import React from "react";
import "./App.css";
import DefaultRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/general/Header/Header";
import { GeneralProvider } from "./contexts/GeneralContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GeneralProvider>
          <Header />
          <DefaultRoutes />
        </GeneralProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
