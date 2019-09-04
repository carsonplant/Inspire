

export default class Quote {
  constructor(data) {
    this.id = data.id
    this.author = data.author
    this.body = data.body
  }

  get Template() {

    return `
      <h1>${this.body}</h1>
      <h3>-${this.author}</h3>
    `
  }
}