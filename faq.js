

// Get all the accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");

// Loop through the accordion headers and add a click event listener to each one
accordionHeaders.forEach(function(header) {
  header.addEventListener("click", function() {
    // Toggle the visibility of the accordion content when the header is clicked
    this.nextElementSibling.style.display === "none" ? this.nextElementSibling.style.display = "block" : this.nextElementSibling.style.display = "none";

    // Close all other accordions when this one is opened
    accordionHeaders.forEach(function(otherHeader) {
      if (otherHeader !== header) {
        otherHeader.nextElementSibling.style.display = "none";
      }
    });
  });
});