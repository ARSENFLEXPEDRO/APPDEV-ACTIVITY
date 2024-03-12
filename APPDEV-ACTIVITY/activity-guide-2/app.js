  // Time Calculator
  function calculateTime() {
    var seconds = document.getElementById("secondsInput").value;
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(seconds / 3600);
    var days = Math.floor(seconds / 86400);
    document.getElementById("timeResult").innerHTML = "Minutes: " + minutes +
     "<br>Hours: " + hours + "<br>Days: " + days;
  }
  // Shipping Charges
  function calculateShippingCharges() {
    var weight = document.getElementById("weightInput").value;
    var charges = 0;
    
    if (weight <= 2) {
      charges = weight * 1.10;
    } else if (weight <= 6) {
      charges = weight * 2.20;
    } else if (weight <= 10) {
      charges = weight * 3.70;
    } else {
      charges = weight * 3.80;
    }
    document.getElementById("shippingResult").innerHTML = "Shipping Charges: $" 
    + charges.toFixed(2);
  }
  // Software Sales
  function calculateDiscount() {
    var packages = document.getElementById("packagesInput").value;
    var discount = 0;
    var total = 0;
    
    if (packages >= 10 && packages <= 19) {
      discount = 0.20;
    } else if (packages >= 20 && packages <= 49) {
      discount = 0.30;
    } else if (packages >= 50 && packages <= 99) {
      discount = 0.40;
    } else if (packages >= 100) {
      discount = 0.50;
    }
    total = packages * 99 * (1 - discount);
    
    document.getElementById("discountResult").innerHTML = "Discount: " + 
    (discount * 100) + "%";
    document.getElementById("totalResult").innerHTML = "Total Amount: $" + 
    total.toFixed(2);
  }
  // Mass and Weight
  function calculateWeight() {
    var mass = document.getElementById("massInput").value;
    var weight = mass * 9.8;   
    if (mass > 1000/9.8) {
      document.getElementById("weightResult").innerHTML = "The object is too heavy!";
    } else if (weight < 10) {
      document.getElementById("weightResult").innerHTML = "The object is too light!";
    } else {
      document.getElementById("weightResult").innerHTML = "Weight: " + weight.toFixed(2) + " Newtons";
    }
  }