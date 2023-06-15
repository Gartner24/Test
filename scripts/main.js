const url = "http://localhost:3000/products";

let id = 0;
let producto = "";
let precio = 0;

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.product;
}

const renderCard = (card, products) => {
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.classList.add("fadeInDown");
        div.innerHTML = `
            <div class="card-body">
                <div class="card-box-image"></div>
                <div class="card-box-text">
                    <h3 class="text-gradient">${product.name}</h3>
                    <p class="text-gradient">${product.price}</p>
                </div>
            </div>
        `;
        card.appendChild(div);
    });
}

const data = await getData(url);
const card = document.querySelector(".main-card");

renderCard(card, data)
