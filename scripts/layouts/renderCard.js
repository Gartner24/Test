export const renderCard = (card, products) => {
    products.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-body">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
            </div>
        `;
        card.appendChild(div);
    });
}