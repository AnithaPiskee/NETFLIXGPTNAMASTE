import React from "react";
import Body from "./components/Body";
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import React from "react";
import ReactDOM from 'react-dom/client';

const appRouter = createBrowserRouter([
  {
  path:"/",
  element: <Body/>
},{path:"/login",
  element:<Login/>
},{
  path:"/browse",
  element:<Browse/>
}
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)