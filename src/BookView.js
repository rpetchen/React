import React from 'react'

function BookView(props){
	var book = props.books;

	 console.log(props);

	return(
 <li >
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select defaultValue="none" onChange={(e) => props.func(book, e)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title"> {book.title} </div>
          <div className="book-authors"> {book.authors} </div>
        </div>
      </li>
      )
    }

    module.exports = BookView