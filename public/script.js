const form = document.getElementById("productForm");

if(form){
    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        const formData = new FormData(form);
        fetch("http://localhost:3000/api/create", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            
            body: JSON.stringify({
                name: formData.get("name"),
                price: formData.get("price"),
                image: formData.get("image")

            })

        })
            .then(res => res.json()) 
            .then(result =>{
                if(result.success){
                    alert("create new product successfully!");
                    window.location.href = "./stork.html";
                }
            })  

    })
}