import React, { Component } from "react";
import { getFilms, searchFilms } from "../services/api";

class MoviePage extends Component {
  state = {
    listFilms: null,
    inputValue: "",
    error: null,
  };

  componentDidMount() {
    const search = new URLSearchParams(this.props.search).get("trending");

    console.log(searchFilms());

    if (search) {
      this.getFilmByName(search);
    }
  }

  handleChange = ({ target }) => this.setState({ inputValue: target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;

    this.getFilmByName(inputValue);
  };

  getFilmByName = (inputValue) => {
    const { history } = this.props;
    searchFilms(inputValue).then((data) => {
      console.log(data);
    });
  };

  render() {
    const { listFilms, inputValue } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="trending"
            placeholder="enter name of film"
            value={inputValue}
            onChange={this.handleChange}
          />
          <button type="submit">Find</button>
        </form>
      </>
    );
  }
}

export default MoviePage;
