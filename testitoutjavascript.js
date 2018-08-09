function PhotoUploadSubmit(upload){
  var x = document.getElementById("UploadSubmit");
  var y = document.createElement("img");
  y.classList.add("obj");
  y.file = upload[0];
  x.appendChild(y);

  var reader=new FileReader();
  reader.onload = (function(aImg) {return function(e) { aImg.src = e.target.result; }; }) (img);
  reader.readAsDataURL(upload[0]);
}
