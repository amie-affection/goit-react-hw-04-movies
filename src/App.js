import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "./homePage/HomePage";
import MoviePage from './moviePage/MoviePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviePage} />
          {/* <Route path="/books/:title" component={OneBookPage} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
