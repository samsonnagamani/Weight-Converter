// Hide Output Cards
document.getElementById("output").style.visibility = "hidden";

// Pounds Converter
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  document.getElementById("lbsOutput1").style.display = "none";
  let lbs = e.target.value;

  // Converts values
  document.getElementById("gramsOutput").innerHTML = lbs * 453.592;
  document.getElementById("kgOutput").innerHTML = lbs * 0.453592;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});

// Grams Converter
document.getElementById("gramsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  document.getElementById("gramsOutput1").style.display = "none";
  let grams = e.target.value;

  // Converts values
  document.getElementById("poundsOutput").innerHTML = grams * 0.00220462;
  document.getElementById("kgOutput").innerHTML = grams * 0.001;
  document.getElementById("ozOutput").innerHTML = grams * 0.035274;
});

// Kilograms Converter
document.getElementById("kgInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  document.getElementById("kgOutput1").style.display = "none";
  let kg = e.target.value;

  // Converts values
  document.getElementById("gramsOutput").innerHTML = kg * 1000;
  document.getElementById("poundsOutput").innerHTML = kg * 2.20462;
  document.getElementById("ozOutput").innerHTML = kg * 35.274;
});

// Ounces Converter
document.getElementById("ozInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  document.getElementById("ozOutput1").style.display = "none";
  let oz = e.target.value;

  // Converts values
  document.getElementById("gramsOutput").innerHTML = oz * 28.3495;
  document.getElementById("kgOutput").innerHTML = oz * 0.0283495;
  document.getElementById("poundsOutput").innerHTML = oz * 0.0625;
});