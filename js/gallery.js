function expandOne(event, imgNumber) {
  event.preventDefault();

  // Remove any items that are currently on the div tag at the moment
  while(imgHere.hasChildNodes()) {
    imgHere.removeChild(imgHere.lastChild);
  }

  // Obtain the image needed to show
  var imgRequested = loadImgArray(imgNumber);

  // http://stackoverflow.com/questions/12287856/insert-image-object-into-html
  // Append the image to the imgHere div
  var img = new Image();
  img.setAttribute("id","Aircraft");
  img.setAttribute("alt","Aircraft Pic");
  img.setAttribute("width", "auto");
  img.setAttribute("height", "auto");
  var pic = document.getElementById('imgHere');
  pic.appendChild(img);
  img.src = imgRequested;
}

// Stores the location of all the images
// Each onclick will pass it a specific paramter
// and that index coresponds to a certian image to return and load
function loadImgArray(imgNumber) {
  var images = [
    'img/flying-car-593.jpg',
    "Volvo",
    "BMW"
  ];

  return images[imgNumber];
}

// This runs after the page finishes loading
function init() {
  var imgOneAnchor = document.getElementById('one');
  // http://stackoverflow.com/questions/9643311/pass-string-parameter-in-an-onclick-function
  imgOneAnchor.addEventListener('click',function(){
    expandOne(event, 0);}
      ,false);
}

window.addEventListener('load',init,false);
