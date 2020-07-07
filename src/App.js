import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/Header";

const AsyncHomePage = lazy(() =>
  import("./homePage/HomePage" /* webpackChunkName: 'HomePage' */)
);

const AsyncMoviePage = lazy(() =>
  import("./moviePage/MoviePage" /* webpackChunkName: 'MoviePage' */)
);

const AsyncMovieDetailsPage = lazy(() =>
  import(
    "./movieDetailsPage/MovieDetailsPage" /* webpackChunkName: 'MovieDetailsPage' */
  )
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Suspense fallback={<h2>Loading ...</h2>}>
          <Switch>
            <Route exact path="/" component={AsyncHomePage} />
            <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
            <Route path="/movies" component={AsyncMoviePage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
