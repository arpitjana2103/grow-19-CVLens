import {
    ArrowRight02Icon,
    Briefcase07Icon,
    Cancel01Icon,
    ClipboardClockIcon,
    CloudUploadIcon,
    Male02Icon,
    Pdf01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState, type ChangeEvent, type DragEvent } from "react";
import { toast } from "react-hot-toast";

import geminiImg from "@/assets/gemini.png";
import AppHeading from "@/components/shared/AppHeading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn, formatFileSize } from "@/lib/utils";

export default function AppView() {
    return (
        <>
            <AppHeading />
            <form className="mx-auto mt-8 flex w-full flex-col border-2 border-border bg-primary p-4 lg:h-180 lg:p-6">
                <div className="flex grow flex-col gap-6 lg:flex-row lg:gap-0">
                    <JobDescription />
                    <Profile />
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <p>AI Powered Strategy Generation • 30s Approx </p>

                    <Button
                        type="submit"
                        className="cursor-pointer rounded-full bg-white px-5 py-6 text-lg text-foreground shadow-2xl hover:translate-y-1 hover:bg-white"
                    >
                        <span className="font-head">
                            Generate With{" "}
                            <span className="pl-1 font-gemini font-medium text-blue-400">
                                Gemini
                            </span>
                        </span>
                        <span>
                            <img className="h-6 w-6" src={geminiImg} alt="" />
                        </span>
                    </Button>
                </div>
            </form>
            <InterviewHistory />
        </>
    );
}

function InterviewHistory() {
    return (
        <div className="mt-8 cursor-pointer">
            <h1 className="mb-4 font-head text-xl">History</h1>
            <div className="flex flex-wrap gap-4">
                <div className="group w-fit border-2 border-foreground p-4 hover:bg-primary">
                    <p className="mb-2 font-semibold text-foreground/50">ABC123456</p>
                    <div className="flex gap-4">
                        <div>
                            <HugeiconsIcon icon={ClipboardClockIcon} strokeWidth={2} />
                        </div>

                        <div className="">
                            <h3 className="font-head">Mern Stack Developer</h3>
                            <p>21 March 1999, 5:30 pm</p>
                        </div>

                        <div>
                            <HugeiconsIcon
                                icon={ArrowRight02Icon}
                                strokeWidth={2}
                                className="text-primaryDark group-hover:text-foreground"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function JobDescription() {
    return (
        <div className="flex flex-1 flex-col lg:border-r-2 lg:border-border lg:pr-6">
            <div className="mb-4 flex items-center gap-2">
                <p className="flex items-center gap-2">
                    <HugeiconsIcon strokeWidth={2} className="h-6 w-6" icon={Briefcase07Icon} />
                    <span className="font-head text-lg">Target Job Description</span>
                </p>
            </div>
            <div className="relative grow">
                <textarea
                    required
                    placeholder="Paste the full job description here ... "
                    className="h-80 w-full resize-none bg-foreground p-4 pt-12 text-base text-background focus:outline-none lg:h-full"
                ></textarea>
                <div className="absolute top-4 flex w-full items-center justify-between px-4 text-primary">
                    <span>min : 300 & max : 2000</span>
                    <span>curr : 408</span>
                </div>
            </div>
        </div>
    );
}

function Profile() {
    return (
        <div className="flex flex-1 flex-col lg:pl-6">
            <p className="mb-2 flex items-center gap-2">
                <HugeiconsIcon strokeWidth={2} className="h-6 w-6" icon={Male02Icon} />
                <span className="font-head text-lg">Your Profile</span>
            </p>
            <ResumeUpload />
            <SelfDescription />
        </div>
    );
}

function SelfDescription() {
    return (
        <div className="flex grow flex-col">
            <p className="mt-4 mb-2 font-head text-lg">Self Description</p>
            <div className="relative grow">
                <textarea
                    className="h-60 w-full resize-none bg-foreground p-4 pt-12 text-base text-background focus:outline-none lg:h-full"
                    placeholder="Briefly describe your experience, key skills, and years of experience."
                ></textarea>
                <div className="absolute top-4 flex w-full items-center justify-end px-4 text-primary">
                    <span className="">408 / 1000</span>
                </div>
                <div className="absolute right-4 bottom-3 mt-2 flex cursor-pointer items-center justify-end gap-3 bg-foreground p-2">
                    <label
                        htmlFor="check-selfdes"
                        className="cursor-pointer font-semibold text-background select-none"
                    >
                        Use Resume data as self-description
                    </label>
                    <Checkbox
                        id="check-selfdes"
                        className="size-4 rounded-none border-none bg-background ring-2 ring-foreground data-checked:bg-background data-checked:text-foreground"
                    />
                </div>
            </div>
        </div>
    );
}

function ResumeUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [drag, setDrag] = useState(false);

    function handleSelect(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if (!e.target.files || e.target.files.length === 0) return;
        const fileData = e.target.files[0];
        const fileType = fileData.type;
        if (fileType !== "application/pdf") {
            toast.error("Only PDF files are allowed");
            return;
        }
        setFile(fileData);
    }

    function handleRemoveFile() {
        setFile(null);
    }

    function handleDragEnter(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDrag(true);
    }

    function handleDragLeave(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDrag(false);
    }

    function handleDragOver(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDrag(true);
    }

    function handleDrop(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDrag(false);
        const fileData = e.dataTransfer.files[0];
        const fileType = fileData.type;
        if (fileType !== "application/pdf") {
            toast.error("Only PDF files are allowed");
            return;
        }
        setFile(fileData);
    }

    return (
        <div>
            <p className="mb-2 font-head text-lg">Upload Resume</p>
            <label
                htmlFor="resume-upload"
                className="block h-45 w-full cursor-pointer bg-foreground p-2"
            >
                <div
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className={cn(
                        "flex h-full items-center justify-center border-2 border-dashed border-primary text-background",
                        drag && "border-solid",
                    )}
                >
                    <div
                        className={cn(
                            "flex flex-col items-center justify-between h-full p-4",
                            drag && "opacity-0",
                        )}
                    >
                        <span>
                            <HugeiconsIcon
                                icon={CloudUploadIcon}
                                strokeWidth={1}
                                className="h-12 w-12 text-primary"
                            />
                        </span>
                        {!file && (
                            <div>
                                <p className="mt-2 text-lg">
                                    Click to Upload Resume or Drag & Drop{" "}
                                </p>
                                <p className="mt-1 text-sm text-background/70">{`File Type : PDF | Max Size : 3MB | Max PageCount : 2`}</p>
                            </div>
                        )}
                        {file && (
                            <div className="flex items-center justify-center gap-2.5 rounded-[0.5rem] bg-background p-2 px-3">
                                <button onClick={handleRemoveFile} className="cursor-pointer">
                                    <HugeiconsIcon
                                        icon={Cancel01Icon}
                                        strokeWidth={2.5}
                                        className="h-4 w-4 text-foreground"
                                    />
                                </button>
                                <div>
                                    <HugeiconsIcon
                                        icon={Pdf01Icon}
                                        strokeWidth={1}
                                        className="h-10 w-10 text-red-500"
                                    />
                                </div>
                                <div className="text-foreground">
                                    <p className="text-base">
                                        {file.name.slice(0, 30)}
                                        {file.name.length > 30 ? "..." : ""}
                                    </p>
                                    <span className="text-sm">{formatFileSize(file.size)}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </label>
            {!file && (
                <input
                    required
                    type="file"
                    onChange={handleSelect}
                    id="resume-upload"
                    className="hidden"
                />
            )}
        </div>
    );
}
