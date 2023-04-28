import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import axios from "axios";

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
      if (inputText){
          setDisplayText(true);
          CallApi()
      }
        
    };

    function CallApi(){

      const key = "AIzaSyDEcNpRNMpVYiZ2Yb2vceISesLDlYBc1ig"
      const query = inputText
      const maxResults = 5
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&key=${key}`;
    
     
    
      axios.get(url).then((res) => {
          console.log(res.data.items)
      })
    
    
    }

    return (
      <>
      
      <form className='container w-50 mt-4' onSubmit={onSubmit}>
      <div className='row form-group'>
        <label className='form-label text-start'>Título o autor:</label>
        <input 
          className='form-control '
          type="text"
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
