import React from 'react'

class BookView extends React.Component {

constructor(props) {
super(props);
this.state = {
  shelf: "",
}

this.setShelf = this.setShelf.bind(this)
}

 
findShelf =(book, shelf) => {
var bookShelf = ""

shelf.forEach(function (f) {

 var equal = f.id === book.id
 if (equal){
     bookShelf = f.shelf
    }
    
  })

this.setShelf(bookShelf)
}

setShelf=(thing)=>{

  this.setState({shelf: thing},
    function(){console.log(this.state)})
}


componentDidMount(){
 
 this.findShelf(this.props.books, this.props.allBooks)

};



render() {
  var shelf = this.state.shelf

	var book = this.props.books;


	return(
 <li >
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>

            <div className="book-shelf-changer">
              <select value={shelf} onChange={(e) => this.props.func(book, e)}>
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
    }}

    module.exports = BookView