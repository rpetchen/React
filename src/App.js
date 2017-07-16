import React from 'react'
// import * as BooksAPI from './BooksAPI'
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
  read: ["book 1 ", "book 2","book 1 ", "book 2","book 1 ", "book 2"],
  value: "",
  currentlyReading: "",
  wantToRead: ""
}
this.changeState = this.changeState.bind(this)
this.ShelfPlacement = this.ShelfPlacement.bind(this)
}



changeState =(test)=>{
if (test.target.value === "read"){
 this.setState({read: ["WORKED"]})
}
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
        <Listbooks test={this.changeState}
        Shelf={this. ShelfPlacement}
        state={this.state} />
          
        )}/>   

      <Route path="/search" exact render={() =>(
        <SearchBooks />
          
        )}/>     
      </div>
      
    </Router>
   ) 
  }
}

export default BooksApp
