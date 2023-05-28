import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios"
import ViewPrincipal from './components/Page_client/ViewPrincipal';
axios.defaults.baseURL =" http://localhost:3001"



function App() {

  return (
    <div className="App">
      <ViewPrincipal />
    </div>
  );
}

export default App;
