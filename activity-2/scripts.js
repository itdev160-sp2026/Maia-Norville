function checkAge() {
  let ageInput = document.getElementById("ageInput").value.trim();
  let resultDiv = document.getElementById("result");
  resultDiv.className = ""; // reset

  if (ageInput === "") {
    resultDiv.textContent = "Please enter your age";
    resultDiv.className = "invalid";
    return;
  }

  let age = Number(ageInput);

  if (isNaN(age) || age < 0 || age > 150) {
    resultDiv.textContent = "Invalid age - enter a number 0-150";
    resultDiv.className = "invalid";
    return;
  }

  if (age >= 18) {
    resultDiv.textContent = `You are ${age} - Adult`;
    resultDiv.className = "adult";
  } else {
    resultDiv.textContent = `You are ${age} - Minor`;
    resultDiv.className = "minor";
  }
}