import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HorizontalList from './components/navbar'
import Footer from './components/footer'
import Login from './pages/login'
import Register from './pages/register'
import { createBrowserRouter, Navigate, RouterProvider, useLocation } from 'react-router-dom'
import Homepage from './pages/homepage';
import About from './pages/about';
import Contactus from './pages/contactus';
import Layout from './pages/layout'
import Notfound from './pages/notfound'
import Shop from './pages/shop'
import AdminLayout from './components/admin/adminLayout'
import AddBook from './components/admin/addBook'
import AllBooks from './components/admin/allBooks'
import Users from './components/admin/users'
import Orders from './components/admin/orders'
import SearchResults from './pages/SearchResults'
import BooksContextProvider from './context/booksContextProvider'
import UsersContextProvider from './context/usersContextProvider'

function App() {
  // const [count, setCount] = useState(0)

  const AdminRoute = ({ children }) => {
  const role_id = localStorage.getItem("role_id");
  return role_id === "admin" ? children : <Navigate to="/" />;
};

  let routes = createBrowserRouter([
    {
      path:'/',
      element: <Layout></Layout>,
      children:[
        {
          index:true,
          element:<Homepage></Homepage>
        },
        {
          path:'aboutus',
          element:<About></About>
        },
        {
          path:'contactus',
          element:<Contactus></Contactus>
        },
        {
          path:'shop',
          element:<Shop></Shop>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'search',
          element:<SearchResults></SearchResults>
        },
        {
          path:'admin',
          element:<AdminRoute><AdminLayout></AdminLayout></AdminRoute>,
          children:[
            {
              path:'users',
              element:<Users></Users>
            },
            {
              path:'orders',
              element:<Orders></Orders>
            },
            {
              path:'addbook',
              element:<AddBook></AddBook>
            },
            {
              path:'addbook/:id',          //for edit
              element:<AddBook></AddBook>
            },
            {
              path:'books',
              element:<AllBooks></AllBooks>
            },
          ]
        },

        {
          path:'*',
          element:<Notfound></Notfound>
        }
      ]
    }
  ])
  return (
    <>
        {/* <HorizontalList></HorizontalList>
        <br />
        <br />
        <br />
        <Register></Register>
        <br />
        <br />
        <Footer></Footer> */}
        <UsersContextProvider>
        <BooksContextProvider>
          <RouterProvider router={routes}></RouterProvider>
        </BooksContextProvider>
        </UsersContextProvider>
    </>
  )
}

export default App
