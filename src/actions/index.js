import axios from 'axios';

const API_KEY = '47754178a53e24ddc36bbf5a9d865009';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city},us`;

    // "request"?
    const response = axios.get(URL);

    console.log("RESPONSE:", response)
    return {
        type: FETCH_WEATHER,
        payload: response
    }
}
