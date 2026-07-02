import metadata from "@/util/metadata";
import type { Metadata } from "next";
import ResumeView from "../components/ResumeView";
import resumeEn from "../data/resume.en";

export default function ResumeEnPage() {
	return (
		<ResumeView
			resume={resumeEn}
			langSwitch={{ href: "/resume", label: "한국어 버전" }}
			printLabel="Save as PDF"
		/>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return metadata({
		title: "Miryang Jung - Resume",
		description: "Frontend Engineer Miryang Jung's Resume",
		path: "/resume/en",
	});
}
