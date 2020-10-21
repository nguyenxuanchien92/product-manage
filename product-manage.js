class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getHTML() {
        let str = "<th>" + "Name" + "</th>" + "<th>" + "Price" + "</th>" + "<th>" + "Desc"
            + "</th>"+ "<th colspan='2'>" + "Action" + "</th>";

        str = str + "<tr>" + "<td>" + "Apple" +
            "</td>" + "<td>" + "1000" +
            "</td>" + "<td>" + "News" +
            "</td>" +"<td>" + "<button type='button'>"+ "Edit"+"</button>" +
            "</td>" + "<td>" + "<button type='button'>"+ "Delete"+"</button>" +
            "</td>" +"</tr>"

        return str;
    }
}


let name = document.getElementById("name-product");

function displayListProduct() {
    let productList = new Product();
    let tableList = document.getElementById('list-product');
    tableList.innerHTML = productList.getHTML();
}

function addProduct() {

}

displayListProduct();