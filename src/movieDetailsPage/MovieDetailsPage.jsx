import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { getInfoAboutFilm, getActors, getReviews } from "../services/api";
import AdditionalInformation from "../additionalInformation/AdditionalInformation";
import Reviews from "../reviews/Reviews";
import Cast from "../cast/Cast";

class MovieDetailsPage extends Component {
  state = {
    id: "",
    poster: "",
    title: "",
    userscore: "",
    overview: "",
    genresList: [],
    error: null,
  };

  componentDidMount() {
    // console.log(this.props.match.params);
    const { movieId } = this.props.match.params;
    // console.log(movieId);

    getInfoAboutFilm(movieId)
      .then((data) => {
        // console.log(data);
        this.setState({
          poster: `https://image.tmdb.org/t/p/w200/${data.poster_path}`,
          title: data.title,
          userscore: data.vote_average * 10,
          overview: data.overview,
          genresList: data.genres,
          id: data.id,
        });
      })
      .catch((error) => this.setState({ error }));
  }

  handleGoBack = () => {
    console.log("back!");
    console.log(this.props.location);

    const { state } = this.props.location;

    if (state && state.from) {
      console.log(this.props.location.state.from);

      return this.props.history.push(state.from);
    }
    this.props.history.push("/");
  };

  render() {
    const { poster, title, userscore, overview, genresList, id } = this.state;

    return (
      <>
        <button
          style={{ marginBottom: "20px" }}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "30px" }}>
            <img src={poster} />
          </div>

          <div>
            <h2 style={{ marginTop: "0px" }}>{title}</h2>
            <p>User Score: {userscore}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <ul style={{ listStyle: "none", padding: "0px" }}>
              <h2 style={{ marginBottom: "4px" }}>Genres</h2>
              {genresList.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <AdditionalInformation id={id} />
        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
