// Hides Input Div
document.getElementById("input").style.visibility = "hidden";


// Hides All Inputs
function resetInputs() {
    document.getElementById("lbsInput").style.display = "none";
    document.getElementById("kgInput").style.display = "none";
    document.getElementById("ozInput").style.display = "none";
    document.getElementById("usTonInput").style.display = "none";
    document.getElementById("gbTonInput").style.display = "none";
    document.getElementById("gramsInput").style.display = "none";
}

// Makes Input Div Visible
function inputVisible() {
    document.getElementById("input").style.visibility = "visible";
}


function getCurrentInput(clicked_id) {
    document.getElementById(clicked_id + "Input").style.display = "block";
}

function resetForm() {
    document.getElementById("myForm").reset();
}


// Goes through clicked dropdown options
function showInput(clicked_id) {

    if (clicked_id === "grams") {

        // Hides All Inputs
        resetInputs(); 

        // Makes Input Visible
        inputVisible();

        // Makes Grams Input Visible
        getCurrentInput(clicked_id);
        
        // Clear form
        resetForm();

    } else if (clicked_id === "lbs") {

        // Hides All Inputs
        resetInputs(); 

        // Makes Input Visible
        inputVisible();

        // Makes Pounds Input Visible
        getCurrentInput(clicked_id);
        
        // Clear form
        resetForm();

    } else if (clicked_id === "kg") {

        // Hides All Inputs
        resetInputs(); 

        // Makes Input Visible
        inputVisible();

        // Makes Kilograms Input Visible
        getCurrentInput(clicked_id);

        // Clear form
        resetForm();

    } else if (clicked_id === "oz"){

        // Hides All Inputs
        resetInputs(); 

        // Makes Input Visible
        inputVisible();

        // Makes Ounces Input Visible
        getCurrentInput(clicked_id);

        // Clear form
        resetForm();

    } else if (clicked_id === "usTon"){

        // Hides All Inputs
        resetInputs(); 

        // Makes Input Visible
        inputVisible();

        // Makes Ounces Input Visible
        getCurrentInput(clicked_id);

        // Clear form
        resetForm();

    } else if (clicked_id === "gbTon"){

        // Hides All Inputs
        resetInputs(); 

        // Makes Input Visible
        inputVisible();

        // Makes Ounces Input Visible
        getCurrentInput(clicked_id);

        // Clear form
        resetForm();

    }

}

