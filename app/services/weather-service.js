import Weather from "../models/weather.js";

// @ts-ignore
const weatherApi = axios.create({
	baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
	timeout: 3000
});

let _state = {
	weather: {}
}

let _subscribers = {
	weather: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


export default class WeatherService {

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	get Weather() {
		return _state.weather
	}

	getApiWeather() {
		console.log('Calling the Weatherman')
		weatherApi.get()
			.then(res => {
				let weatherData = new Weather(res.data)
				_setState('weather', weatherData)
			})
	}
}
