// Task 1: Creating a Product Class

class Product { //Creating class Product
    constructor(name, id, price, stock) { 
        //setting up properties
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };

    getDetails(){ 
    //Add a method getDetails() that returns a formatted string of product details.
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`; //returns a formatted string of product details
    };

    updateStock(quantity){ // modifies the stock level when an order is placed.
        this.stock -= quantity; 
    };
};

const prod1 = new Product("Laptop", 101, 1200, 10); 
//Test cases
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"


// Task 2: Creating an Order Class

class Order { //Creating class Order
    constructor(orderId, product, quantity) { 
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity);
    };

    getOrderDetails() { //Adding getOrderDetails()
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}"`; 
        // returns order details
    };
};

//Test cases
const order1 = new Order(501, prod1, 2); 

console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)


// Task 3: Creating an Inventory Class

class Inventory {
    constructor() {
        this.products = []; 
    };

    addProduct(product) { 
        //Adds a new product to inventory
        this.products.push(product); 
    };

    listProducts() { 
        //Logs all products' details.
        return this.products.forEach(product => console.log(product.getDetails()));
    };

   
};

const inventory = new Inventory(); //Test case for Task 3
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"