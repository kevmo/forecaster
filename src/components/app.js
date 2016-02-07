import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherBar from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>

        <SearchBar />
        <WeatherBar />

      </div>
    );
  }
}
