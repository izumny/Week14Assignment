import React, { Component } from 'react'
import Movie from './Movie'         //movieList is a container of movie components

export default class MovieList extends Component { 
    render() {                       //this class renders a <div> and contents
        const { movies } = this.props;  //destructures the movies prop from CMP props
        return (
            <div className="movie-list">
                {movies.map((movie) => (           //.map() method creates movies array
                    <div key={movie.id} className="movie-container"> 
                    <Movie movie={movie} />     
                    </div>
                ))}                                
            </div>          //unique attribute
        );
    }
}
