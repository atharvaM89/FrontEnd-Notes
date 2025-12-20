const products = [
    {
        title: "Smart Watch",
        price: "₹3,999",
        image: "Images/SmartWatch.png",
        description: "Smart watch with fitness tracking features."
    },
    {
        title: "Headphones",
        price: "₹4,499",
        image: "Images/HeadPhones.png",
        description: "Noise cancelling wireless headphones."
    },
    {
        title: "Camera",
        price: "₹34,999",
        image: "Images/Camera.png",
        description: "High quality DSLR camera."
    },
    {
        title: "Laptop",
        price: "₹79,999",
        image: "Images/Laptop.png",
        description: "Powerful laptop for work and gaming."
    },
    {
        title: "Mobile Phone",
        price: "₹89,999",
        image: "Images/MobilePhone.png",
        description: "Latest smartphone with AMOLED display."
    },
    {
        title: "Images/Speaker.png",
        price: "₹2,199",
        image: "Images/Speaker.png",
        description: "Portable speaker with deep bass."
    }
];

const productContainer = document.getElementById("productContainer");


products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <button>View Details</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
        openModal(product);
    });

    productContainer.appendChild(card);
});

function openModal(product){
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    overlay.innerHTML = `
        <div class="modal">
            <span class="close-btn">&times;</span>
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".close-btn").addEventListener("click", () => {
        overlay.remove();
    });

    overlay.addEventListener("click", (e) => {
        if(e.target === overlay){
            overlay.remove();
        }
    });
}
