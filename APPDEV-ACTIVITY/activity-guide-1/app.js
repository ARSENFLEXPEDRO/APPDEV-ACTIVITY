document.getElementById('btn1').addEventListener('click', function() {
    let Name = document.getElementById('Name').value;
    let Address = document.getElementById('Address').value;
    let Telephone = document.getElementById('Telephone').value;
    let Major = document.getElementById('Major').value;
    document.getElementById('output1').textContent = `Name: ${Name}, Address: ${Address}, Telephone: ${Telephone}, Major: ${Major}`;
});


document.getElementById('btn2').addEventListener('click', function() {
    let sales = document.getElementById('Sales').value;
    let profit = sales *   0.23;
    document.getElementById('output2').textContent = `Profit: $${profit.toFixed(2)}`;
});


document.getElementById('btn3').addEventListener('click', function() {
    let time = document.getElementById('Time').value;
    let distance =   60 * time;
    document.getElementById('output3').textContent = `Distance: ${distance} miles`;
});


document.getElementById('btn4').addEventListener('click', function() {
    let miles = document.getElementById('Miles').value;
    let gallons = document.getElementById('Gallons').value;
    let mpg = miles / gallons;
    document.getElementById('output4').textContent = `MPG: ${mpg.toFixed(2)}`;
});


document.getElementById('btn5').addEventListener('click', function() {
    let celsius = document.getElementById('Celsius').value;
    let fahrenheit = (celsius *   9/5) +   32;
    document.getElementById('output5').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
});


document.getElementById('btn6').addEventListener('click', function() {
    let cookies = document.getElementById('Cookies').value;
    let totalCalories = cookies *   300 /   40;
    document.getElementById('output6').textContent = `Total Calories: ${totalCalories.toFixed(2)}`;
});


document.getElementById('btn7').addEventListener('click', function() {
    let males = document.getElementById('Males').value;
    let females = document.getElementById('Females').value;
    let total = males + females;
    let malePercentage = (males / total) *   100;
    let femalePercentage = (females / total) *   100;
    document.getElementById('output7').textContent = `Male Percentage: ${malePercentage.toFixed(2)}%, Female Percentage: ${femalePercentage.toFixed(2)}%`;
});




