import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <Form></Form>
    </div>
  );
}

function Form() {

    const [inputText, setInputText] = useState("");
    const [displayText, setDisplayText] = useState(false);
    const inputTextHandler = (e) => {
    const value = e.target.value;
    setDisplayText(false);
    setInputText(value);
    };
    const onSubmit = (e) => {
    e.preventDefault();
    setDisplayText(true);
    };

    return (
      <>
      
      <form onSubmit={onSubmit}>
      <input type="text"
      onChange={inputTextHandler}></input>
      <button type="submit">Aceptar</button>
      </form>

      {displayText ? <h1>Buscando: {inputText}</h1> : null};
        
      </>
      );
    
}

export default App;
