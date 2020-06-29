import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import Header from "./header/Header";
import MoviePage from './moviePage/MoviePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route path="/books/:title" component={OneBookPage} /> */}
          <Route path="/movie" component={MoviePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
