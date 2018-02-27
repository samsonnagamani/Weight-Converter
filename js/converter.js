// Hide Output Cards
document.getElementById("output").style.visibility = "hidden";

// Resets the display of the outputs
function resetOutputs() {
  document.getElementById("lbsOutput1").style.display = "block";
  document.getElementById("gramsOutput1").style.display = "block";
  document.getElementById("kgOutput1").style.display = "block";
  document.getElementById("ozOutput1").style.display = "block";
  document.getElementById("usTonOutput1").style.display = "block";
  document.getElementById("gbTonOutput1").style.display = "block";
}   

// Makes Output Div Visible
function outputVisible() {
  document.getElementById("output").style.visibility = "visible";
}



// Pounds Converter
document.getElementById("lbsInput").addEventListener("input", function(e) {

  // Runs resetOutputs function
  resetOutputs();

  // Makes output div visible
  outputVisible();

  // Removes this div's display attributes
  document.getElementById("lbsOutput1").style.display = "none";
  let lbs = e.target.value;

  // Converts values
  document.getElementById("gramsOutput").innerHTML = lbs * 453.592;
  document.getElementById("kgOutput").innerHTML = lbs * 0.453592;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
  document.getElementById("usTonOutput").innerHTML = lbs * 0.0005;
  document.getElementById("gbTonOutput").innerHTML = lbs * 0.000446429;
});

// Grams Converter
document.getElementById("gramsInput").addEventListener("input", function(e) {

  // Runs resetOutputs function
  resetOutputs();

  // Makes output div visible
  outputVisible();

  // Removes this div's display attributes
  document.getElementById("gramsOutput1").style.display = "none";
  let grams = e.target.value;

  // Converts values
  document.getElementById("lbsOutput").innerHTML = grams * 0.00220462;
  document.getElementById("kgOutput").innerHTML = grams * 0.001;
  document.getElementById("ozOutput").innerHTML = grams * 0.035274;
  document.getElementById("usTonOutput").innerHTML = grams * 1.10231236914e-6;
  document.getElementById("gbTonOutput").innerHTML = grams * 9.8421e-7;
});

// Kilograms Converter
document.getElementById("kgInput").addEventListener("input", function(e) {

  // Runs resetOutputs function
  resetOutputs();

  // Makes output div visible
  outputVisible();

  // Removes this div's display attributes
  document.getElementById("kgOutput1").style.display = "none";
  let kg = e.target.value;

  // Converts values
  document.getElementById("gramsOutput").innerHTML = kg * 1000;
  document.getElementById("lbsOutput").innerHTML = kg * 2.20462;
  document.getElementById("ozOutput").innerHTML = kg * 35.274;
  document.getElementById("usTonOutput").innerHTML = kg * 0.00110231;
  document.getElementById("gbTonOutput").innerHTML = kg * 0.000984207;
});

// Ounces Converter
document.getElementById("ozInput").addEventListener("input", function(e) {

  // Runs resetOutputs function
  resetOutputs();

  // Makes output div visible
  outputVisible();

  // Removes this div's display attributes
  document.getElementById("ozOutput1").style.display = "none";
  let oz = e.target.value;

  // Converts values
  document.getElementById("gramsOutput").innerHTML = oz * 28.3495;
  document.getElementById("kgOutput").innerHTML = oz * 0.0283495;
  document.getElementById("lbsOutput").innerHTML = oz * 0.0625;
  document.getElementById("usTonOutput").innerHTML = oz * 3.125e-5;
  document.getElementById("gbTonOutput").innerHTML = oz * 2.7902e-5;
});

// Short Ton Converter
document.getElementById("usTonInput").addEventListener("input", function(e) {

  // Runs resetOutputs function
  resetOutputs();

  // Makes output div visible
  outputVisible();

  // Removes this div's display attributes
  document.getElementById("usTonOutput1").style.display = "none";
  let us = e.target.value;

  // Converts values
  document.getElementById("gramsOutput").innerHTML = us * 907185;
  document.getElementById("kgOutput").innerHTML = us * 907.185;
  document.getElementById("lbsOutput").innerHTML = us * 2000;
  document.getElementById("ozOutput").innerHTML = us * 32000;
});

// Long Ton Converter
document.getElementById("gbTonInput").addEventListener("input", function(e) {

  // Runs resetOutputs function
  resetOutputs();

  // Makes output div visible
  outputVisible();

  // Removes this div's display attributes
  document.getElementById("gbTonOutput1").style.display = "none";
  let gb = e.target.value;

  // Converts values
  document.getElementById("gramsOutput").innerHTML = gb * 1.016e+6;
  document.getElementById("kgOutput").innerHTML = gb * 1016.05;
  document.getElementById("lbsOutput").innerHTML = gb * 2240;
  document.getElementById("ozOutput").innerHTML = gb * 35840;
});
