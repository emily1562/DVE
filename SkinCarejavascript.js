// To get it to show under the survey button//
function SurveyButton() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// calling each things from the survey
var SkinType = "test";
var Concern = "";

function Oily(){
SkinType = "Oily";
if (document.getElementById("Oily").style.backgroundColor === "#d6d6c2") {
 document.getElementById("Oily").style.backgroundColor = "black";}
}


function Dry(){
SkinType = "Dry";
}

function Combination(){
SkinType = "Combination";
}

function AcneBlemishes(){
Concern = "Acne & Blemishes";
}

function AntiAging(){
  Concern = "Anti-Aging";
}

function Others(){
  Concern = "Others";
}
// info showed for survey resultss


//oily and acne donee
function Submit(){
  if (SkinType == "Oily" && Concern == "Acne & Blemishes") {
  document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
  <br><img src="DeepCleans.jpg">
    <br> Tatcha The Deep Cleanse, price 38
    <br>Find it at <a href="https://www.sephora.com/product/the-deep-cleanse-P427536?skuId=2023646&icid2=products%20grid:p427536">Sephora</a>.
    <br><br><img src="CeraVeFoam.jpg">
    <br>CeraVe Foaming Facial Cleanser, Price $11
    <br>Find it at <a href="https://www.target.com/p/cerave-foaming-facial-cleanser-for-normal-to-oily-skin-fragrance-free-16oz/-/A-51148110 ">Target</a>.
` ;
  }
  //Oily and anti-aging donee
  else if(SkinType == "Oily" && Concern == "Anti-Aging"){
    document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
    <br><img src="Aveeno.jpg">
    <br>Aveeno Absolutely Ageless Facial Nourishing Anti-Aging Cleanser, Price $8
    <br>Find it at <a href="https://www.target.com/p/aveeno-174-absolutely-ageless-153-facial-nourishing-anti-aging-cleanser-5-2-fl-oz/-/A-49119447">Target</a>.
    <br><br><img src="LotusYouth.jpg">
    <br>Fresh Lotus Youth Preserve Moisturizer, $45
    <br>Find it at <a href="https://www.sephora.com/product/lotus-youth-preserve-face-cream-with-super-7-complex-P377123?skuId=1488352&icid2=products%20grid:p377123">Sephora</a>.`;
  }
  //Oily and Others donee donee
  else if(SkinType == "Oily" && Concern == "Others"){
    document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
    <br><img src="CeraVeFoam.jpg">
    <br>CeraVe Foaming Facial Cleanser, Price $11
    <br>Find it at <a href="https://www.target.com/p/cerave-foaming-facial-cleanser-for-normal-to-oily-skin-fragrance-free-16oz/-/A-51148110 ">Target</a>.
    <img src="Cucumber.jpg">
    <br>Kiehl's since 1851 Cucumber Herbal Alcohol-Free Toner, Price $16
    <br>Find it at <a href="https://www.sephora.com/product/cucumber-herbal-alcohol-free-toner-P422250?icid2=products%20grid:p422250:product">Sephora</a>.
    `;
  }//Dry and Acne done done
  else if (SkinType == "Dry" && Concern == "Acne & Blemishes") {
      document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
      <br><img src="DeepCleans.jpg">
      <br> Tatcha The Deep Cleanse, price 38
      <br>Find it at <a href="https://www.sephora.com/product/the-deep-cleanse-P427536?skuId=2023646&icid2=products%20grid:p427536">Sephora</a>.
    <br><br><img src="Clean&Clear.jpg">
      <br>Clean & Clear Essentials Dual Action Facial Moisturizer, Price $5
      <br>Find it at <a href="https://www.target.com/p/clean-clear-essentials-dual-action-facial-moisturizer-4-fl-oz/-/A-14656153">Target</a>. `

      ;
  }//dry and AntiAging done donee
  else if(SkinType == "Dry" && Concern == "Anti-Aging"){
      document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
      <br><img src="DeepCleans.jpg">
      <br> Tatcha The Deep Cleanse, price 38
      <br>Find it at <a href="https://www.sephora.com/product/the-deep-cleanse-P427536?skuId=2023646&icid2=products%20grid:p427536">Sephora</a>.
      <br><br><img src="LotusYouth.jpg">
      <br>Fresh Lotus Youth Preserve Moisturizer, $45
      <br>Find it at <a href="https://www.sephora.com/product/lotus-youth-preserve-face-cream-with-super-7-complex-P377123?skuId=1488352&icid2=products%20grid:p377123">Sephora</a>.
      `;
  }//dry and others donee donee
  else if(SkinType == "Dry" && Concern == "Others"){
      document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
      <br><img src="CeraVeHydrating.jpg">
      <br>CeraVe Hydrating Facial Cleanser, Price $11
      <br>Find it at <a href="https://www.target.com/p/cerave-hydrating-facial-cleanser-for-normal-to-dry-skin-fragrance-free-12oz/-/A-13977968">Target</a>.
      <br><br><img src="AveenoUltra.jpg">
      <br>Aveeno Ultra Calming Foaming Cleanser for Sensitive Skin, Price $7
      <br>Find it at <a href="https://www.target.com/p/aveeno-174-ultra-calming-174-foaming-cleanser-for-sensitive-skin-6-fl-oz/-/A-11537197">Target</a>.
      `;
  }//combination and Acne donee donee
  else if (SkinType == "Combination" && Concern == "Acne & Blemishes") {
    document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
    <br><img src="NeutrogenaAcne.jxr">
    <br>Neutrogena Oil Free Acne Wash, Price $5-$7
    <br>Find it at <a href="https://www.target.com/p/neutrogena-174-oil-free-acne-wash-9-1oz/-/A-12921121">Target</a>.
    <br><br><img src="DeepCleans.jpg">
    <br> Tatcha The Deep Cleanse, price 38
    <br>Find it at <a href="https://www.sephora.com/product/the-deep-cleanse-P427536?skuId=2023646&icid2=products%20grid:p427536">Sephora</a>.
    `;
  }//combination and Anti-aging done donee
  else if(SkinType == "Combination" && Concern == "Anti-Aging"){
    document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
    <br><img src="Renewal.jpg">
    <br>Burt’s Bees Renewal Cleanser, Price $9
    <br>Find it at <a href="https://www.target.com/p/burt-s-bees-renewal-cleanser-6-oz/-/A-16367046">Target</a>.
    <br><br><img src="Aveeno.jpg">
    <br>Aveeno Absolutely Ageless Facial Nourishing Anti-Aging Cleanser, Price $8
    <br>Find it at <a href="https://www.target.com/p/aveeno-174-absolutely-ageless-153-facial-nourishing-anti-aging-cleanser-5-2-fl-oz/-/A-49119447">Target</a>.

    `;
  }//combination and other
  else if (SkinType == "Combination" && Concern == "Others") {
      document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
      <br><img src="CeraVeFoam.jpg">
      <br>CeraVe Foaming Facial Cleanser, Price $11
      <br>Find it at <a href="https://www.target.com/p/cerave-foaming-facial-cleanser-for-normal-to-oily-skin-fragrance-free-16oz/-/A-51148110 ">Target</a>.
      <br><br><img src="L'Oreal.jpg">
      <br>L'Oreal® Paris Exfoliate & Refine Pores Pure Clay Mask, price 10$
      <br>Find it at <a href="https://www.target.com/p/l-oreal-174-paris-exfoliate-refine-pores-pure-clay-mask-1-7oz/-/A-50852224">Target</a>.
      `;
  }
  else {
      document.getElementById("Results").innerHTML = "end" + SkinType + Concern;
  }
}

/* test/example incasee code messes upp
function FunctionTest() {
  if (document.getElementById("TestText").innerHTML != ""){
 document.getElementById("TestText").innerHTML = "";
  }
else{document.getElementById("TestText").innerHTML = "test";
}
}*/

//skin Care sort by...

//Cleanser
function FunctionCleanser() {
  if (document.getElementById("CleanserTexts").innerHTML != ""){
 document.getElementById("CleanserTexts").innerHTML = "";
  }
else{document.getElementById("CleanserTexts").innerHTML = `
<!-- Acne and Blemishes -->
<p><h3>Acne and Blemishes</p></h3>
<img src="BosciaCleanOil.jpg">
<br>Boscia Makeup Breakup Cool Cleansing Oil, Price $10-$32
<br>Find it at <a href="https://www.sephora.com/product/makeup-breakup-cool-cleansing-oil-P254604?skuId=1227891&icid2=products%20grid:p254604">Sephora</a>.
<br><br><img src="BioreCharcoal.jpg">
<br>Biore Deep Charcoal Cleanser, Price $6
<br>Find it at <a href="https://www.target.com/p/biore-deep-charcoal-cleanser-6-7-oz/-/A-14934060">Target</a>.
<br><br><img src="NeutrogenaAcne.jxr">
<br>Neutrogena Oil Free Acne Wash, Price $5-$7
<br>Find it at <a href="https://www.target.com/p/neutrogena-174-oil-free-acne-wash-9-1oz/-/A-12921121">Target</a>.

<!-- AntiAging-->
<p><h3>Anti-Aging</p></h3>
<img src="Aveeno.jpg">
<br>Aveeno Absolutely Ageless Facial Nourishing Anti-Aging Cleanser, Price $8
<br>Find it at <a href="https://www.target.com/p/aveeno-174-absolutely-ageless-153-facial-nourishing-anti-aging-cleanser-5-2-fl-oz/-/A-49119447">Target</a>.
<br><br><img src="Renewal.jpg">
<br>Burt’s Bees Renewal Cleanser, Price $9
<br>Find it at <a href="https://www.target.com/p/burt-s-bees-renewal-cleanser-6-oz/-/A-16367046">Target</a>.

<!-- otherss-->
<p><h3>other(redness)</p></h3>
<img src="CeraVeFoam.jpg">
<br>CeraVe Foaming Facial Cleanser, Price $11
<br>Find it at <a href="https://www.target.com/p/cerave-foaming-facial-cleanser-for-normal-to-oily-skin-fragrance-free-16oz/-/A-51148110 ">Target</a>.
<br><br><img src="CeraVeHydrating.jpg">
<br>CeraVe Hydrating Facial Cleanser, Price $11
<br>Find it at <a href="https://www.target.com/p/cerave-hydrating-facial-cleanser-for-normal-to-dry-skin-fragrance-free-12oz/-/A-13977968">Target</a>.
<br><br><img src="AveenoUltra.jpg">
<br>Aveeno Ultra Calming Foaming Cleanser for Sensitive Skin, Price $7
<br>Find it at <a href="https://www.target.com/p/aveeno-174-ultra-calming-174-foaming-cleanser-for-sensitive-skin-6-fl-oz/-/A-11537197">Target</a>.
`;
}
}

//Exfoliator
function FunctionExfoliators() {
  if (document.getElementById("ExfoliatorsText").innerHTML != ""){
 document.getElementById("ExfoliatorsText").innerHTML = "";
  }
else{document.getElementById("ExfoliatorsText").innerHTML = `

<!-- Acne and Blemishes -->
<p><h3>Acne and Blemishes</p></h3>
<img src="KateEx.jxr">
<br>Kate Somerville ExfoliKate® Intensive Exfoliating Treatment, Price $24
<br>Find it at <a href="https://www.sephora.com/product/exfolikate-intensive-exfoliating-treatment-P232915?skuId=1284629&icid2=products%20grid:p232915">Sephora/a>.
<br><br><img src="UmbrianClay.jpg">
<br>FRESH Umbrian Clay Pore Purifying Face Exfoliator, Price $33
<br>Find it at <a href="https://www.sephora.com/product/umbrian-clay-mattifying-face-exfoliant-P379065?skuId=1524073&keyword=FRESH%20Umbrian%20Clay%20Pore%20Purifying%20Face%20Exfoliator">Sephora</a>.
<br><br><img src="St.IvesScrub.jpg">
<br>St. Ives Blemish Control Face Scrub Apricot, Price $3
<br>Find it at <a href="https://www.target.com/p/st-ives-blemish-control-face-scrub-apricot-6-oz/-/A-11129467">Target</a>.

<!-- otherss-->
<p><h3>other(Brightner)</p></h3>
<img src="AveenoSkinB .jpg">
<br>Aveeno® Positively Radiant® Skin Brightening Daily Scrub, Price $6
<br>Find it at <a href="https://www.target.com/p/aveeno-174-positively-radiant-174-skin-brightening-daily-scrub-5-oz/-/A-11537365">Target</a>.
`
;}
}

//Moisturizer
function FunctionMoisturizers() {
  if (document.getElementById("MoisturizersText").innerHTML != ""){
 document.getElementById("MoisturizersText").innerHTML = "";
  }
else{document.getElementById("MoisturizersText").innerHTML = `

<!-- Acne and Blemishes -->
<p><h3>Acne and Blemishes</p></h3>
<img src="Clean&Clear.jpg">
<br>Clean & Clear Essentials Dual Action Facial Moisturizer, Price $5
<br>Find it at <a href="https://www.target.com/p/clean-clear-essentials-dual-action-facial-moisturizer-4-fl-oz/-/A-14656153">Target</a>.
<br><br><img src="AveenoClear.png">
<br>Aveeno® Clear Complexion Blemish Treatment Daily Moisturizer, Price- $13.79
<br>Find it at <a href="https://www.target.com/p/aveeno-174-clear-complexion-blemish-treatment-daily-moisturizer-4oz/-/A-11048717">Target</a>.

<!-- AntiAging -->
<p><h3>Anti-Aging</p></h3>
<img src="LotusYouth.jpg">
<br>Fresh Lotus Youth Preserve Moisturizer, $45
<br>Find it at <a href="https://www.sephora.com/product/lotus-youth-preserve-face-cream-with-super-7-complex-P377123?skuId=1488352&icid2=products%20grid:p377123">Sephora</a>.
<br><br><img src="NeutrogenaMoist.png">
<br>Neutrogena Oil-Free Daily Facial Moisturizer, Price $8
<br>Find it at <a href="https://www.target.com/p/neutrogena-oil-free-daily-facial-moisturizer-spf-15-4-fl-oz/-/A-10772533">Target</a>.

<!-- otherss-->
<p><h3>other(redness)</p></h3>
<img src="FRESHUmbrian.jpg">
<br>FRESH Umbrian Clay Oil-Free Lotion, Price $36
<br>Find it at <a href="https://www.sephora.com/product/umbrian-clay-oil-free-lotion-P185408?skuId=976043&keyword=FRESH%20Umbrian%20Clay%20Oil-Free%20Lotion">Sephora</a>.
`;
}
}

//OTHERS
function FunctionOthers() {
  if (document.getElementById("OthersText").innerHTML != ""){
 document.getElementById("OthersText").innerHTML = "";
  }
else{document.getElementById("OthersText").innerHTML = `

<!-- Acne and Blemishes -->
<p><h3>Acne and Blemishes</p></h3>
<img src="SUPERMUD.jpg">
<br>SUPERMUD® Activated Charcoal Treatment, Price $59
<br>Find it at <a href="https://www.sephora.com/product/super-mud-clearing-treatment-P376409?icid2=products%20grid:p376409:product">Sephora</a>.
<br><br><img src="FaceWipes.jpg">
<br>Neutrogena Makeup Remover Cleansing Towelettes & Face Wipes, Price $5
<br>Find it at <a href="https://www.target.com/p/neutrogena-makeup-remover-cleansing-towelettes-face-wipes-25ct/-/A-11536492">Target</a>.
<br><br><img src="TomatoesDetox.png">
<br>Yes To Tomatoes Detoxifying Charcoal Paper Mask, Price $3
<br>Find it at <a href="https://www.target.com/p/yes-to-174-tomatoes-detoxifying-charcoal-paper-mask-1ct/-/A-50938799">Target</a>.

<!-- otherss-->
<p><h3>other(Toner)</p></h3>
<img src="Cucumber.jpg">
<br>Kiehl's since 1851 Cucumber Herbal Alcohol-Free Toner, Price $16
<br>Find it at <a href="https://www.sephora.com/product/cucumber-herbal-alcohol-free-toner-P422250?icid2=products%20grid:p422250:product">Sephora</a>.
<br><br><img src="WitchHazel.jpg">
<br>Thayers Witch Hazel Toner, Rose Petal, Price $10
<br>Find it at <a href="https://www.target.com/p/thayers-witch-hazel-alcohol-free-toner-rose-petal-12oz/-/A-51091143">Target</a>.
`;
}
}
