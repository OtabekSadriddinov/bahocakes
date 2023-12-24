let http = new XMLHttpRequest();
http.open('get', 'products.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        displayProducts(products);
    }
};

function displayProducts(products) {
    let output = "";
    for(let item of products){
        output += `
            <div class="product">
                <img src="${item.image}" alt="${item.title}">
                <p class="title">${item.title}</p>
                <p class="description">${item.description}</p>
                <p class="price">${item.price}</p>
                <p class="cart">Add to Cart <i class="bx bx-cart-alt"></i></p>
            </div>
        `;
    }
    document.querySelector(".products").innerHTML = output;
}

function filterProducts(type) {
    let http = new XMLHttpRequest();
    http.open('get', 'products.json', true);
    http.send();
    http.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            let allProducts = JSON.parse(this.responseText);
            let filteredProducts = allProducts.filter(product => type === "all" || product.type === type);
            displayProducts(filteredProducts);
        }
    }
}


