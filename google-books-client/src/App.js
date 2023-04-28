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
      setInputText(value.trim());
    };
    const onSubmit = (e) => {
      e.preventDefault();
      if (inputText)
        setDisplayText(true);
    };

    return (
      <>
      
      <form className='container w-50 mt-4' onSubmit={onSubmit}>
      <div className='row form-group'>
        <label className='form-label text-start'>Título o autor:</label>
        <input 
          className='form-control '
          type="text"
          name='titulo'
          id='titulo'
          placeholder='Busca un título o autor'
          onChange={inputTextHandler}>
        </input>
      </div>
      <div className='text-end mt-3'>
        <button className='btn btn-primary' type="submit">Aceptar</button>
      </div>
      
     </form>

      {displayText ? <h1 className='mt-3'>Buscando: {inputText}</h1> : null}
        
      </>
      );
    
}

export default App;
