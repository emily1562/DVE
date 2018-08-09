// To get it to show under the survey button//
function SurveyButton() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// // To get it to turn dark when clicked on
// function makeDarkGrey(x){
//   x.style.backgroundColor= "#8585ad"; //Dark Grey color//
// }
//test

function FunctionTest() {
  if (document.getElementById("TestText").innerHTML != ""){
 document.getElementById("TestText").innerHTML = "";
  }
else{document.getElementById("TestText").innerHTML = "test";
}
}
