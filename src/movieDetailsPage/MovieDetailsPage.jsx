import React, { Component } from "react";
import { getInfoAboutFilm } from "../services/api";

class MovieDetailsPage extends Component {
  state = {
    poster: "",
    info: "",
    error: null,
  };

  componentDidMount() {
    // console.log(this.props.match.params);
    const { info } = this.props.match.params;

    getInfoAboutFilm(info)
      .then((data) => {
        //   console.log(data)
        this.setState({ poster: data.results.poster_path, info: data.results.title });
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { poster, info } = this.state;

    return (
      <>
            <p>{poster}</p>
            <p>{info}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
