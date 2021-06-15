import React, { Component } from "react";

import apiMovie from "../../services/apiMovie";

export default class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiMovie.fetchMovieReviews(movieId).then(({ results }) => {
      this.setState({
        reviews: [...results],
      });
    });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        <ul>
          {reviews.length !== 0 &&
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
