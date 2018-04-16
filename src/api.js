import axios from 'axios';

const weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = 'dd1af900ad19547abc8aad64aa8f1d81';
const wikiApiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

export function fetchWeather(city) {
  return axios.get(weatherApiUrl, {
    params: {
      APPID: APPID,
      q: city,
      units: 'metric',
    }
  });
}

export function fetchWikiIntro(city) {
  return axios.get(wikiApiUrl + city, {
    params: {
      origin: '*',
      format: 'json',
      action: 'query',
    }
  });
}