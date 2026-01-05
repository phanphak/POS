const form = document.getElementById("productForm")
const list = document.getElementById("categoryStork")
// add product

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("/api/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        price: formData.get("price"),
        image: formData.get("image")
      })
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          alert("Product added successfully!");
          window.location.href = "index.html";
        }
      });
  });
}