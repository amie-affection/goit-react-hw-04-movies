import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchFilms, searchFilmByName } from "../services/api";

class MoviePage extends Component {
  state = {
    listFilms: [],
    inputValue: "",
    error: null,
    isFined: false,
  };

  componentDidMount() {
    // console.log(this.props);
    const search = new URLSearchParams(this.props.location.search).get("query");

    // console.log(searchFilms());

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
    searchFilmByName(inputValue)
      .then((data) => {
        console.log(data);
        const listFilms = data.results.map((film) => {
          const title = film.title.split(" ").join("+");
          return { ...film, titleSearch: title };
        });

        this.setState({
          listFilms,
          isFined: data.total_results ? false : true,
        });
        history.push({
          ...location,
          search: `query=${inputValue}`,
        });
      })
      .catch((error) => console.log("Error!"));
  };

  render() {
    const { listFilms, inputValue, isFined } = this.state;
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

        <ul>
          {listFilms.map(({ title, id }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: this.props.location },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        {isFined && <h3 style={{ marginLeft: "48px" }}>Not found!</h3>}
      </>
    );
  }
}

export default MoviePage;
