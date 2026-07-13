import { Navigate, Outlet } from "react-router";

import { useAuthContext } from "@/providers/auth.provider";

export default function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuthContext();
    // 1. Wait for auth state to finish loading
    if (isLoading) {
        return <div>Loading...</div>; // (Replace with a spinner or return null)
    }
    // 2. If they are NOT authenticated, kick them to login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    // 3. Otherwise, let them see the protected page!
    return <Outlet />;
}
