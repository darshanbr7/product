## product

## description

1. Create an api to create a product
   Product should have following fields:
   id, product name, product category, image url , product description

2. Create an api to fetch a product by product id (eg: /products/ASD455)

3. Create an api to fetch all products with filters and pagination
   (eg: /products?page=1&pageSize=10&productName=apple&category=electronics)

4. Create an api to delete a product by id

## packages used

- Nodejs
- Expressjs
- Mongoose
- husky & prettier

husky and prettier are used as a best practice to keep clean code

## How to test application

use the below endpoint deployed in vercel

endpoint : https://product-ten-teal.vercel.app/api/parameters

parameters can be as below:

- /add_product (https://product-ten-teal.vercel.app/api/add_product)
- /get_product/:id (https://product-ten-teal.vercel.app/api/get_product/:id)
- /all_products (https://product-ten-teal.vercel.app/api/all_products)
- /delete_product/:id (https://product-ten-teal.vercel.app/api/delete_product/:id)

## Evidences

**Create product**
![create](screenShots/addProduct.png)

**Get product by id**
![getById](screenShots/getProductById.png)

**Get Query page1**
![getQuery1](screenShots/getQuery1.png)

**Get Query page2**
![getQuery2](screenShots/getQuery2.png)

**Delete product**
![delete product](screenShots/deleteProductById.png)
