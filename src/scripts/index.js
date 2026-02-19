// verifying that all input forms are correct
const form = document.getElementById("feedForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission for demo, just wanted to spice things things up and get desired results

  // Remove previous invalid classes
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => input.classList.remove("invalid"));

  let isValid = true;

  inputs.forEach((input) => {
    if (input.hasAttribute("required") && !input.value.trim()) {
      input.classList.add("invalid"); // highlight missing required field as thaught in this course. to improve uX
      isValid = false;
    }
  });

  if (isValid) {
    // All required fields filled — you can submit or do something here
    // console.log('Form is valid! Proceed...');
    form.submit(); // or handle via JS
  } else {
    console.log("Please fill all required fields.");
  }
});

// Save form data to localStorage on submit
form.addEventListener("submit", function () {
  const firstname = document.getElementById("firstname").value;
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;

  localStorage.setItem("firstname", firstname);
  localStorage.setItem("country", country);
  localStorage.setItem("city", city);
});

// Populate form from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("firstname")) {
    document.getElementById("firstname").value =
      localStorage.getItem("firstname");
  }
  if (localStorage.getItem("country")) {
    document.getElementById("country").value = localStorage.getItem("country");
  }
  if (localStorage.getItem("city")) {
    document.getElementById("city").value = localStorage.getItem("city");
  }
});
