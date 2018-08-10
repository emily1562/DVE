function handleFiles(files) {
var preview = document.getElementById('holder');


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
