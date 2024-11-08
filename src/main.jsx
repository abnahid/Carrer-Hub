import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AppliedJobs from "./components/AppliedJobs";
import Error from "./components/Error";
import Home from "./components/Home";
import JobDetails from "./components/Job/JobDetails";
import "./index.css";

const loadJobs = () => fetch("/jobs.json");

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
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: loadJobs,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
