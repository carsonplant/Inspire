import ImageService from "../services/image-service.js";

const _is = new ImageService()

function _drawImage() {
  console.log("background", _is.Image)
  let img = _is.Image
  document.body.style.backgroundImage = `url(${img})`
}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _is.addSubscriber('image', _drawImage)

    _is.getApiImages()
  }

  getImage() {
    _is.getApiImages()
  }
}

