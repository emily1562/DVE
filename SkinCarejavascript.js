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
    <div class= "polaroid2">
    <br><img src="DeepCleans.jpg" alt="Tatcha The Deep Cleanse" style="width:100%">
    <div class="center"><div class="container">
    <br> Tatcha The Deep Cleanse<br>price $38
    <br>Find it at <a href="https://www.sephora.com/product/the-deep-cleanse-P427536?skuId=2023646&icid2=products%20grid:p427536">Sephora</a>.
    </div></div></div>

    <div class= "polaroid2">
    <br><img src="CeraVeFoam.jpg" alt= "CeraVe Foaming Facial Cleanser" style="width:100%">
    <div class="center"><div class="container">
    <br>CeraVe Foaming Facial Cleanser<br>Price $11
    <br>Find it at <a href="https://www.target.com/p/cerave-foaming-facial-cleanser-for-normal-to-oily-skin-fragrance-free-16oz/-/A-51148110 ">Target</a>.
    </div></div></div>
` ;
  }
  //Oily and anti-aging donee
  else if(SkinType == "Oily" && Concern == "Anti-Aging"){
    document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
    <div class= "polaroid2">
    <br><img src="Aveeno.jpg" alt= "Aveeno Absolutely Ageless Facial Nourishing Anti-Aging Cleanser" style="width:100%">
    <div class="center"><div class="container">
    <br>Aveeno Absolutely Ageless Facial Nourishing Anti-Aging Cleanser<br>Price $8
    <br>Find it at <a href="https://www.target.com/p/aveeno-174-absolutely-ageless-153-facial-nourishing-anti-aging-cleanser-5-2-fl-oz/-/A-49119447">Target</a>.
    </div></div></div>

    <div class= "polaroid2">
    <br><br><img src="LotusYouth.jpg" alt= "Fresh Lotus Youth Preserve Moisturizer" style="width:100%">
    <div class="center"><div class="container">
    <br>Fresh Lotus Youth Preserve Moisturizer<br>$45
    <br>Find it at <a href="https://www.sephora.com/product/lotus-youth-preserve-face-cream-with-super-7-complex-P377123?skuId=1488352&icid2=products%20grid:p377123">Sephora</a>.
    </div></div></div> `;
  }
  //Oily and Others donee donee
  else if(SkinType == "Oily" && Concern == "Others"){
    document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
    <div class= "polaroid2">
    <br><img src="CeraVeFoam.jpg" alt= "CeraVe Foaming Facial Cleanser" style="width:100%">
    <div class="center"><div class="container">
    <br>CeraVe Foaming Facial Cleanser<br>Price $11
    <br>Find it at <a href="https://www.target.com/p/cerave-foaming-facial-cleanser-for-normal-to-oily-skin-fragrance-free-16oz/-/A-51148110 ">Target</a>.
    </div></div></div>

    <div class= "polaroid2">
    <img src="Cucumber.jpg" alt= "Kiehl's Cucumber Herbal Alcohol-Free Toner" style="width:100%">
    <div class="center"><div class="container">
    <br>Kiehl's since 1851 Cucumber Herbal Alcohol-Free Toner<br>Price $16
    <br>Find it at <a href="https://www.sephora.com/product/cucumber-herbal-alcohol-free-toner-P422250?icid2=products%20grid:p422250:product">Sephora</a>.
    </div></div></div>
    `;
  }//Dry and Acne done done
  else if (SkinType == "Dry" && Concern == "Acne & Blemishes") {
      document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
      <div class= "polaroid2">
      <br><img src="DeepCleans.jpg" alt= "Tatcha The Deep Cleanse" style="width:100%">
      <div class="center"><div class="container">
      <br> Tatcha The Deep Cleanse<br>price $38
      <br>Find it at <a href="https://www.sephora.com/product/the-deep-cleanse-P427536?skuId=2023646&icid2=products%20grid:p427536">Sephora</a>.
      </div></div></div>

      <div class= "polaroid2">
      <img src="Clean&Clear.jpg" alt= "Clean & Clear Essentials Dual Action Facial Moisturizer" style="width:100%">
      <div class="center"><div class="container">
      <br>Clean & Clear Essentials Dual Action Facial Moisturizer<br>Price $5
      <br>Find it at <a href="https://www.target.com/p/clean-clear-essentials-dual-action-facial-moisturizer-4-fl-oz/-/A-14656153">Target</a>.
      </div></div></div>
      `;
  }//dry and AntiAging done donee
  else if(SkinType == "Dry" && Concern == "Anti-Aging"){
      document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
      <div class= "polaroid2">
      <br><img src="DeepCleans.jpg" alt= "Tatcha The Deep Cleanse" style="width:100%">
      <div class="center"><div class="container">
      <br> Tatcha The Deep Cleanse<br>price $38
      <br>Find it at <a href="https://www.sephora.com/product/the-deep-cleanse-P427536?skuId=2023646&icid2=products%20grid:p427536">Sephora</a>.
      </div></div></div>

      <div class= "polaroid2">
      <br><br><img src="LotusYouth.jpg" alt= "Fresh Lotus Youth Preserve Moisturizer" style="width:100%">
      <div class="center"><div class="container">
      <br>Fresh Lotus Youth Preserve Moisturizer<br>$45
      <br>Find it at <a href="https://www.sephora.com/product/lotus-youth-preserve-face-cream-with-super-7-complex-P377123?skuId=1488352&icid2=products%20grid:p377123">Sephora</a>.
      </div></div></div>
      `;
  }//dry and others donee donee
  else if(SkinType == "Dry" && Concern == "Others"){
      document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
      <div class= "polaroid2">
      <br><img src="CeraVeHydrating.jpg" alt= "CeraVe Hydrating Facial Cleanser" style="width:100%">
      <div class="center"><div class="container">
      <br>CeraVe Hydrating Facial Cleanser<br>Price $11
      <br>Find it at <a href="https://www.target.com/p/cerave-hydrating-facial-cleanser-for-normal-to-dry-skin-fragrance-free-12oz/-/A-13977968">Target</a>.
      </div></div></div>

      <div class= "polaroid2">
      <br><br><img src="AveenoUltra.jpg" alt= "Aveeno Ultra Calming Foaming Cleanser for Sensitive Skin" style="width:100%">
      <div class="center"><div class="container">
      <br>Aveeno Ultra Calming Foaming Cleanser for Sensitive Skin<br>Price $7
      <br>Find it at <a href="https://www.target.com/p/aveeno-174-ultra-calming-174-foaming-cleanser-for-sensitive-skin-6-fl-oz/-/A-11537197">Target</a>.
      </div></div></div>
      `;
  }//combination and Acne donee donee
  else if (SkinType == "Combination" && Concern == "Acne & Blemishes") {
    document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
    <div class= "polaroid2">
    <br><img src="NeutrogenaAcne.jxr" alt= "Neutrogena Oil Free Acne Wash" style="width:100%">
    <div class="center"><div class="container">
    <br>Neutrogena Oil Free Acne Wash<br>Price $5-$7
    <br>Find it at <a href="https://www.target.com/p/neutrogena-174-oil-free-acne-wash-9-1oz/-/A-12921121">Target</a>.
    </div></div></div>

    <div class= "polaroid2">
    <br><br><img src="DeepCleans.jpg" alt= "Tatcha The Deep Cleanse" style="width:100%">
    <div class="center"><div class="container">
    <br> Tatcha The Deep Cleanse<br>price 38
    <br>Find it at <a href="https://www.sephora.com/product/the-deep-cleanse-P427536?skuId=2023646&icid2=products%20grid:p427536">Sephora</a>.
    </div></div></div>
    `;
  }//combination and Anti-aging done donee
  else if(SkinType == "Combination" && Concern == "Anti-Aging"){
    document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
    <div class= "polaroid2">
    <br><img src="Renewal.jpg" alt= "Burt’s Bees Renewal Cleanser" style="width:100%">
    <div class="center"><div class="container">
    <br>Burt’s Bees Renewal Cleanser<br>Price $9
    <br>Find it at <a href="https://www.target.com/p/burt-s-bees-renewal-cleanser-6-oz/-/A-16367046">Target</a>.
    </div></div></div>

    <div class= "polaroid2">
    <br><br><img src="Aveeno.jpg" alt= "Aveeno Absolutely Ageless Facial Nourishing Anti-Aging Cleanser" style="width:100%">
    <div class="center"><div class="container">
    <br>Aveeno Absolutely Ageless Facial Nourishing Anti-Aging Cleanser<br>Price $8
    <br>Find it at <a href="https://www.target.com/p/aveeno-174-absolutely-ageless-153-facial-nourishing-anti-aging-cleanser-5-2-fl-oz/-/A-49119447">Target</a>.
    </div></div></div>
    `;
  }//combination and other
  else if (SkinType == "Combination" && Concern == "Others") {
      document.getElementById("Results").innerHTML = `<h3>Recommended products based on survey reults:</h3>
      <div class= "polaroid2">
      <br><img src="CeraVeFoam.jpg" alt= "CeraVe Foaming Facial Cleanser" style="width:100%">
      <div class="center"><div class="container">
      <br>CeraVe Foaming Facial Cleanser<br>Price $11
      <br>Find it at <a href="https://www.target.com/p/cerave-foaming-facial-cleanser-for-normal-to-oily-skin-fragrance-free-16oz/-/A-51148110 ">Target</a>.
      </div></div></div>

      <div class= "polaroid2">
      <br><br><img src="L'Oreal.jpg" alt= "L'Oreal® Paris Exfoliate & Refine Pores Pure Clay Mask" style="width:100%">
      <div class="center"><div class="container">
      <br>L'Oreal® Paris Exfoliate & Refine Pores Pure Clay Mask<br>Price 10$
      <br>Find it at <a href="https://www.target.com/p/l-oreal-174-paris-exfoliate-refine-pores-pure-clay-mask-1-7oz/-/A-50852224">Target</a>.
        </div></div></div>
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
<div class= "polaroid">
<img src="BosciaCleanOil.jpg" alt= "Boscia Makeup Breakup Cool Cleansing Oil" style="width:100%">
<div class="center"><div class="container">
<br>Boscia Makeup Breakup Cool Cleansing Oil<br>Price $10-$32
<br>Find it at <a href="https://www.sephora.com/product/makeup-breakup-cool-cleansing-oil-P254604?skuId=1227891&icid2=products%20grid:p254604">Sephora</a>.
</div></div></div>

<div class= "polaroid">
<br><br><img src="BioreCharcoal.jpg" alt= "Biore Deep Charcoal Cleanser" style="width:100%">
<div class="center"><div class="container">
<br>Biore Deep Charcoal Cleanser<br>Price $6
<br>Find it at <a href="https://www.target.com/p/biore-deep-charcoal-cleanser-6-7-oz/-/A-14934060">Target</a>.
</div></div></div>

<div class= "polaroid">
<br><br><img src="NeutrogenaAcne.jxr" alt= "Neutrogena Oil Free Acne Wash" style="width:100%">
<div class="center"><div class="container">
<br>Neutrogena Oil Free Acne Wash<br>Price $5-$7
<br>Find it at <a href="https://www.target.com/p/neutrogena-174-oil-free-acne-wash-9-1oz/-/A-12921121">Target</a>.
</div></div></div>

<!-- AntiAging-->
<p><h3>Anti-Aging</p></h3>
<div class= "polaroid2">
<img src="Aveeno.jpg" alt= "Aveeno Absolutely Ageless Facial Nourishing Anti-Aging Cleanser" style="width:100%">
<div class="center"><div class="container">
<br>Aveeno Absolutely Ageless Facial Nourishing Anti-Aging Cleanser<br>Price $8
<br>Find it at <a href="https://www.target.com/p/aveeno-174-absolutely-ageless-153-facial-nourishing-anti-aging-cleanser-5-2-fl-oz/-/A-49119447">Target</a>.
</div></div></div>

<div class= "polaroid2">
<img src="Renewal.jpg" alt= "Burt’s Bees Renewal Cleanser" style="width:100%">
<div class="center"><div class="container">
<br>Burt’s Bees Renewal Cleanser<br>Price $9
<br>Find it at <a href="https://www.target.com/p/burt-s-bees-renewal-cleanser-6-oz/-/A-16367046">Target</a>.
</div></div></div>

<!-- otherss-->
<p><h3>other(redness)</p></h3>
<div class= "polaroid">
<img src="CeraVeFoam.jpg" alt= "CeraVe Foaming Facial Cleanser" style="width:100%">
<div class="center"><div class="container">
<br>CeraVe Foaming Facial Cleanser<br>Price $11
<br>Find it at <a href="https://www.target.com/p/cerave-foaming-facial-cleanser-for-normal-to-oily-skin-fragrance-free-16oz/-/A-51148110 ">Target</a>.
</div></div></div>

<div class= "polaroid">
<img src="CeraVeHydrating.jpg" alt= "CeraVe Hydrating Facial Cleanser" style="width:100%">
<div class="center"><div class="container">
<br>CeraVe Hydrating Facial Cleanser<br>Price $11
<br>Find it at <a href="https://www.target.com/p/cerave-hydrating-facial-cleanser-for-normal-to-dry-skin-fragrance-free-12oz/-/A-13977968">Target</a>.
</div></div></div>

<div class= "polaroid">
<img src="AveenoUltra.jpg" alt= "Aveeno Ultra Calming Foaming Cleanser for Sensitive Skin" style="width:100%">
<div class="center"><div class="container">
<br>Aveeno Ultra Calming Foaming Cleanser for Sensitive Skin<br>Price $7
<br>Find it at <a href="https://www.target.com/p/aveeno-174-ultra-calming-174-foaming-cleanser-for-sensitive-skin-6-fl-oz/-/A-11537197">Target</a>.
</div></div></div>
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
<div class= "polaroid">
<img src="KateEx.jxr" alt= "Kate Somerville ExfoliKate® Intensive Exfoliating Treatment" style="width:100%">
<div class="center"><div class="container">
<br>Kate Somerville ExfoliKate® Intensive Exfoliating Treatment<br>Price $24
<br>Find it at <a href="https://www.sephora.com/product/exfolikate-intensive-exfoliating-treatment-P232915?skuId=1284629&icid2=products%20grid:p232915">Sephora/a>.
</div></div></div>

<div class= "polaroid">
<br><br><img src="UmbrianClay.jpg" alt= "FRESH Umbrian Clay Pore Purifying Face Exfoliator" style="width:100%">
<div class="center"><div class="container">
<br>FRESH Umbrian Clay Pore Purifying Face Exfoliator<br>Price $33
<br>Find it at <a href="https://www.sephora.com/product/umbrian-clay-mattifying-face-exfoliant-P379065?skuId=1524073&keyword=FRESH%20Umbrian%20Clay%20Pore%20Purifying%20Face%20Exfoliator">Sephora</a>.
</div></div></div>

<div class= "polaroid">
<img src="St.IvesScrub.jpg" alt= "St. Ives Blemish Control Face Scrub Apricot" style="width:100%">
<div class="center"><div class="container">
<br>St. Ives Blemish Control Face Scrub Apricot<br>Price $3
<br>Find it at <a href="https://www.target.com/p/st-ives-blemish-control-face-scrub-apricot-6-oz/-/A-11129467">Target</a>.
</div></div></div>

<!-- otherss-->
<div class= "polaroid">
<p><h3>other(Brightner)</p></h3>
<img src="AveenoSkinB .jpg"  alt= "Aveeno® Positively Radiant® Skin Brightening Daily Scrub" style="width:100%">
<div class="center"><div class="container">
<br>Aveeno® Positively Radiant® Skin Brightening Daily Scrub<br>Price $6
<br>Find it at <a href="https://www.target.com/p/aveeno-174-positively-radiant-174-skin-brightening-daily-scrub-5-oz/-/A-11537365">Target</a>.
</div></div></div>
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
<div class= "polaroid2">
<img src="Clean&Clear.jpg" alt= "Clean & Clear Essentials Dual Action Facial Moisturizer" style="width:100%">
<div class="center"><div class="container">
<br>Clean & Clear Essentials Dual Action Facial Moisturizer<br>Price $5
<br>Find it at <a href="https://www.target.com/p/clean-clear-essentials-dual-action-facial-moisturizer-4-fl-oz/-/A-14656153">Target</a>.
</div></div></div>

<div class= "polaroid2">
<img src="AveenoClear.png" alt= "Aveeno® Clear Complexion Blemish Treatment Daily Moisturizer" style="width:100%">
<div class="center"><div class="container">
<br>Aveeno® Clear Complexion Blemish Treatment Daily Moisturizer<br>Price- $13.79
<br>Find it at <a href="https://www.target.com/p/aveeno-174-clear-complexion-blemish-treatment-daily-moisturizer-4oz/-/A-11048717">Target</a>.
</div></div></div>

<!-- AntiAging -->
<p><h3>Anti-Aging</p></h3>
<div class= "polaroid2">
<img src="LotusYouth.jpg" alt= "Fresh Lotus Youth Preserve Moisturizer" style="width:100%">
<div class="center"><div class="container">
<br>Fresh Lotus Youth Preserve Moisturizer<br>$45
<br>Find it at <a href="https://www.sephora.com/product/lotus-youth-preserve-face-cream-with-super-7-complex-P377123?skuId=1488352&icid2=products%20grid:p377123">Sephora</a>.
</div></div></div>

<div class= "polaroid2">
<img src="NeutrogenaMoist.png" alt= "Neutrogena Oil-Free Daily Facial Moisturizer" style="width:100%">
<div class="center"><div class="container">
<br>Neutrogena Oil-Free Daily Facial Moisturizer<br>Price $8
<br>Find it at <a href="https://www.target.com/p/neutrogena-oil-free-daily-facial-moisturizer-spf-15-4-fl-oz/-/A-10772533">Target</a>.
</div></div></div>

<!-- otherss-->
<p><h3>other(redness)</p></h3>
<div class= "polaroid2">
<img src="FRESHUmbrian.jpg" alt= "FRESH Umbrian Clay Oil-Free Lotion" style="width:100%">
<div class="center"><div class="container">
<br>FRESH Umbrian Clay Oil-Free Lotion<br>Price $36
<br>Find it at <a href="https://www.sephora.com/product/umbrian-clay-oil-free-lotion-P185408?skuId=976043&keyword=FRESH%20Umbrian%20Clay%20Oil-Free%20Lotion">Sephora</a>.
</div></div></div>
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
<div class= "polaroid">
<img src="SUPERMUD.jpg" alt= "SUPERMUD® Activated Charcoal Treatment" style="width:100%">
<div class="center"><div class="container">
<br>SUPERMUD® Activated Charcoal Treatment<br> Price $59
<br>Find it at <a href="https://www.sephora.com/product/super-mud-clearing-treatment-P376409?icid2=products%20grid:p376409:product">Sephora</a>.
</div></div></div>

<img src="FaceWipes.jpg">
<br>Neutrogena Makeup Remover Cleansing Towelettes & Face Wipes, Price $5
<br>Find it at <a href="https://www.target.com/p/neutrogena-makeup-remover-cleansing-towelettes-face-wipes-25ct/-/A-11536492">Target</a>.

<img src="TomatoesDetox.png">
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
