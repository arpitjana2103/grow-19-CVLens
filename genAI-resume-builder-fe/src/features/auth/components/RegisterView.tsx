import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";

import Container from "@/components/layout/Container";

import { useRegisterMutation } from "../queries/auth.query";

type RegisterFormValues = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function RegisterView() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormValues>();

    // const navigate = useNavigate();

    const registerMutation = useRegisterMutation();
    const onSubmit = async function (data: RegisterFormValues) {
        await registerMutation.mutateAsync({
            username: data.username,
            email: data.email,
            password: data.password,
        });

        // navigate("/app", { replace: true });
    };

    const password = watch("password");

    return (
        <Container>
            <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            className="border"
                            id="username"
                            type="text"
                            autoComplete="username"
                            {...register("username", {
                                required: "Username is required",
                            })}
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>

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
                            autoComplete="new-password"
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

                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className="border"
                            id="confirmPassword"
                            type="text"
                            autoComplete="new-password"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) => value === password || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                    </div>

                    <button type="submit" disabled={registerMutation.isPending}>
                        Register
                    </button>
                </form>
            </main>
        </Container>
    );
}
