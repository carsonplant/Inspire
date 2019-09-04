import QuoteService from "../services/quote-service.js";

let _qs = new QuoteService()

function _drawQuote() {
  let quote = _qs.Quote
  let template = quote.Template
  document.getElementById('quote').innerHTML = template
}
//TODO Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quotes', _drawQuote)

    _qs.getApiQuote()
  }
}
