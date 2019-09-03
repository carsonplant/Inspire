export default class Background {
  constructor(data) {
    this.url = data.url
  }
  get Template() {
    return `
    document.body.style.backgroundImage = "url(${this.url})";
  `
  }

}