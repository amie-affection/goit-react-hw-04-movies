import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchFilms, searchFilmByName } from "../services/api";

class MoviePage extends Component {
  state = {
    listFilms: null,
    inputValue: "",
    error: null,
  };

  componentDidMount() {
    console.log(this.props);
    const search = new URLSearchParams(this.props.location.search).get(
      "trending"
    );

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
    const { history, location } = this.props;
    searchFilmByName(inputValue).then((data) => {
      console.log(data);
      const listFilms = data.results.map((film) => {
        const title = film.title.split(" ").join("+");
        return { ...film, titleSearch: title };
      });

      this.setState({ listFilms });
      history.push({
        ...location,
        search: `searchQuery=${inputValue}`,
      });
    });
  };

  render() {
    const { listFilms, inputValue } = this.state;
    return (
      <>
        <form style={{ marginLeft: "40px" }} onSubmit={this.handleSubmit}>
          <input
            style={{
              height: "30px",
              marginRight: "10px",
              paddingLeft: "10px",
            }}
            type="text"
            name="name"
            placeholder="enter name of film"
            value={inputValue}
            onChange={this.handleChange}
          />
          <button style={{ height: "36px", width: "60px" }} type="submit">
            Find
          </button>
        </form>

        {listFilms && (
          <ul>
            {listFilms.map(({ title, id }) => (
              <li key={id}>
                <Link to={`${title}`}>{title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviePage;
