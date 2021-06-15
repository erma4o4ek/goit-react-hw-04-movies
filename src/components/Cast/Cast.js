import React, { Component } from "react";
import apiMovie from "../../services/apiMovie";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiMovie.fetchMovieCast(movieId).then(({ cast }) => {
      this.setState({
        cast: [...cast],
      });
    });
  }

  render() {
    const { cast } = this.state;

    return (
      <ul>
        {cast.map(({ credit_id, profile_path, character, name }) => (
          <li key={credit_id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              width="200"
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
