import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//redux
import store from "./redux/store";

const rootElement = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
};

store.subscribe(render);

render();