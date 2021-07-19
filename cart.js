var data_div = document.getElementById("cartDiv");

var cartItems = [
    {
        image: ["https://staticimg.titan.co.in/Tanishq/Catalog/513220DICABAP1_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/513220DICABAP1_2.jpg?impolicy=pqmed&imwidth=640"],
        name: "Gold Drop Earrings With Gemstones",
        brand: "Tanishq",
        price: "89999",
        category: "Earrings"
    },
    {
        image: ["https://staticimg.titan.co.in/Tanishq/Catalog/511003FEKAA00_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/511003FEKAA00_2.jpg?impolicy=pqmed&imwidth=640"],
        name: "Twisted Motif Gold Ring",
        brand: "SouthIndia",
        price: "15999",
        category: "Rings"
    },
];
var count = 0;

function showProducts(data) {
    var productsData = data;

    data_div.innerHTML = "";

    for (var i = 0; i < productsData.length; i++) {
        
        var div = document.createElement("div");
        div.setAttribute("id", "imgElement");
        
        let pImage = document.createElement("img");
        pImage.setAttribute("id", `count + ${count}`);
        pImage.src = productsData[i].image[0];
        
        let pName = document.createElement("div");
        pName.innerHTML = productsData[i].name;
        
        let pBrand = document.createElement("div");
        pBrand.innerHTML = productsData[i].brand;
        
        let pPrice = document.createElement("div");
        pPrice.innerHTML = productsData[i].price;

        let btn = document.createElement("div");
        btn.innerHTML = `<button onclick="addToCart(${productsData[i].name})">Add to Cart</button>`;

        div.append(pImage, pName, pBrand, pPrice, btn);

        data_div.append(div);
    }

}

showProducts(cartItems);

function applyPromo() {
    var div = document.getElementById("Price");

    var promo = document.getElementById("PromoCode").value;

    if (promo === "masai30") {

        var data = cartItems;
        var totalSum = 0;
        for (var i = 0; i < cartItems.length; i++) {
            totalSum += Number(cartItems[i].price);
        }

        var total = Math.floor(totalSum * 0.7);

        div.innerHTML = `${total}`;

    }
}

function totalcartPrice(){
    var div = document.getElementById("Price");

    var total = 0;
    
        var data = cartItems;
        for (var i = 0; i < cartItems.length; i++) {
            total += Number(cartItems[i].price);
    }
    
    div.innerHTML = `${total}`;
}

totalcartPrice();