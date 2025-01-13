document.addEventListener("DOMContentLoaded", () => {
	const ratings = document.querySelectorAll(".rating-text"); // Select all rating elements
	const submitButton = document.querySelector(".submit-button"); // Select the submit button
	const container1 = document.querySelector(".main-container"); // First container
	const container2 = document.querySelector(".container-2"); // Thank-you container
	const selectedText = document.getElementById("selected"); // Span to show the selected rating

	let selectedRating = null; // Variable to store the selected rating

	// Add event listeners to each rating
	ratings.forEach((rating) => {
		rating.addEventListener("click", () => {
			// Remove 'active' class from previously selected rating
			ratings.forEach((r) => r.classList.remove("active"));
			ratings.forEach((r) => (r.style.backgroundColor = "hsl(219, 12%, 23%)"));
			ratings.forEach((r) => (r.style.color = "hsl(0, 0%, 100%)"));
			// Add 'active' class to the clicked rating
			rating.classList.add("active");
			rating.style.color = "hsl(219, 12%, 23%)";
			rating.style.backgroundColor = "hsl(0, 0%, 100%)";
			// Store the selected rating value
			selectedRating = rating.textContent;
		});
	});

	// Add event listener to the submit button
	submitButton.addEventListener("click", () => {
		if (selectedRating) {
			// Update the span with the selected rating
			selectedText.textContent = selectedRating;
			// Hide the first container
			container1.style.display = "none";
			// Show the thank-you container
			container2.style.display = "flex";
		} else {
			alert("Please select a rating before submitting.");
		}
	});
});
