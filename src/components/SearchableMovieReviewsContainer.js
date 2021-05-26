import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleUserInput(event){
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        //calltoAPIforsearchterm
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => this.setState({reviews: data.results}))
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" onChange={event => this.handleUserInput(event)} name="searchable-term" value={this.state.searchTerm}/>                    
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )

    }

}

export default SearchableMovieReviewsContainer