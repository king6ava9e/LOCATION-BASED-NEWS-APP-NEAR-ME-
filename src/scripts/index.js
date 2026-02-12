// verifying that all input forms are correct
const form = document.getElementById("feedForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission for demo

  // Remove previous invalid classes
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => input.classList.remove("invalid"));

  let isValid = true;

  inputs.forEach((input) => {
    if (input.hasAttribute("required") && !input.value.trim()) {
      input.classList.add("invalid"); // highlight missing required field
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
