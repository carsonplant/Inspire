

export default class Quote {
  constructor(data) {
    this.id = data.id
    this.author = data.author
    this.body = data.body
  }

  get Template() {

    return `
      <h4 style="text-shadow: 2px 2px black; color: white">"${this.body}"</h4>
      <p style="text-shadow: 2px 2px black; color: white">-${this.author}</p>
    `
  }
}