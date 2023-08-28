import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from "react-redux";
import store from "./store";
import ProductsList from "./components/ProductsList";
import './index.css';
import Receipt from './components/Receipt';
import TotamAmount from './components/Total';

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            <ProductsList />
            <Receipt />
            <TotamAmount />
         </div>
      </Provider>
   )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)