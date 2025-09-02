
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { AllData } from "./Data/AllData";
import AllCategories from "./Categories/AllCategories";
import AllCart from "./Cart/AllCart";
import { CartProvider } from "react-use-cart"; 
import AllCollections from "./Collcetions/AllCollections";
import AllContact from "./ContactUs/AllContact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Shop",
    element: <AllCategories />,
  },
  {
    path: "Cart",
    element: <AllCart />,
  },
  {
    path: "Collections",
    element: <AllCollections/>,
  },
  {
    path: "Contact",
    element: <AllContact/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <AllData>
    <CartProvider>  
      <RouterProvider router={router} />
    </CartProvider>
  </AllData>
);

