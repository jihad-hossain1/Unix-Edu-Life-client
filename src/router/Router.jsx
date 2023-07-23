import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginSystem/Login";
import Register from "../pages/LoginSystem/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import UserHome from "../pages/Dashboard/UserHome";
import UserCollection from "../pages/Dashboard/UserCollection";
import AddItem from "../pages/Dashboard/addItem/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "",
        element: <UserHome></UserHome>,
      },
      {
        path: "allusers",
        element: <UserCollection></UserCollection>,
      },
      {
        path: "additem",
        element: <AddItem></AddItem>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  // {
  //   path: "reset",
  //   element: <Reset></Reset>,
  // },
]);

export default router;
