import React, {Component} from 'react';
import {countries} from 'country-data';

import Map from '../Components/Map'

class Result extends Component {

  windDegree = (degree) => {
    let val = Math.round((degree / 22.5) + 0.5);
    let compassDegree = ["North", "North-northeast", "Northeast", "East-northeast", "East", "East-southeast",
      "Southeast", "South-southeast", "South", "South-southwest", "Southwest", "West-southwest", "West",
      "West-northwest", "Northwest", "North-northwest"];
    return compassDegree[val % 16];
  };

  render() {
    if (!this.props.weatherLoaded) {
      return null;
    }

    const weatherIconUrl = 'http://openweathermap.org/img/w/' + this.props.weatherData.weather[0].icon + '.png';

    return (
      <section id="result-container">
        <div id="weather-container" className="card">
          <div>
            <div id="card-header-flex">
              <div>
                <h2 id="city-name">{this.props.weatherData.name}</h2>
                <span>, {countries[this.props.weatherData.sys.country].name}</span>
              </div>
              <div>
                <img id="weather-icon" src={weatherIconUrl} alt="Weather Icon"/>
              </div>
              <div>
              </div>
            </div>
            <hr/>
            <p id="weather-description">
              {this.props.weatherData.weather[0].description.charAt(0).toUpperCase() + this.props.weatherData.weather[0].description.slice(1)}
            </p>
            <div className="temperature-flex">
              <span id="weather-temperature">{Math.round(this.props.weatherData.main.temp * 10) / 10 + ' °C'}</span>
              <div id="min-max-temperature">
                <span id='max-temperature'>Max: {this.props.weatherData.main.temp_max + ' °C'}</span>
                <span id='min-temperature'>Min: {this.props.weatherData.main.temp_min + ' °C'}</span>
              </div>
            </div>
            <hr/>
            <table id="weather-table">
              <tbody>
              <tr>
                <td><strong>Wind Speed:</strong></td>
                <td>{Math.round(this.props.weatherData.wind.speed * 10) / 10 + ' m/s (' + this.windDegree(this.props.weatherData.wind.deg) + ')'} m/s</td>
              </tr>
              <tr>
                <td><strong>Air pressure:</strong></td>
                <td>{this.props.weatherData.main.pressure} hPa</td>
              </tr>
              <tr>
                <td><strong>Air humidity:</strong></td>
                <td>{this.props.weatherData.main.humidity} %</td>
              </tr>
              <tr>
                <td><strong>Coordinates:</strong></td>
                <td>[{this.props.weatherData.coord.lat},&nbsp;
                  {this.props.weatherData.coord.lon}]
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div>
            <footer>
              <strong>from <a
                href={`http://openweathermap.com/city/` + this.props.weatherData.id}>OpenWeatherMap.com</a></strong>
            </footer>
          </div>
        </div>
        <div id="map-container" className="card">
          <Map coord={this.props.weatherData.coord} city={this.props.weatherData.name}/>
          <footer>
            <strong>from <a
              href={`https://www.google.com/maps/@${this.props.weatherData.coord.lat},${this.props.weatherData.coord.lon},10z`}>Maps.Google.com</a>
            </strong>
          </footer>
        </div>
        <div id="wiki-container" className="card">
          <p id="wiki-extract">{this.props.wikiData.extract}</p>
          <footer>
            <strong>from <a
              href={`https://en.wikipedia.org/wiki/` + this.props.weatherData.name}>Wikipedia.com</a></strong>
          </footer>
        </div>
      </section>
    );
  }
}


export default Result;