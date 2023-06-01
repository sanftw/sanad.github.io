const form = document.getElementById('support-form');
const thankYouMsg = document.getElementById('thank-you-msg');

form.addEventListener('submit-btn', function(event) {
  event.preventDefault(); // Prevents form submission
  form.style.display = 'none'; // Hides the form
  thankYouMsg.style.display = 'block'; // Shows the thank you message
});