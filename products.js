var data_div = document.getElementById("main");
var count = 0;
var products = [{
    image: ["https://staticimg.titan.co.in/Tanishq/Catalog/513220PPVAAA00_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/513220PPVAAA00_2.jpg?impolicy=pqmed&imwidth=640"],
    name: "Elaborate Pendant",
    brand: "Tanishq",
    price: "30999",
    category: "Pendants"
},
{
    image: ["https://staticimg.titan.co.in/Tanishq/Catalog/503120PDSAAA09_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/503120PDSAAA09_2.jpg?impolicy=pqmed&imwidth=640"],
    name: "Diamond Pendant",
    brand: "SouthIndia",
    price: "25000",
    category: "Pendants"
},
{
    image: ["https://staticimg.titan.co.in/Tanishq/Catalog/513220PPZAAA00_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/513220PPZAAA00_2.jpg?impolicy=pqmed&imwidth=640"],
    name: "Inspired Pendant",
    brand: "Joyalukas",
    price: "35999",
    category: "Pendants"
},
{
    image: ["https://staticimg.titan.co.in/Tanishq/Catalog/513920DGJABA00_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/513920DGJABA00_2.jpg?impolicy=pqmedlow&imwidth=320"],
    name: "Gold Drop Earrings",
    brand: "Tanishq",
    price: "49999",
    category: "Earrings"
},
{
    image: ["https://staticimg.titan.co.in/Tanishq/Catalog/513220PQGAAA00_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/513220PQGAAA00_2.jpg?impolicy=pqmed&imwidth=640"],
    name: "Traditional Pendant",
    brand: "SouthIndia",
    price: "25999",
    category: "Pendants"
},
{
    image: ["https://staticimg.titan.co.in/Tanishq/Catalog/503120PDOAAA09_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/503120PDOAAA09_2.jpg?impolicy=pqmed&imwidth=640"],
    name: "Abstract Diamond Ring ",
    brand: "Tanishq",
    price: "42099",
    category: "Pendants"
    },
    {
    image: ["https://staticimg.titan.co.in/Tanishq/Catalog/503920DEEABA29_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/503920DEEABA29_2.jpg?impolicy=pqmed&imwidth=640"],
    name: "Charming Diamond Drop Earrings",
    brand: "SouthIndia",
    price: "30999",
    category: "Earrings"
    },
    {
    image: ["https://staticimg.titan.co.in/Tanishq/Catalog/504025HMQAAA00_1.jpg?impolicy=pqmed&imwidth=640", "https://staticimg.titan.co.in/Tanishq/Catalog/504025HMQAAA00_2.jpg?impolicy=pqmed&imwidth=640"],
    name: "Concentric Beads Drop Earrings",
    brand: "Joyalukas",
    price: "56999",
    category: "Earrings"
    },
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


function showProducts(data) {
    var productsData = data;

    data_div.innerHTML = "";

    data.forEach(function (object){
        addProductsToBrowser(object);
    });
}

showProducts(products);

function addProductsToBrowser(object) {
    
        var div = document.createElement("div");
        div.setAttribute("id", "imgElement");
        
        let pImage = document.createElement("img");
        pImage.setAttribute("id", `count + ${count}`);
        pImage.src = object.image[0];
        
        let pName = document.createElement("div");
        pName.innerHTML = object.name;
        
        let pBrand = document.createElement("div");
        pBrand.innerHTML = object.brand;
        
        let pPrice = document.createElement("div");
        pPrice.innerHTML = object.price;

        let btn = document.createElement("button");
        btn.setAttribute("class", "productButton");
        btn.textContent = "Add to Cart";
        btn.addEventListener("click", function (object) {
            addToCart(object);
        });

        div.append(pImage, pName, pBrand, pPrice, btn);

        data_div.append(div);
    
    }

/*
function differentImage(data) {

    for (var i = 0; i < data.length; i++) {
        
        var div = document.getElementById("imgElement");

        let pImage = document.createElement("img");
        pImage.addEventListener("onmouseover", function () {
            return pImage.src = products[i].image[1];
        });

        
        let pName = document.createElement("div");
        pName.innerHTML = products[i].name;
        
        let pBrand = document.createElement("div");
        pBrand.innerHTML = products[i].brand;
        
        let pPrice = document.createElement("div");
        pPrice.innerHTML = products[i].price;

        let btn = document.createElement("div");
        btn.innerHTML = "<button onclick='addToCart()'>Add to Cart</button>";

        div.append(pImage, pName, pBrand, pPrice, btn);

        data_div.append(div);
    }
}

differentImage(products);*/

function sortPriceLH() {
    var data = products;

    data.sort(function (a, b) {
        return a.price - b.price;
    });

    showProducts(data);
}

function sortPriceHL() {
    var data = products;

    data.sort(function (a, b) {
        return b.price - a.price;
    });

    showProducts(data);
}

function priceRange() {
    var data = products;

    var least = document.getElementById("LeastPrice").value;
    var highest = document.getElementById("HighestPrice").value;
    
    var array = [];

    for (var i = 0; i < data.length; i++){
        if (data[i].price <= Number(highest) && data[i].price >= Number(least)) {
            array.push(data[i]);
        }
    }

    showProducts(array);
}

function earrings() {
    var data = products;
    var array = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].category == "Earrings") {
            array.push(data[i])
        }
    }
    
    showProducts(array);
}

function pendants() {
    var data = products;
    var array = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].category == "Pendants") {
            array.push(data[i])
        }
    }
    
    showProducts(array);
}

function rings() {
    var data = products;
    var array = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].category == "Rings") {
            array.push(data[i])
        }
    }
    showProducts(array);
}

function brand() {
    var data = products;
    var brandName = document.getElementById("brandName").value;
    var array = [];

    for (var i = 0; i < data.length; i++){
        if (data[i].brand == brandName) {
            array.push(data[i]);
        }
    }
    showProducts(array);
}

function addToCart(ele) {
    let array;
    array = localStorage.getItem("cartItems");

        if (array == null) {
        array = [];
        array.push(ele);
        localStorage.setItem("cartItems", JSON.stringify(array));
        } else {
            array = JSON.parse(localStorage.getItem("cartItems"));
            let found = false;
            for (var i = 0; i < array.length; i++) {
                if (array[i].name == ele.name) {
                    found = true;
                    break;
                }
            }

            if (found == false) {
                array.push(ele);
            } else {
                alert("Product Already in Cart");
            }
          localStorage.setItem("cartItems", JSON.stringify(array));
        }
}