import HomePage from "./Components/Pages/Homepage";
import ResultPage from "./Components/Pages/ResultPage"; // Import your results page
import ExamSchedulePage from "./Components/Pages/examschedule";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "results", element: <ResultPage /> }, // Add this line for results page
      { path: "examschedule", element: <ExamSchedulePage/> },
    ],
  },
],
{ basename: "/UPSC" }
);

export default function App() {
  return <RouterProvider router={router} />;
}
