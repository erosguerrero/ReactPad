import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import axios from "axios";
import Book from "./Book.js"

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
          parseJSON(res.data.items[0])
      })
    
    
    }

    return (
      <>
      
      <form className='container w-50 mt-4' onSubmit={onSubmit}>
          <div className='row form-group my-3'>
            <h2>Buscador de Google books</h2>
          </div>
        <div className="container d-flex justify-content-center">

          <div className="input-group col-sm-7  input-group-lg">
                      <div>
                        <span className="input-group-text bookicon"><img alt="Icono de google books" src="https://img.icons8.com/color/48/000000/google-books.png"></img></span>
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

      <div className='centerMainCol'>
        <div className='bookList'>
        {/*TODO: leer lista de libros y generar books */}
          <Book title={"car"} authors={"autores"} imgSrc={"http://books.google.com/books/content?id=adPodg5MNU0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
          <Book title={"car2"} authors={"autores2"} imgSrc={""} />
          <Book title={"car3"} authors={""} imgSrc={""} />
        </div>  
      </div>
        
  
      </>
      );
    
}

function parseJSON(json){

  const imageLinks = json.volumeInfo.imageLinks
  const authors = json.volumeInfo.authors

  let book = {
    titulo: json.volumeInfo.title,
    imagen: (imageLinks) ? imageLinks.thumbnail : null,
    autores: (authors) ? "" : null
  }

  authors.forEach((e, i) => book.autores += ((i) ? ", " : "") + e)


  console.log(book)


}



export default App;
