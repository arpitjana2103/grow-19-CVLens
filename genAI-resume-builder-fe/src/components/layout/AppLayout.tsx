import { Outlet } from "react-router";

import Container from "./Container";
import NavBar from "./NavBar";

export default function AppLayout() {
    return (
        <div className="flex h-dvh flex-col">
            <NavBar />
            <main className="flex-1 overflow-auto">
                <Container className="grow overflow-y-scroll pb-20">
                    <Outlet />
                </Container>
            </main>
        </div>
    );
}
