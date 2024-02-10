/* eslint-disable no-unused-vars */

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { 
  About , 
  Cart, 
  Checkout ,
   Error ,
   HomeLayout ,
   Landing ,
    Login ,
    Orders , 
    Products ,
    Register ,
    SingleProduct } 
    from "./pages";

    const router = createBrowserRouter([
      {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Landing />,
        
          },
          {
            path: 'products',
            element: <Products />,
         
          },
          {
            path: 'products/:id',
            element: <SingleProduct />,
            
          },
          {
            path: 'cart',
            element: <Cart />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'checkout',
            element: <Checkout />,
          
          },
          {
            path: 'orders',
            element: <Orders />,
           
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
        
      },
      {
        path: '/register',
        element: <Register />,
        errorElement: <Error />,
       
      },
    ]);
const App = () => {
  return(
   <h1 className='text-7xl font-bold underline'>Tailwind project</h1>,

  <RouterProvider router={router} />
  );
};
export default App;

