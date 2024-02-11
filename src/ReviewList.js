import React, {Component} from 'react'
import Review from './Review'   //ReviewList is container of review components

export default class ReviewList extends Component {
    render () {
        const { reviews } = this.props;  ////destructures the review prop from CMP props
        return(
            <div>
            <h3>Reviews:</h3>
            {reviews.map((review, index) => (   //.map() method creates review array
            <Review key={index} text={review} />
             ))}
        </div>
        );
    }
}
