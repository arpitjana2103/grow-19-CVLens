import { useForm } from "react-hook-form";

import Container from "@/components/layout/Container";

import { useLoginMutation } from "../queries/auth.query";

type LoginFormValues = {
    email: string;
    password: string;
};

export default function LoginView() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>();
    const loginMutation = useLoginMutation();

    const onSubmit = async function (data: LoginFormValues) {
        await loginMutation.mutateAsync({
            email: data.email,
            password: data.password,
        });
    };

    return (
        <Container>
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            className="border"
                            id="email"
                            type="email"
                            autoComplete="email"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            className="border"
                            id="password"
                            type="text"
                            autoComplete="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <button type="submit" disabled={loginMutation.isPending}>
                        Login
                    </button>
                </form>
            </main>
        </Container>
    );
}
