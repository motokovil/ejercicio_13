import React from 'react';
import './App.css';
//Redux
import store from "./redux/store";
import {send, setInputValue} from "./redux/chat/actions"

function App() {

  const { chatReducer } = store.getState();
  const products = chatReducer.messages;
  return (
    <div className="App">
      {products.map((item,i)=>{
        return <h1 key={i} >{item}</h1>
      })}
      
        <input
          type="text"
          onChange={()=>store.dispatch(setInputValue())}
        />
        <button onClick={()=>store.dispatch(send())}>Send</button>
      
    </div>
  );
}

export default App;
