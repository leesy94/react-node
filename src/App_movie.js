import { useState, useEffect } from "react";
import Home from "./route/Home";
import Detail from "./route/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/movie/:id",
        element: <Detail />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;