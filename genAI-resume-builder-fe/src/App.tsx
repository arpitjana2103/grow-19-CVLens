import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import LoginPage from "./features/auth/pages/Login.page";
import Register from "./features/auth/pages/Register.page";

export default function App() {
    return (
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: "/login",
                    element: <LoginPage />,
                },
                {
                    path: "/register",
                    element: <Register />,
                },
            ])}
        />
    );
}
