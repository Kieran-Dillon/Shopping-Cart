# ShoppingCart
A simple shopping cart application


Integrate Strapi with a React application

In the shopping cart exercise, you’ve seen how you can add and remove products from your shopping cart. To refactor the program, another feature you can add to your application is resetting the stock. In this exercise, you’ll focus on building that restocking functionality. To accomplish this, you’ll need to make a call to a Strapi API and get a fresh list of available products.

Here’s how the reset stock feature works:

There’s an input field on the page that contains the URL to the Strapi back end
When a user clicks the “ReStock Products” button, a call is made to the Strapi back end specified in the input field
The result of this call is an updated list of products
