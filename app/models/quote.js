

export default class Quote {
  constructor(data) {
    this.id = data.id
    this.author = data.author
    this.body = data.body
  }

  get Template{

    return `
    <div class="col"></div>
    <div class="col-8 text-center">
    <div>
    The Quote
    </div>
    </div>
    <div class="col"></div>
    `
  }
}