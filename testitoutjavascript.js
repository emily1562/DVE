function handleFiles(files) {
var preview = document.getElementById('holder');
  // for (var i = 0; i < files.length; i++) {
  //   var file = files[i];

  //   if (!file.type.startsWith('image/')){ continue }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = files[0];
    preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(files[0]);
  // }
}

// Literally Canvas Code
$(document).ready(function() {
  var lc = LC.init(
    document.getElementsByClassName('literally images-in-drawing')[0]);
  var newImage = new Image()
  newImage.src = '/_static/sample_image.png';
  lc.saveShape(LC.createShape('Image', {x: 10, y: 10, image: newImage}));
});

// adding images
$(document).ready(function() {
   var backgroundImage = new Image()
   backgroundImage.src = 'LightSkinColor.png';

   var lc = LC.init(
       document.getElementsByClassName('literally backgrounds')[0],
       {
         backgroundShapes: [
           LC.createShape(
             'Image', {x: 20, y: 20, image: backgroundImage, scale: 2}),
           LC.createShape(
             'Text', {
               x: 200, y: 200, text: "I am in the background",
               font: "bold 12px Helvetica"
             })
         ]
       });
   // the background image is not included in the shape list that is
   // saved/loaded here
   var localStorageKey = 'drawing-with-background'
   if (localStorage.getItem(localStorageKey)) {
     lc.loadSnapshotJSON(localStorage.getItem(localStorageKey));
   }
   lc.on('drawingChange', function() {
     localStorage.setItem(localStorageKey, lc.getSnapshotJSON());
   });
 });
