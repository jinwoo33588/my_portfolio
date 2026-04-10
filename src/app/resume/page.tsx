import ResumeBody from "./ResumeBody";
import { resumeContent } from "@/contents/resume";

export default function ResumePage() {
  return (
    <main className="px-6 py-10">
      <ResumeBody content={resumeContent} />
    </main>
  );
}
