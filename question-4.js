function sortProductsByPrice(products) {
  let length = products.length
  let swap = true
  while (swap) {
    swap = false
    for(let i = 0 ; i<length-1; i++) {
      if (products[i].price > products[i+1].price) {
        let temp = products[i]
        products[i] = products[i+1]
        products[i+1] = temp
        swap = true
      }
    } 
  }
  return products
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
