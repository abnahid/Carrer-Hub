import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AppliedJobs from "./components/AppliedJobs";
import BlogDetails from "./components/Blogs/BlogDetails";
import Blogs from "./components/Blogs/Blogs";
import Error from "./components/Error";
import Home from "./components/Home";
import JobDetails from "./components/Job/JobDetails";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Register from "./components/Register";
import Statistics from "./components/Statistics";
import AuthProvider from "./context/AuthProvider";
import "./index.css";
import PrivateRoute from "./Private/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
        loader: loadJobs,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: loadBlogs,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: loadBlogs,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: loadJobs,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
        loader: loadJobs,
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        loader: loadBlogs,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster position="right-top" toastOptions={{ duration: 1500 }} />
  </StrictMode>
);
