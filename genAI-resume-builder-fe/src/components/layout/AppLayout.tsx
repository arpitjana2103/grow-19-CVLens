import { Outlet } from "react-router";

import Container from "./Container";
import NavBar from "./NavBar";

export default function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="flex grow flex-col">
                <Container className="grow overflow-auto pb-20">
                    <Outlet />
                </Container>
            </main>
        </div>
    );
}
