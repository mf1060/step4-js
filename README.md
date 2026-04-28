# Overview 
This is a repository for an e-commerce application using a React front-end and Javascript backend with JSON server. This is a final project in an internet application development class. 

Code was provided by the professor (Step 2) and amended to add [PATCH method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/PATCH) and adapted to create the beginnings of an e-commerce app.

This application is styled with [Bootstrap](https://getbootstrap.com/). Both the frontend and backend are in the same repository for purposes of sharing the repository.

# Backend
To start the backend, navigate to the `shop-backend` directory in your terminal and use the command, `npm run start-backend.`

# Frontend
To start the frontend of the web application, navigate to the `shop-frontend` directory in your terminal and use the command `npm run dev`

# New Features for Step 4
- Uses a [Bootstrap offcanvas](https://getbootstrap.com/docs/5.3/components/offcanvas/) to show the contents of the cart whenever a new item is added to the cart.
- Adds a cart icon and a search icon
- Creates a search in the navbar using [React Router and useParams](https://www.w3schools.com/react/react_router.asp)
- Adds items to the home page as "Featured items"
- Uses styling for the Navbar that mimics the styling for Amazon

# Features
The current implemented features are:
- Use of [React Router](https://www.w3schools.com/react/react_router.asp) and a [Bootstrap NavBar](https://getbootstrap.com/docs/4.0/components/navbar/) to create pages and navigate between them. There is a home page, a search page, a cart page, and an individual page for each product. 
- The NavBar has a link to the home page, search page, and cart page (with a counter for the number of items in the cart).
- A JSON server database that stores product item details and keeps track of cart items.
- A Home Page that uses a Bootstrap "Carousel" to cycle through featured items.
- A search page that updates dynamically in response to a user's search query.
- An "add to cart" button that uses "+" and "-"/garbage can icons to add or remove items to the cart.
- Individual product pages linked to each item in the home, search, and cart pages.
- The ability to add items to the cart from the home, search, individual product pages, and the cart page.








