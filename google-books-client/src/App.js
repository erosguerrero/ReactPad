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
    const [bookList, setBookList] = useState(null)
    const [displayBooks, setDisplayBooks] = useState(false)

    const inputTextHandler = (e) => {
      const value = e.target.value;
      setInputText(value.trim());
    };
    const onSubmit = (e) => {
      e.preventDefault();
      setDisplayText(false)
      if (inputText){
          CallApi()
      }
        
    };

    function CallApi(){

      const key = "AIzaSyDEcNpRNMpVYiZ2Yb2vceISesLDlYBc1ig"
      const query = inputText
      const maxResults = 5
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&printType=BOOKS&key=${key}`;
    
    
      axios.get(url).then((res) => {

          let response = res.data.items
          console.log(response)

          let books = []

          if (response)
            books = response.map((e, i) => parseJSON(e, i))
          else
            setDisplayText(true)

          console.log(books)

          setBookList(books)
          setDisplayBooks(true)
          
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


      <div className='centerMainCol'>
        <div className='bookList'>
        {/*TODO: leer lista de libros y generar books */}

          {displayText ? <h1 className='mt-4'>Sin resultados</h1> : null}
          {displayBooks ?
          bookList.map(e => <Book key={e.id} title={e.titulo} authors={e.autores} imgSrc={e.imagen} preview={e.preview}></Book>)
          : null}
          
        </div>  
      </div>
        
  
      </>
      );
    
}

function parseJSON(json, id){

  const imageLinks = json.volumeInfo.imageLinks
  const authors = json.volumeInfo.authors

  let book = {
    id: id,
    titulo: json.volumeInfo.title,
    imagen: (imageLinks) ? imageLinks.thumbnail : null,
    autores: (authors) ? "" : null,
    preview: json.volumeInfo.previewLink
  }

  if (authors)
    authors.forEach((e, i) => book.autores += ((i) ? ", " : "") + e)


  return book


}



export default App;
