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

var SkinType = "test";
var Concern = "";

function Oily(){
SkinType = "Oily";
}

function Dry(){
SkinType = "Dry";
}

function Combination(){
SKinType = "Combination";
}

function AcneBlemishes(){
Concern = "Acne & Blemishes";
}

function AntiAging(){
  Concern = "Anti-Aging";
}

function Others(){
  Concern = "Others (Pores, Dullness, etc.)";
}

function Submit(){
  if (SkinType == "Oily" && Concern == "Acne & Blemishes") {
    document.getElementById("Results").innerHTML = "oil, acne and blemishes test";
  }
  else if(SkinType == "Oily" && Concern == "Anti-Aging"){
    document.getElementById("Results").innerHTML = "oil, antiaging test";
  }
  else if(SkinType == "Oily" && Concern == "Others"){
    document.getElementById("Results").innerHTML = "oil, others Test";
  }
  else if (SkinType == "Dry" && Concern == "Acne & Blemishes") {
      document.getElementById("Results").innerHTML = "Dry, acne and blemishes test";
  }
  else if(SkinType == "Dry" && Concern == "Anti-Aging"){
      document.getElementById("Results").innerHTML = "Dry, AntiAging Test";
  }
  else if(SkinType == "Dry" && Concern == "Others"){
      document.getElementById("Results").innerHTML = "Dry, others Test";
  }
  else if (SkinType == "Combination" && Concern == "Acne & Blemishes") {
    document.getElementById("Results").innerHTML = "combination, acne and blemishes test";
  }
  else if(SkinType == "Combination" && Concern == "Anti-Aging"){
    document.getElementById("Results").innerHTML = "Dry, AntiAging Test";
  }
  else if (SkinType == "Oily" && Concern == "Others") {
      document.getElementById("Results").innerHTML = "Combination, others Test";
  }
  else {
      document.getElementById("Results").innerHTML = "end" + SkinType + Concern;
  }
}
