import React, { Component } from "react";
import apiMovie from "../../services/apiMovie";
import Container from "../../components/Container/index";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    apiMovie
      .fetchTrendingMovies()
      .then(({ data }) => this.setState({ movies: data.results }));
  }

  render() {
    const { location } = this.props;

    return (
      <Container>
        <h2>Trending movies</h2>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
                {movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default HomePage;
