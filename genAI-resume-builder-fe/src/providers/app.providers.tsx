import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./auth.provider";
import { QueryProvider } from "./query.provider";

type AppProvidersProps = {
    children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
    return (
        <>
            <Toaster
                position="bottom-left"
                toastOptions={{
                    style: {
                        background: "#fff9db",
                        color: "#343a40",
                        fontSize: "0.9rem",
                        borderRadius: "0.4rem",
                    },
                }}
            />
            <QueryProvider>
                <AuthProvider>{children}</AuthProvider>
            </QueryProvider>
        </>
    );
}
