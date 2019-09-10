import ImageService from "../services/image-service.js";

const _is = new ImageService()

function _drawImage() {
  let img = _is.Image
  document.body.style.backgroundImage = "${this.url}"
}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _is.addSubscriber('image', _drawImage)

    _is.getApiImages()
  }

}

