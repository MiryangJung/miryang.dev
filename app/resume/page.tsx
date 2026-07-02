import metadata from "@/util/metadata";
import type { Metadata } from "next";
import ResumeView from "./components/ResumeView";
import resume from "./data/resume";

export default function ResumePage() {
	return (
		<ResumeView
			resume={resume}
			langSwitch={{ href: "/resume/en", label: "English Version" }}
			printLabel="PDF 저장"
		/>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return metadata({
		title: "정미량 이력서",
		description: "프론트엔드 개발자 이력서",
		path: "/resume",
	});
}
