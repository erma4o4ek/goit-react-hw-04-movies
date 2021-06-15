import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router";
import routes from "./routes/routes";
import AppBar from "./components/AppBar/AppBar";
const HomePage = lazy(() =>
  import("./views/HomePage/index" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviePage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/index" /* webpackChunkName: "movie-details-page" */
  )
);
const NotFoundPage = lazy(() =>
  import("./views/NotFoundPage/index" /* webpackChunkName: "not-found-page" */)
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h2>Wait...</h2>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
