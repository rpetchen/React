import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
var SearchBooks = require('./SearchBooks.js')
var Listbooks = require('./ListBooks.js')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


class BooksApp extends React.Component {
constructor(props){
  super(props);
this.state={
  read: "",

  value: "",
  currentlyReading: "",
  wantToRead: ""
} 

this.ShelfPlacement = this.ShelfPlacement.bind(this)
}

getBook=()=>{
  BooksAPI.getAll().then(books =>{
      
      this.ShelfPlacement(books)
    }).then(reads =>{
      
    })
  }

changeState=(book, event)=>{
  console.log(event.target.value)
BooksAPI.update(book, event.target.value).then( results =>{
this.getBook()
})
}

ShelfPlacement=(books)=>{
var read = books.filter((b) => b.shelf === "read")

var currentlyReading = books.filter((b) => b.shelf === "currentlyReading")

var wantToRead = books.filter((b) => b.shelf === "wantToRead")

this.setState({
  read: read,
  currentlyReading: currentlyReading,
  wantToRead: wantToRead
})
}

  render() {
    return(
  <Router>



      <div className="app">
         <Route path="/" exact render={() =>(
        <Listbooks 
        Shelf={this.ShelfPlacement}
        state={this.state} 
        getBook={this.getBook}
        changeState={this.changeState}
        />
          
        )}/>   

      <Route path="/search" exact render={() =>(
        <SearchBooks changeState={this.changeState}

        />
          
        )}/>     
      </div>
      
    </Router>
   ) 
  }
}

export default BooksApp
