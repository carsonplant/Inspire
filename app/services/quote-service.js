import Quote from "../models/quote.js";


// @ts-ignore
const _quoteApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: []
}

let _subscribers = {
	quotes: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {
	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}
	get Quote() {
		return _state.quotes.map(q => new Quote(q))
	}
	getApiQuote() {
		_quoteApi.get()
			.then(res => {
				let quoteData = res.data.quote.map(q => new Quote(q))
				_setState('quotes', quoteData)
			})
	}

}
