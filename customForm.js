document.addEventListener("DOMContentLoaded", () => {
  const customRingForm = document.getElementById("customRingForm");
  const formMessage = document.getElementById("formMessage");

  if (customRingForm) {
    customRingForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the page from refreshing

      // Gather the form data
      const formData = new FormData(customRingForm);

      // Example: read specific fields
      const metal = formData.get("metal");
      const stoneShape = formData.get("stoneShape");
      const stoneSize = formData.get("stoneSize");
      const ringSize = formData.get("ringSize");
      const notes = formData.get("additionalNotes");
      const uploadedFiles = formData.getAll("inspirationPhotos");

      // Show a success message on the page
      formMessage.style.color = "green";
      formMessage.textContent = "Your custom ring request has been submitted!";

      // Reset the form (optional)
      customRingForm.reset();

      // If you want to see the form data in the console:
      console.log("Metal:", metal);
      console.log("Stone Shape:", stoneShape);
      console.log("Stone Size:", stoneSize);
      console.log("Ring Size:", ringSize);
      console.log("Additional Notes:", notes);
      console.log("Uploaded Files:", uploadedFiles);
    });
  }
});
