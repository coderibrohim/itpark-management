import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Students from "../pages/Students";
import Teachers from "../pages/Teachers";
import Groups from "../pages/Groups";
import Attendance from "../pages/Attendance";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "teachers",
        element: <Teachers />,
      },
      {
        path: "groups",
        element: <Groups />,
      },
      {
        path: "attendance",
        element: <Attendance />,
      },
    ],
  },
]);
export default router;
