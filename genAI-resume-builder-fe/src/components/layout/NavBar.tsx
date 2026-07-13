import { Link, useNavigate } from "react-router";

import { cn } from "@/lib/utils";

import Logo from "../shared/Logo";
import { Button } from "../ui/button";
import Container from "./Container";

export default function NavBar({ className }: { className?: string }) {
    const navigate = useNavigate();
    return (
        <header className={cn("w-screen", className)}>
            <Container>
                <div className="flex items-center justify-between py-6">
                    <div>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>

                    <div>
                        <Button onClick={() => navigate("/login")}>Login</Button>
                        <Button onClick={() => navigate("/register")}>Register</Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
