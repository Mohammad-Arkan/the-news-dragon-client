import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../loyouts/Main.jsx"
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../loyouts/NewsLayout";
import NewsDetail from "../pages/News/News/NewsDetail";
import LoginLayout from "../loyouts/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path:"/",
    element: <LoginLayout></LoginLayout>,
    children:[
      {
        path:"/",
        element:<Navigate to="/category/0"></Navigate>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
    {
      path: "category",
      element: <Main></Main>,
      children: [
     
        {
          path:":id",
          element:<Category/>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ],
    },
    {
      path: 'news',
      element: <NewsLayout></NewsLayout>,
      children:[
        {
          path: ':id',
          element:<PrivateRoute><NewsDetail></NewsDetail></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);
  export default router