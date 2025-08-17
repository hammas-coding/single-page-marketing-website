// JavaScript to toggle accordion content
function toggleAccordion(header) {
  var content = header.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
  header.classList.toggle("open");
}

// Get references to the main image and thumbnail container
// Add a click event listener to all elements with the "thumbnail-container" class
document
  .querySelectorAll(".thumbnail-container")
  .forEach(function (thumbnailContainer) {
    thumbnailContainer.addEventListener("click", function (event) {
      // Check if the clicked element is an image with the "thumbnail" class
      if (event.target.classList.contains("thumbnail")) {
        // Get the data-image attribute value of the clicked thumbnail
        const newImageUrl = event.target.getAttribute("data-image");

        // Change the background of the main image with the new URL
        event.currentTarget.previousElementSibling.style.backgroundImage = `url('${newImageUrl}')`;

        // Optionally, you can update other content or styles based on the selected thumbnail
        // For example, you can update the text content of the red box in the main image
        const redBox =
          event.currentTarget.previousElementSibling.querySelector(".red-box");
        if (redBox) {
          redBox.textContent = "New Content"; // Update with your desired content
        }
      }
    });
  });

function toggleAccordion1(accordionId) {
  var panel = document.getElementById(accordionId);
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
