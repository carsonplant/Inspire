

export default class Quote {
  constructor(data) {
    this.id = data.id
    this.author = data.author
    this.body = data.body
  }

  get Template() {

    return `
      <h4>"${this.body}"</h4>
      <p>-${this.author}</p>
    `
  }
}