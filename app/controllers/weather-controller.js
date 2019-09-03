import WeatherService from "../services/weather-service.js";

var _weatherService = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//TODO Complete rendering data to the screen
function _drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	let weather = _weatherService.Weather
	let template = weather.Template
	document.getElementById('weather').innerHTML = template

}

export default class WeatherController {
	constructor() {
		_weatherService.addSubscriber('weather', _drawWeather)
		_weatherService.getApiWeather()
	}

}
