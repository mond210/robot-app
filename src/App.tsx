import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "layouts/main-layout/main-layout";
import { CommonProvider } from "contexts/common";

function App() {
  return (
    <BrowserRouter>
      <CommonProvider>
        <MainLayout></MainLayout>
      </CommonProvider>
    </BrowserRouter>
  );
}

export default App;
