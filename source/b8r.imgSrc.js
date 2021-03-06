/**
# imgSrc
Copyright ©2016-2017 Tonio Loewald

    imgSrc(img, url)

Gracefully populates an `<img>` element's src attribute to a url,
sets the element to `opacity: 0`, and then fads it in when the image
is loaded.
*/

module.exports = function imageSrc(img, url, opacity){
  if(!getComputedStyle(img).transition) {
    img.style.transition = '0.25s ease-out';
  }
  const image = new Image();
  img.style.opacity = 0;
  image.src = url;
  image.onload = () => img.style.opacity = opacity || 1;
  img.setAttribute('src', url);
}