interface Product{
    name: string,
    price: number
}

let products: Product[] = [
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 },
    { name: "Product D", price: 40 }
];

let minPrice = 25;

let filteredProducts = 
products.filter(product => product.price >= minPrice).sort((a,b) => a.price - b.price);

console.log(filteredProducts)