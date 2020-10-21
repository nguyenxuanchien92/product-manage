class Product {
    constructor(id, name, price, desc) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.desc = desc;
    }

    getHTML() {
        let str = "<th>" + "Name" + "</th>" + "<th>" + "Price" + "</th>" + "<th>" + "Desc"
            + "</th>" + "<th colspan='2'>" + "Action" + "</th>";

        str = str + "<tr>" + "<td>" + "Apple" +
            "</td>" + "<td>" + "1000" +
            "</td>" + "<td>" + "News" +
            "</td>" + "<td>" + "<button type='button'>" + "Edit" + "</button>" +
            "</td>" + "<td>" + "<button type='button'>" + "Delete" + "</button>" +
            "</td>" + "</tr>"

        return str;
    }
}


let name = document.getElementById("name-product");
let price = document.getElementById("price-product");
let desc = document.getElementById("desc-product");
let products = [];

function displayListProduct() {
    let productList = new Product();
    let tableList = document.getElementById('list-product');
    tableList.innerHTML = productList.getHTML();
}

function addProduct() {
    let id = Math.floor(Math.random()*100)+1;
    let product = new Product(id,name.value,price.value,desc.value);
}

displayListProduct();