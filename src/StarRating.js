import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';        //rendering star icons from react-icons

export default class StarRating extends Component {
  constructor(props) {          //implement a constructor,
    super(props);
    this.state = {              //this.state initialized with rating and hover to manage 
      rating: 0,
      hoverRating: 0,
    };
  }

  handleRatingChange = (newRating) => {         //this method is called when a star is clicked
    this.setState({ rating: newRating });       //updates the rating state with the new passed as arg 
  };

  handleHoverRatingChange = (hoverRating) => {  // this method is called when the mouse enters or leaves star
    this.setState({ hoverRating });     //updates the hoverrating state with hovered or zero when leave 
  };

  render() {                                    //render method
    const { rating, hoverRating } = this.state;     
            //destructure the both property from the CMP state to access to set the value
    return (
      <div>
        <p>Rate this movie:</p>
        {[1, 2, 3, 4, 5].map((star) => (        //map method iterates over an array of number of stars
          <span
            key={star}              //unique identifier
            style={{ cursor: 'pointer', color: star <= (hoverRating || rating) ? '#ffc107' : '#e4e5e9' }}
            onClick={() => this.handleRatingChange(star)}
            onMouseEnter={() => this.handleHoverRatingChange(star)} //pass the star as arg
            onMouseLeave={() => this.handleHoverRatingChange(0)} //when the mouse leave, reset to zero
          >
            <FaStar />
          </span>
        ))}
      </div>
    );
  }
}















/*
const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="star-rating">
            <p>How would you rate this movie?</p>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                            />
                            <FaStar
                            className="star"
                            size={25}
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                    );
            })}
        </div>
    )
};

export default StarRating;
*/
