import React, { Component } from "react";
import { getActors } from "../services/api";

class Cast extends Component {
  state = {
    actorsList: [],
    photos: "",
  };

  componentDidMount() {
    // console.log(this.props);
    const { movieId } = this.props.match.params;
    // console.log(movieId);

    getActors(movieId)
      .then((data) => {
        // console.log(data);
        this.setState({
          actorsList: data.cast,
        });
      })

      .catch((error) => console.log("Error!"));
  }

  render() {
    const { actorsList, photos } = this.state;
    return (
      <ul>
        {actorsList.map((actor) => (
          <li key={actor.id}>
            {/* {console.log(actor)} */}
            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt='photo' style={{width: 100}} />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
