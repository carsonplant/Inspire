import Quote from "../models/quote.js";


// @ts-ignore
const _quoteApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: {}
}

let _subscribers = {
	quotes: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	get Quote() {
		return _state.quotes
	}
	getApiQuote() {
		_quoteApi.get()
			.then(res => {
				let quoteData = new Quote(res.data)
				_setState('quotes', quoteData)
			})
	}

}
