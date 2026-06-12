import { createRoot } from 'react-dom/client'
import './index.css'
// Importing Pages
import Home from './Pages/Home.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Chat from './Pages/Chat.jsx';
import ProtectedRoutes from './Components/ProtectedRoutes.jsx';
import Layout from './Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path :'/',
    element:<Layout/>,
    children:[
      {
        path :"",
        element:<Home/>
      },
      {
        path :"login",
        element:<Login/>
      },
      {
        path :"register",
        element:<Register/>
      },
      {
        path :"dashboard",
        element:(<ProtectedRoutes compoent={<Dashboard/>}/>)
      },
      {
        path :"profile",
        element:(<ProtectedRoutes compoent={<Profile/>}/>)
      },
      {
        path :"chat",
        element:(<ProtectedRoutes compoent={<Chat/>}/>)
      },
    ]
  }
])


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);