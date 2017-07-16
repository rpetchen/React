var React = require('react');

var Link = require('react-router-dom').Link
import BookView from './BookView.js'

class ListBooks extends React.Component {


  componentDidMount(){
  	this.props.getBook()
  }



render() {

return(

<div className="list-books">
    <div className="list-books-title">
        <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.state.currentlyReading && this.props.state.currentlyReading.map((book)=>{ return(
                        <BookView books={book} key={book.id} func={this.props.changeState}>
                        </BookView>
                        ) })}
                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.state.wantToRead && this.props.state.wantToRead.map((book)=>{ return(
                        <BookView books={book} key={book.id} func={this.props.changeState}>
                        </BookView>
                        ) })}
                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.state.read && this.props.state.read.map((book)=>{ return(
                        <BookView books={book} key={book.id} func={this.props.changeState}>
                        </BookView>
                        ) })}
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div className="open-search">
        <Link to="/search">Add a book</Link>
    </div>
</div>
) } }

module.exports = ListBooks
