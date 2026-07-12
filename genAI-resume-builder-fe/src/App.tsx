import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AppLayout from "./components/layout/AppLayout";
import LoginView from "./features/auth/components/LoginView";
import RegisterView from "./features/auth/components/RegisterView";
import PublicOnlyRoute from "./features/auth/guards/PublicOnlyRoute";

export default function App() {
    return (
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: "/",
                    element: <AppLayout />,
                    children: [
                        {
                            element: <PublicOnlyRoute />,
                            children: [
                                {
                                    path: "login",
                                    element: <LoginView />,
                                },
                                {
                                    path: "register",
                                    element: <RegisterView />,
                                },
                            ],
                        },
                    ],
                },
            ])}
        />
    );
}
