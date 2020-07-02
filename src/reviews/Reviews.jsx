import React, { Component } from "react";
import { getReviews } from "../services/api";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    // console.log(this.props);
    const { movieId } = this.props.match.params;
    getReviews(movieId)
      .then((data) => this.setState({ reviews: data.results }))
      .catch((error) => console.log("Error!"));
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <>
            <p>{reviews}</p>
          </>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }
}

export default Reviews;
