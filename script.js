document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.querySelector('button');
  const clearButton = document.getElementById('clear');
  const resultsDiv = document.getElementById('results');

  calculateButton.addEventListener('click', (event) => {
      event.preventDefault();

      const height = parseFloat(document.getElementById('height').value);
      const weight = parseFloat(document.getElementById('weight').value);

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
          resultsDiv.innerHTML = 'Please enter valid height and weight values.';
          return;
      }

      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

      let category = '';
      if (bmi < 18.16) {
          category = 'Underweight';
      } else if (bmi >= 18.16 && bmi <= 24.9) {
          category = 'Normal Range';
      } else {
          category = 'Overweight';
      }

      resultsDiv.innerHTML = `Your BMI is ${bmi}. You are ${category}.`;
  });

  clearButton.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('height').value = '';
      document.getElementById('weight').value = '';
      resultsDiv.innerHTML = '';
  });
});
