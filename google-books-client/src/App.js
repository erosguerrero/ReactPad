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
          <div className='row form-group my-3'>
            <h2>Buscador de Google books</h2>
          </div>
        <div class="container d-flex justify-content-center">

          <div class="input-group col-sm-7  input-group-lg">
                      <div>
                        <span class="input-group-text bookicon"><img alt="Icono de google books" src="https://img.icons8.com/color/48/000000/google-books.png"></img></span>
                      </div>
              <input 
              className='form-control'
              type="text"
              id='titulo'
              placeholder='Busca un título o autor'
              onChange={inputTextHandler}>
              </input>
          </div>
        
        </div>

      </form>

      {displayText ? <h1 className='mt-3'>Buscando: {inputText}</h1> : null}
        
  
      </>
      );
    
}




export default App;
