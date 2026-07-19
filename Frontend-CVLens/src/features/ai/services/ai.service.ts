import { create as axiosCreateInstance } from "axios";

const BE_ORIGIN = import.meta.env.VITE_BACKEND_ORIGIN;

const axiosClient = axiosCreateInstance({ baseURL: `${BE_ORIGIN}/api`, withCredentials: true });

export async function createInterviewReport({
    jobDescription,
    selfDescription,
    resume,
}: {
    jobDescription: string;
    selfDescription: string;
    resume: File;
}) {
    const formData = new FormData();
    formData.append("jobDescription", jobDescription);
    formData.append("selfDescription", selfDescription);
    formData.append("resume", resume);

    const response = await axiosClient.post("/interview", formData);
    const data = response.data;
    return data;
}
