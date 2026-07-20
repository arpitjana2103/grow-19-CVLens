import { z } from "zod";

export const GenerateInterviewReportInputSchema = z.object({
    jobDescription: z.string().trim().min(300).max(2000),
    selfDescription: z.string().trim().min(0).max(1000).optional(),
});

const QuestionSchema = z.object({
    question: z.string(),
    intention: z.string(),
    answer: z.string(),
});

const SkillGapSchema = z.object({
    skill: z.string(),
    severity: z.enum(["LOW", "MEDIUM", "HIGH"]),
});

const PreparationPlanSchema = z.object({
    day: z.number(),
    focus: z.string(),
    tasks: z.array(z.string()),
});

export const InterViewReportByIdResponseSchema = z.object({
    id: z.string(),
    jobTitle: z.string(),
    jobDescription: z.string(),
    selfDescription: z.string(),
    resumeData: z.string(),
    matchScore: z.number().min(0).max(100),
    technicalQuestions: z.array(QuestionSchema),
    behavioralQuestions: z.array(QuestionSchema),
    skillGaps: z.array(SkillGapSchema),
    preparationPlan: z.array(PreparationPlanSchema),
    createdAt: z.date(),
});
