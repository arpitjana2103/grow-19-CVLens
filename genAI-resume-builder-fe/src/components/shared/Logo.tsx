import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
    return <span className={cn("inline-block", className)}>Logo</span>;
}
