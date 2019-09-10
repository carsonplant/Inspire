export default class Image {
  constructor(data) {
    debugger
    console.log("Image: ", data)
    this.url = data.large_url
  }
  getTemplate() {
    return `
    ${this.url};
  `
  }

}