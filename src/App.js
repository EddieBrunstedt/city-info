import React, {Component} from 'react';
import './App.css';

//API
import {fetchWeather, fetchWikiIntro} from './api';

//Components
import Form from './Components/Form';
import Result from './Components/Result';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherLoaded: false,
      weatherData: {},
      wikiData: {}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const city = document.getElementById('city-input').value;
    fetchWeather(city)
      .then((response) => {
        console.log('WEATHER API RESPONSE: ', response.data);
        fetchWikiIntro(response.data.name)
          .then((wikiResponse) => {
            this.setState({weatherData: response.data, weatherLoaded: true, wikiData: wikiResponse.data});
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='root-container'>
        <h1 className="center-text" id='heading'>City Info</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <Result weatherLoaded={this.state.weatherLoaded} weatherData={this.state.weatherData}
                wikiData={this.state.wikiData}/>
        {this.state.weatherLoaded &&
        <footer>
          By: <a id='link-to-motherland' href="http://eddiebrunstedt.com">Eddie Brunstedt</a>
        </footer>
        }
      </div>
    );
  }
}

export default App;
