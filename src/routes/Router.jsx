import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import PrivateRoute from "../contexts/PrivateRoute";
import MyProfile from "../components/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children : [
        {
            index : true,
            Component : Home
        },
        {
            path : '/login',
            Component : Login
        },
        {
            path : '/register',
            Component : SignUp
        },
        {
            path : 'myProfile',
            element : <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        }
    ]
  },
]);