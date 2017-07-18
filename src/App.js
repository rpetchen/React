import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
var SearchBooks = require("./SearchBooks.js");
var Listbooks = require("./ListBooks.js");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


class BooksApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            	allbooks:"",
                read: "",

                value: "",
                currentlyReading: "",
                wantToRead: ""
            };

            this.ShelfPlacement = this.ShelfPlacement.bind(this);
        }

        getBook = () => {
            BooksAPI.getAll().then(books => {
            	   this.setState({
              		allbooks: books
            });

                this.ShelfPlacement(books);
            }).then(reads => {

            });
        };

        changeState = (book, event) => {
           
            BooksAPI.update(book, event.target.value).then(results => {
                this.getBook()
            });
        };

        ShelfPlacement = (books) => {
            var read = books.filter((b) => b.shelf === "read");

            var currentlyReading = books.filter((b) => b.shelf === "currentlyReading");

            var wantToRead = books.filter((b) => b.shelf === "wantToRead");

            this.setState({
                read: read,
                currentlyReading: currentlyReading,
                wantToRead: wantToRead
            });
        };

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
        allbooks={this.state.allbooks}
        />
          
        )}/>   

      <Route path="/search" exact render={() =>(
        <SearchBooks changeState={this.changeState}
        state={this.state}
        />
          
        )}/>     
      </div>
      
    </Router>
   ) 
  }
}

export default BooksApp
