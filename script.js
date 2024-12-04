document.getElementById("tempForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get input values
    const temp = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const resultField = document.getElementById("result");
  
    // Validate input
    if (isNaN(temp)) {
      resultField.value = "Invalid input!";
      return;
    }
  
    let result;
  
    // Conversion logic
    if (unit === "Fahrenheit") {
      result = `${((temp - 32) * 5 / 9).toFixed(2)} °C`;
    } else if (unit === "Celsius") {
      result = `${((temp * 9 / 5) + 32).toFixed(2)} °F`;
    } else if (unit === "Kelvin") {
      result = `${(temp - 273.15).toFixed(2)} °C`;
    }
  
    // Display the result
    resultField.value = result;
  });
  