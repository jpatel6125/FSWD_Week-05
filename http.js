 // Import express
 const express = require('express');
 const app = express();
 const port = 3000;
 
 // Mock product data
 const products = [
     { id: 1, name: 'Laptop', category: 'electronics', price: 1000 },
     { id: 2, name: 'Smartphone', category: 'electronics', price: 700 },
     { id: 3, name: 'Shirt', category: 'fashion', price: 30 },
     { id: 4, name: 'Shoes', category: 'fashion', price: 50 },
 ];
 
 // Route to return all products
 app.get('/products', (req, res) => {
     const { category } = req.query;
 
     // Filter by category if the query parameter is provided
     if (category) {
         const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
         return res.json(filteredProducts);
     }
 
     // Otherwise, return all products
     res.json(products);
 });
 
 // Route to return a specific product by ID
 app.get('/products/:id', (req, res) => {
     const productId = parseInt(req.params.id);
     const product = products.find(p => p.id === productId);
    
     if (product) {
         res.json(product);
     } else {
         res.status(404).send({ message: 'Product not found' });
     }
 });
 
 // Start the server
 app.listen(port, () => {
     console.log(`Server running on http://localhost:${port}`);
 });
 