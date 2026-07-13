import { Navigate, Outlet } from "react-router";

import { useAuthContext } from "@/providers/auth.provider";

export default function PublicOnlyRoute() {
    const { isAuthenticated, isLoading } = useAuthContext();
    // 1. Wait for auth state to finish loading
    if (isLoading) {
        return <div>Loading...</div>; // (Replace with a spinner or return null)
    }
    // 2. If they ARE authenticated, don't let them see the login page! Kick them to the app.
    if (isAuthenticated) {
        return <Navigate to="/app" replace />;
    }
    // 3. Otherwise, let them see the public page (like Login/Register)!
    return <Outlet />;
}
