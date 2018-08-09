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

/*test
function FunctionTest() {
  if (document.getElementById("TestText").innerHTML != ""){
 document.getElementById("TestText").innerHTML = "";
  }
else{document.getElementById("TestText").innerHTML = "test";
}
}*/

//skin Care

//Cleanser
function FunctionCleanser() {
  if (document.getElementById("CleanserTexts").innerHTML != ""){
 document.getElementById("CleanserTexts").innerHTML = "";
  }
else{document.getElementById("CleanserTexts").innerHTML = `CLEANSER`;
}
}

//Exfoliator
function FunctionExfoliators() {
  if (document.getElementById("ExfoliatorsText").innerHTML != ""){
 document.getElementById("ExfoliatorsText").innerHTML = "";
  }
else{document.getElementById("ExfoliatorsText").innerHTML = `EXFOLIATOR`;
}
}

//Moisturizer
function FunctionMoisturizers() {
  if (document.getElementById("MoisturizersText").innerHTML != ""){
 document.getElementById("MoisturizersText").innerHTML = "";
  }
else{document.getElementById("MoisturizersText").innerHTML = `MOISTURIZER`;
}
}

//OTHERS
function FunctionOthers() {
  if (document.getElementById("OthersText").innerHTML != ""){
 document.getElementById("OthersText").innerHTML = "";
  }
else{document.getElementById("OthersText").innerHTML = `OTHERS`;
}
}
