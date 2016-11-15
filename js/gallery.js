// Stores the location of all the images and captions globally
var images = [
    'img/flying-car-593.jpg',
    "img/flying-car-m400.jpg",
    "img/log200711a.jpg",
    "img/flyingCar-article.jpg",
    "img/saucercarSplash_450x325.jpg",
    "img/high-road-aerocar.jpg"
  ];
var captions = [
    'Flying Car 593',
    "Flying Car M400",
    "Plane and Car",
    "Flying Plane Bottom",
    "Flying Saucer",
    "Flying Aerocar"
  ];

// This runs after the page finishes loading
window.addEventListener('load',init,false);
function init() {
  var imgOneAnchor = document.getElementById('one');
  // http://stackoverflow.com/questions/9643311/pass-string-parameter-in-an-onclick-function
  imgOneAnchor.addEventListener('click',function(){
    expandImage(event, 0);}
      ,false);
  var imgTwoAnchor = document.getElementById('two');
  imgTwoAnchor.addEventListener('click',function(){
    expandImage(event, 1);}
      ,false);
  var imgThreeAnchor = document.getElementById('three');
  imgThreeAnchor.addEventListener('click',function(){
    expandImage(event, 2);}
      ,false);
  var imgFourAnchor = document.getElementById('four');
  imgFourAnchor.addEventListener('click',function(){
    expandImage(event, 3);}
      ,false);
  var imgFiveAnchor = document.getElementById('five');
  imgFiveAnchor.addEventListener('click',function(){
    expandImage(event, 4);}
      ,false);
  var imgsixAnchor = document.getElementById('six');
  imgsixAnchor.addEventListener('click',function(){
    expandImage(event, 5);}
      ,false);
}

// Load image that was clicked at full size
function expandImage(event, imgNumber) {
  event.preventDefault();

  // Remove any items that are currently on the div tag at the moment
  while(imgHere.hasChildNodes()) {
    imgHere.removeChild(imgHere.lastChild);
  }

  // Call the two functions to add the image and corresponding caption
  createImage(images[imgNumber]);
  createCaption(imgNumber);
}

// Create the image requested based off of index pos of images array passed in
function createImage(imgRequested){
  // http://stackoverflow.com/questions/12287856/insert-image-object-into-html
  // Append the image to the imgHere div
  var img = new Image();
  img.setAttribute("class","largeImage");
  img.setAttribute("alt","Aircraft Picture");
  img.setAttribute("width", "auto");
  img.setAttribute("height", "auto");
  img.src = imgRequested;
  var pic = document.getElementById('imgHere');
  pic.appendChild(img);
}

// Create the caption requested based off of index pos of images array passed in
// Append the text below the image as a caption
function createCaption(imgNumber){
  var para = document.createElement("p");
  var node = document.createTextNode(captions[imgNumber]);
  para.appendChild(node);
  var element = document.getElementById("imgHere");
  element.appendChild(para);
}
