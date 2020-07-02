import React, { Component } from "react";
import { getActors } from "../services/api";

class Cast extends Component {
  state = {
    actorsList: [],
  };

  componentDidMount() {
    console.log(this.props);
    const { movieID } = this.props.match.params;
    getActors(movieID)
      .then((data) => this.setState({ actorsList: data.results }))
      .catch((error) => console.log(error));
  }

  render() {
    const { actorsList } = this.state;
      return (
          <ul>
              {actorsList.map((actor) => (
                  <li key={actor.id}>{actor.name}</li>
              ))}
        </ul>
    )
  }
}

export default Cast;
