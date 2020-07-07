import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchFilms } from "../services/api";

class HomePage extends Component {
  state = {
    listFilms: [],
    error: null,
  };

  componentDidMount() {
    searchFilms()
      .then((data) => this.setState({ listFilms: data.results }))
      .catch((error) => console.log("Error!"));
  }

  render() {
    const { listFilms } = this.state;
    // console.log(listFilms);

    return (
      <>
        <h3 style={{ marginLeft: "50px" }}>Trending today</h3>
        {listFilms && (
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
        )}
      </>
    );
  }
}

export default HomePage;
