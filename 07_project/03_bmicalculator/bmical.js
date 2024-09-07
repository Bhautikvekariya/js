const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const guideweight = document.querySelector("#weight-guide"); // Fix the typo here

  // Validate height and weight
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight.`;
  } else {
    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiCategory = "";

    // Determine BMI category
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = 'Normal weight';
    } else  {
      bmiCategory = 'Overweight';
    }

    // Display BMI result and category
    results.innerHTML = `<span>Your BMI is ${bmi} (${bmiCategory})</span>`;

    // Update the weight guide
    guideweight.innerHTML = `
      <h3>BMI Weight Guide</h3>
      <p>Underweight = Less than 18.5</p>
      <p>Normal Range = 18.5 to 24.9</p>
      <p>Overweight = 25 to 29.9</p>

    `;
  }
});


