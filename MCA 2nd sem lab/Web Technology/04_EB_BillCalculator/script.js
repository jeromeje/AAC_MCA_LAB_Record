function calculateBill() {
    var unitsInput = document.getElementById("units");
    var resultOutput = document.getElementById("result");
    // Validate if the input is a positive number
    var units = parseFloat(unitsInput.value);
    if (isNaN(units) || units < 0) {
        resultOutput.innerHTML = "Please enter a valid number of units.";
        return;
    }
    if (units < 500) {
        var perUnitRate = 10; var billAmount = units * perUnitRate;
    }
    else {
        var perUnitRate = 20; var billAmount = units * perUnitRate;
    }
    resultOutput.innerHTML = "Your EB bill amount is: ₹" +
        billAmount.toFixed(2);
}
