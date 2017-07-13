import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
var SearchBooks = require('./SearchBooks.js')
var Listbooks = require('./ListBooks.js')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


class BooksApp extends React.Component {


  render() {
    return(
  <Router>



      <div className="app">
         <Route path="/" exact render={() =>(
        <Listbooks />
          
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
