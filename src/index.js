import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./Todo/todoReducer";
import DetailsProvider from "./Pages/DetailsProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
const Store = createStore(todoReducer);
root.render(
  <Provider store={Store}>
    <DetailsProvider>
      <App />
    </DetailsProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
