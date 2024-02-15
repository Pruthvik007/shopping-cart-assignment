# Shopping Cart Assignment

This is a React project built using Vite and TypeScript, implementing a Shopping Cart Application with various features such as User Authentication, Product Fetching, Searching, Adding to Cart, and more.

## Features

1. **Login Process:** Implements a login process using the [Dummy JSON Authentication API](https://dummyjson.com/docs/auth).
2. **Token Authorization:** Saves the login token for authorization purposes.
3. **Protected Home Page:** The home page is a protected route, allowing only logged-in users.
4. **Product Fetching:** Fetches products from the [Dummy JSON Products API](https://dummyjson.com/docs/products).
5. **Product Search:** Allows users to search for products based on their name.
6. **Product Filtering:** ~~(Not implemented due to API limitations)~~
7. **Cart Functionality:** Implements a cart feature where users can add products, remove products, and view the total amount of the cart.
8. **Add to Cart Button:** Provides an "Add to Cart" button on product cards for easy adding of products to the cart.

## Usage

1. Clone the project from the GitHub repository:
    ```bash
    git clone https://github.com/Pruthvik007/shopping-cart-assignment.git
    ```

2. Change directory to the project folder:
    ```bash
    cd shopping-cart-assignment
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Visit [localhost:5173](http://localhost:5173) in your browser to view the application.

## Instructions

- Upon visiting the application, click the "Sign In" button to log in.
- Products are Paginated, allowing you to navigate through different pages.
- Use the Search Functionality to find specific products by their name.
- Add products to the cart using the "Add to Cart" button on product cards.
- The Cart Icon displays the total number of items in the Cart and the Total Amount.
- You can Remove items from the Cart as well.
