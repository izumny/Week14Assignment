import React, {Component} from 'react';

export default class Review extends Component {
    render() {
        const { text } = this.props; //destructure the text props from the CMP props
        return (
            <div>
                <p>{text}</p>
            </div>
        );      // text prop is to be a string containing the review text passed from parent CMP
    }
}
