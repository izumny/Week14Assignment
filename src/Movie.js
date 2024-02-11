import React, { Component } from 'react'
import StarRating from './StarRating'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'

export default class Movie extends Component {
    constructor(props) { //implement a constructor, 
        super(props);   //call, implementing the constructor for a CMP subclass
        this.state = {      //assign this.state directly (constructor)
            reviews: [],    //initializing local state which is 'reviews array'
        };
    };
    addReview = (review) => {       //addReview method
        this.setState((prevState) => ({reviews:[...prevState.reviews, review]}));
    };                              // setState = need re-render to update class CMP from previous state

    render() {
        const {movie} = this.props;     //render examine this.prop and this.state
        const {reviews} = this.state;
    
        return(
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.image}/>
                <p className="overview">{movie.overview}</p>
                <p>Rating: {movie.rating}</p>
                <StarRating />
                <ReviewList reviews={reviews} />
                <ReviewForm onAddReview={this.addReview} />
            </div>
        );
    }
}

        
