export default class Background {
  constructor(data) {
    this.url = data.url
  }
  get Template() {
    return `
    document.body.style.backgroundImage = "${this.url}";
  `
  }

}