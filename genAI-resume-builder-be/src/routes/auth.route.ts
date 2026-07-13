import { Router } from "express";
import passport from "passport";

import { config } from "../configs/app.config.js";
import {
    handleGoogleAuthSuccess,
    loginUserSuccess,
    logoutUser,
    registerUser,
} from "../controllers/auth.controller.js";
import { getMe } from "../controllers/user.controller.js";
import { authProtect, NoAuth } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.route("/google").get(
    NoAuth,
    passport.authenticate("google", {
        scope: ["profile", "email"],
    }),
);

authRoutes.route("/google/callback").get(
    NoAuth,
    passport.authenticate("google", {
        session: true,
        failureRedirect: `${config.get_FRONTEND_GOOGLE_CALLBACK_URL()}?status=failure`,
    }),
    handleGoogleAuthSuccess,
);

authRoutes.route("/register").post(NoAuth, registerUser);

authRoutes.route("/login").post(
    NoAuth,
    passport.authenticate("local", {
        session: true,
        failWithError: true,
    }),
    loginUserSuccess,
);

authRoutes.route("/logout").post(logoutUser);

authRoutes.route("/me").get(authProtect, getMe);

export default authRoutes;
