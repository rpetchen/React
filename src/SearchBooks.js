var React = require('react')
import * as BooksAPI from './BooksAPI'

var Link = require('react-router-dom').Link

function SearchResults (props) {
return (
<ol className="books-grid">	
{props.results.map((book) => {
return(
	 <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <select>
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
     })}
 </ol>
)
}

class SearchBooks extends React.Component {
constructor(props){
	super(props);
	this.state = {
		query: '',
		results: '',
		noResults: ''
	};
	this.updateQuery = this.updateQuery.bind(this)
}



updateQuery = (query) =>{
	this.setState({query: query})

	BooksAPI.search(this.state.query, 6).then( books =>{
		if (books && !books.error){
			this.setState({results: books,
				noResults: false})
			console.log(this.state.results)
		}
		else {
			this.setState({results: '',
				noResults: true})
		}
	}).catch(err => {
		console.log(err)
	})
}


render() {

	const { query } =this.state

	return (

		 <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search"
               to="/"
              >Close</Link>
              <div className="search-books-input-wrapper">
               <input 
    			type='text'
     			placeholder='Search by title or author'
     			value={query}
     			onChange={(event) => this.updateQuery(event.target.value)}
     			/>
              </div>
            </div>
            <div className="search-books-results">
              
              {this.state.query.length === 0 && <h1> Enter your search criteria above </h1>}
              {this.state.noResults && <h1> Results could not be found </h1>}
              {this.state.results && <SearchResults results={this.state.results}/>}
              
             
            </div>
          </div>

	)
}
}
module.exports = SearchBooks