window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 5000, years: 30, rate: 3.5 };
  const userAmount = document.getElementById("loan-amount");
  userAmount.value = values.amount;
  const userYears = document.querySelector("loan-years");
  userYears.value = values.years;
  const userRate = document.querySelector("loan-rate");
  userRate.value = values.rate;
  update();


}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentValues();
  updateMonthly(CalculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const n = Math.floor(values.years * 12)
  const userRate = (values.rate / 100) / 12;
  return ((values.amount * userRate) / (1 - Math.pow((userRate + 1), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const userMonthly = document.querySelector('monthly-payment');
  userMonthly.innerText = monthly;
}
