import { Router } from "express";

import {
    generateInterviewReportController,
    generateResumePdfController,
    getAllInterviewReportsByUserId,
    getInterviewReportByIdController,
} from "../controllers/interview.controller.js";
import { uploadPDF } from "../middlewares/multer.middleware.js";
import { getAllInterviewReportsOfAUserService } from "../services/interview.service.js";

const interviewRoute = Router();

interviewRoute
    .route("/")
    .post(uploadPDF.single("resume"), generateInterviewReportController)
    .get(getAllInterviewReportsByUserId);

interviewRoute.route("/:interviewReportId").get(getInterviewReportByIdController);
interviewRoute.route("/:interviewReportId/resume").get(generateResumePdfController);

export default interviewRoute;
