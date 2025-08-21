import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import Login from "../components/Login";

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
    ]
  },
]);