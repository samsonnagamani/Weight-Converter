// Hides Input Div
document.getElementById("input").style.visibility = "hidden";

// Goes through clicked dropdown options
function showInput(clicked_id) {
    if (clicked_id === "grams") {
        // Makes Input Visible
        document.getElementById("input").style.visibility = "visible";

        // Makes Grams Input Visible
        document.getElementById("gramsInput").style.display = "block";

        // Hides the rest of the inputs
        document.getElementById("lbsInput").style.display = "none";
        document.getElementById("kgInput").style.display = "none";
        document.getElementById("ozInput").style.display = "none";
        
        // Clear form
        document.getElementById('myForm').reset();

    } else if (clicked_id === "lbs") {
        // Makes Input Visible
        document.getElementById("input").style.visibility = "visible";

        // Makes Pounds Input Visible
        document.getElementById("lbsInput").style.display = "block";

        // Hides the rest of the inputs
        document.getElementById("gramsInput").style.display = "none";
        document.getElementById("kgInput").style.display = "none";
        document.getElementById("ozInput").style.display = "none"; 
        
        // Clear form
        document.getElementById('myForm').reset();
    } else if (clicked_id === "kg") {
        // Makes Input Visible
        document.getElementById("input").style.visibility = "visible";

        // Makes Kilograms Input Visible
        document.getElementById("kgInput").style.display = "block";

        // Hides the rest of the inputs
        document.getElementById("lbsInput").style.display = "none";
        document.getElementById("gramsInput").style.display = "none";
        document.getElementById("ozInput").style.display = "none";

        // Clear form
        document.getElementById('myForm').reset();
    } else {
        // Makes Input Visible
        document.getElementById("input").style.visibility = "visible";

        // Makes Ounces Input Visible
        document.getElementById("ozInput").style.display = "block";

        // Hides the rest of the inputs
        document.getElementById("kgInput").style.display = "none";
        document.getElementById("lbsInput").style.display = "none";
        document.getElementById("gramsInput").style.display = "none";

        // Clear form
        document.getElementById('myForm').reset();
    }

}

