var React = require("react");
import * as BooksAPI from "./BooksAPI";
import BookView from "./BookView.js";

var Link = require("react-router-dom").Link;

function SearchResults (props) {

return (
<ol className="books-grid">	
{props.results.map((book) => {
return(
	 <BookView books={book} key={book.id}
	 allBooks={props.allBooks}
	 func={props.changeState}>
	 </BookView>
     )
     })}
 </ol>
)
}

class SearchBooks extends React.Component {
constructor(props){
	super(props);
	this.state = {
		query: "",
		results: "",
		noResults: ""
	};
	
	this.updateQuery = this.updateQuery.bind(this);
}



 componentDidMount(){
	
}


updateQuery = (query) =>{
	this.setState({query: query});

	BooksAPI.search(this.state.query, 6).then( books =>{
		if (books && !books.error){
			this.setState({results: books,
			noResults: false})
		}
		else {
			this.setState({results: "",
				noResults: true});
		}
		
	}).catch(err => {
		
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
    			type="text"
     			placeholder="Search by title or author"
     			value={query}
     			onChange={(event) => this.updateQuery(event.target.value)}
     			/>
              </div>
            </div>
            <div className="search-books-results">
              
              {this.state.query.length === 0 && <h1> Enter your search criteria above </h1>}
              {this.state.noResults && <h1> Results could not be found </h1>}
              {this.state.results && <SearchResults allBooks={this.props.state.allbooks} results={this.state.results} changeState={this.props.changeState}/>}
              
             
            </div>
          </div>

	)
}
}
module.exports = SearchBooks