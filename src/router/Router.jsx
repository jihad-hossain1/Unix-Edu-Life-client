import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginSystem/Login";
import Register from "../pages/LoginSystem/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import UserHome from "../pages/Dashboard/UserHome";
import UserCollection from "../pages/Dashboard/UserCollection";
import AddItem from "../pages/Dashboard/addItem/AddItem";
import CollageDetail from "../components/collageCard/CollageDetail";
import { getCollage } from "../api/collage";
import MyCollage from "../pages/MyCollage/MyCollage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/Error/ErrorPage";
import Collage from "../pages/Collage/Collage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "collageDetail/:id",
        element: (
          <PrivateRoute>
            <CollageDetail></CollageDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) => getCollage(params.id),
      },
      {
        path: "myCollage",
        element: (
          <PrivateRoute>
            <MyCollage></MyCollage>
          </PrivateRoute>
        ),
      },
      {
        path: "colleges",
        element: <Collage></Collage>,
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
