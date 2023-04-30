// se tendra que importar usando: import Book from './Book.js';

import './Book.css';
import noBook from './noImageBook.jpg';

function Book(props) {
   /*  return <div className="bookContainer row">I am a { props.brand }</div>; */


    var authors = props.authors 
    var imgSrc = props.imgSrc 
    var title = props.title

   var w = window.innerWidth;
   var classImg;

  if(w <=740)
  {
    classImg="imgBook col-3"
  }
  else{
    classImg="imgBook col-2"
  }

  if(imgSrc == null || imgSrc=="")
  {
    imgSrc = noBook
  }

  if(authors== null || authors=="")
    authors = "Autor anónimo"


  const onClick = (e) => {
      e.preventDefault()
      window.location.href = props.preview
  }


   return <div className="bookContainer row" onClick={onClick}>
    <img className={classImg} src={imgSrc}></img>
    <div className='col row colTextBook'>
        <div className='row titleBook'>{title}</div>
        <div className='row authorsBook'>{authors}</div>
    </div>
   </div>;
  }


  export default Book;