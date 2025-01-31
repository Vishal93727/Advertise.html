document.addEventListener("DOMContentLoaded", () => {
  const sectorSelect = document.getElementById("sector-select");
  const postAdFormSection = document.getElementById("post-ad-form-section");
  const generateCardBtn = document.getElementById("generate-card-btn");
  const demoCardsSection = document.getElementById("demo-cards-section");
  const demoCardsContainer = document.getElementById("demo-cards-container");

  // Show form on sector selection
  sectorSelect.addEventListener("change", () => {
    if (sectorSelect.value) {
      postAdFormSection.classList.remove("hidden");
    } else {
      postAdFormSection.classList.add("hidden");
    }
  });

  // Generate ad card
  generateCardBtn.addEventListener("click", () => {
    const productName = document.getElementById("product-name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;

    if (productName && price && description) {
      const card = document.createElement("div");
      card.classList.add("ad-card");
      card.innerHTML = `
        <img src="images/demo-product.jpg" alt="${productName}">
        <div class="ad-card-content">
          <h3 class="ad-card-title">${productName}</h3>
          <p class="ad-card-description">${description}</p>
          <p class="ad-card-footer">Price: $${price}</p>
        </div>
      `;
      demoCardsContainer.appendChild(card);
      demoCardsSection.classList.remove("hidden");
    } else {
      alert("Please fill out all fields!");
    }
  });
});
