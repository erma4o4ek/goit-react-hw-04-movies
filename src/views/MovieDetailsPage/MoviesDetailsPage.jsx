import React, { Component } from "react";
import { withRouter, NavLink, Route, Switch } from "react-router-dom";
import apiMovie from "../../services/apiMovie";
import styles from "../MovieDetailsPage/MoviesDetailsPage.module.css";
import routes from "../../routes/routes";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    movie: { genres: [] },
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    apiMovie.fetchMovieDetails(movieId).then((resData) => {
      this.setState({ movie: resData });
    });
  }
  handelClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    const { url } = match;

    return (
      <>
        <button onClick={this.handelClick} type="button" className="btn">
          Go back
        </button>
        <div className={styles.card}>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              width="300"
              alt={movie.title}
            />
          )}
          <div className="descr">
            <h2>
              {movie.title} ({movie.release_date})
            </h2>
            <p>User score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={(styles.text, styles.list)}>
              {movie.genres.map(({ id, name }) => (
                <li className={styles.genre} key={id}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.addInf}>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path={routes.cast} component={Cast} />
          <Route exact path={routes.reviews} component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
