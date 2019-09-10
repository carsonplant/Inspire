


// @ts-ignore
const _imgApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
	timeout: 6000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

//TODO create methods to retrieve data trigger the update window when it is complete
export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Image() {
		return _state.image
	}

	getApiImages() {
		_imgApi.get()
			.then(res => {
				_setState('image', res.data.large_url)
			})
	}
}
