import React, { Component } from 'react'

export default class ReviewForm extends Component {
    constructor(props) {        //implement a constructor,
        super(props);           //call, implementing the constructor for a component subclass
        this.state = {          //assign this state directly cuz of the constructor
            reviewText: '',     //initializing local state which is review
        };
    }
    handleSubmit = (e) => {         //handleSubmit function
        e.preventDefault();         //event preventDefault() method to prevent refresh page
        const { reviewText } = this.state; //extracted the reviewtext property from CMP state
        if (reviewText.trim() !== '') { //.trim() method check if its not an empty string.
            this.props.onAddReview(reviewText); //onAddReview function, passed to the CMP as a prop
            this.setState({ reviewText: ''}); //after adding reveiw, textarea is emptied
        }
    };
    render() {
        const { reviewText } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    value={reviewText}
                    onChange={(e) => this.setState({ reviewText: e.target.value })}
                    placeholder="Write a review"
                /> <br></br>
                <button type="submit">Submit</button>
            </form>
        );             //destructure the "reviewText" prop from the CMP state to access to the textarea element
    }                  //when form is submitted, the handleSubmit method of the CMP should be called
}                      //in the textarea ele,when user changed text area, update reviewText propaty
                       //when the form is submitted, the handlesubmit method is called to handle the submission
