import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props
    console.log('inside review component', review)

    return (
      <div>
        <li>{review.text} <button onClick={() => this.props.deleteReview(review.id)}> X </button></li>
      </div>
    );
  }

};

export default Review;
