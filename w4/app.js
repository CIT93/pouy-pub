// Pseudocode:
// 1. Get the form from the page.
// 2. Wait for the user to click "Submit".
// 3. When the user submits:
//    a. Stop the page from reloading.
//    b. Get the user's name from the input box.
//    c. Make a message like "Welcome, [Name]!".
//    d. Show that message on the page.
//    e. Clear the input box.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("greeting-form");
  const input = document.getElementById("name-input");
  const output = document.getElementById("greeting-output");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const name = input.value.trim();

    if (name) {
      const greeting = `Thank you for visiting my page, ${name}!`;
      output.textContent = greeting;
    } else {
      output.textContent = "Please enter your name.";
    }

    form.reset(); // Clear the input field
  });
});
