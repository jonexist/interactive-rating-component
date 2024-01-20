/// Get all li elements representing buttons in the rate-list
let buttons = document.querySelectorAll('.rate-list li');

// Function to set a specific li element as active
const activeListElement = (clickedElement) => {
  // Remove "active" class from all li elements in the rate-list
  let ratingList = document.querySelectorAll('.rate-list li');
  ratingList.forEach((li) => {
    li.classList.remove('active');
  });

  // Add "active" class to the clicked li element to indicate selection
  clickedElement.classList.add('active');
};

// Add click event listener to each li element in the rate-list
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Call the function to set the clicked li element as active
    activeListElement(button);
  });
});

// Selecting DOM elements
let ratingState = document.querySelector('.rating-state');
let thankYouState = document.querySelector('.thank-you-state');
let selectedRateValue = document.querySelectorAll('.rating')
let rateValue = document.getElementById('rate-value');
let submitRateValue = document.getElementById('submit-rating');

// Variable to store the selected rating
let selectedRating = 0;

// Event listener for the submit button
submitRateValue.addEventListener('click', () => {
  // Check if a rating is selected
  if (selectedRating === 0) {
    // Display an error if no rating is selected
    alert('You need to select rating');
    return; // Exit the function if no rating is selected
  };
  // Hide the rating state and show the thank you state
  ratingState.classList.add('hide');
  thankYouState.classList.remove('hide');
  // Update the content of the id rate-value displaying the selected rating
  rateValue.innerHTML = selectedRating;
});

// Event listeners for each rating option
selectedRateValue.forEach(selected => {
  selected.addEventListener('click', () => {
    // Update the selectedRating variable when a rating option is clicked
    selectedRating = selected.textContent;
  });
});



