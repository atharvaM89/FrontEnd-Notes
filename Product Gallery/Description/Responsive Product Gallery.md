# Responsive Product Gallery

## **Folder Structure**

```
Product-Gallery/
│
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── Images/
    ├── MobilePhone.png
    ├── SmartWatch.png
    ├── Speaker.png
    ├── Camera.png
    ├── HeadPhones.png
    └── Laptop.png

```

## This is HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Product Gallery</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header class="header">
    <h1>Product Gallery</h1>
</header>

<section class="products" id="products">
    <h2>Our Products</h2>
    <div class="product-container" id="productContainer">
    </div>
</section>

<script src="js/script.js"></script>
</body>
</html>
```

## **This is CSS Code**

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: serif;
    background-color: #f4f4f4;
    color: #333;
}

.header{
    text-align: center;
    padding: 20px;
    background-color: #1a1a1d;
    color: #fff;
}

.products{
    padding: 40px 10%;
    text-align: center;
}

.products h2{
    margin-bottom: 30px;
}

.product-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.product-card{
    background-color: #fff;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.product-card img{
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
}

.product-card h3{
    margin: 10px 0;
}

.product-card p{
    font-weight: bold;
    color: #ff7e5f;
}

.product-card button{
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    background-color: #4ccdc4;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
}

.product-card button:hover{
    background-color: #38b2ac;
}

.modal-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal{
    background: #fff;
    width: 90%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    text-align: center;
}

.modal img{
    width: 100%;
    border-radius: 10px;
}

.modal h3{
    margin: 10px 0;
}

.close-btn{
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
}

/* Responsive Media Queries */
@media (max-width: 600px){
    .product-container img{
        height: 180px;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px){
    .product-container{
        grid-template-columns: repeat(1, 1fr);
    }
}

```

## This is JS Code

```jsx
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

```

## This is Output in Desktop

![Screenshot 2025-12-13 234123.png](Screenshot_2025-12-13_234123.png)

![image.png](image.png)

## **This is Device Responsive Output**

![Screenshot 2025-12-13 234157.png](Screenshot_2025-12-13_234157.png)

![Screenshot 2025-12-13 234207.png](Screenshot_2025-12-13_234207.png)

![Screenshot 2025-12-13 234217.png](Screenshot_2025-12-13_234217.png)

![image.png](image%201.png)