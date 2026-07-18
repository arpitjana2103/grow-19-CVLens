import { z } from "zod";

export const generateInterviewReportInputSchema = z.object({
    jobDescription: z.string().trim().min(300).max(2000),
    selfDescription: z.string().trim().min(0).max(1000).optional(),
});
