import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AppliedJobs from "./components/AppliedJobs";
import BlogDetails from "./components/Blogs/BlogDetails";
import Blogs from "./components/Blogs/Blogs";
import Error from "./components/Error";
import Home from "./components/Home";
import JobDetails from "./components/Job/JobDetails";
import "./index.css";

const loadJobs = () => fetch("/jobs.json");
const loadBlogs = () => fetch("/Blogs.json");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: loadJobs,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: loadJobs,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: loadBlogs,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: loadJobs,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: loadBlogs,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
