import React from 'react';
import './App.css';
//Redux
import store from "./redux/store";
import {send, setInputValue} from "./redux/chat/actions"

function App() {

  const { chatReducer } = store.getState();
  const messages = chatReducer.messages;

  return (
    <div className="App">
      {messages.map((item,i)=>{
        return <h1 key={i} >{item}</h1>
      })}
      
        <input
          type="text"
          onChange={(e)=>store.dispatch(setInputValue(e.target.value))}
        />
        <button onClick={()=>store.dispatch(send(chatReducer.inputMessage))}>Send</button>
      
    </div>
  );
}

export default App;
