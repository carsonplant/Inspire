import Background from "../models/image.js";


// @ts-ignore
const _imgApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: []
}

let _subscribers = {
	image: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn());
}

//TODO create methods to retrieve data trigger the update window when it is complete
export default class ImageService {

	get Image() {
		return _state.image.map(i => new Image(i))
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}
	getApiImages() {
		_imgApi.get()
			.then(res => {
				let imgData = res.data.map(i => new Image(i))
				_setState('image', imgData)
			})
	}
}
