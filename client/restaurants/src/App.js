import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios"
import ViewPrincipal from './components/Page_client/ViewPrincipal';
import {Route} from "react-router-dom";
import ViewCreateOrder from './components/Page_client/ViewCreateOrder';

axios.defaults.baseURL =" http://localhost:3001";


function App() {

  return (
    <div className="App">
      <Route exact path="/">
        <ViewPrincipal />
      </Route>

      <Route exact path="/table/:id">
        <ViewCreateOrder />
      </Route>
    </div>
  );
}

export default App;
