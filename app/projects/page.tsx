import metadata from "@/util/metadata";
import ProjectCards from "./components/cards";
import { Metadata } from "next";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">프로젝트</h1>
      <span className="text-gray-500 mb-5">활동들을 기록합니다.</span>
      <ProjectCards />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return metadata({
    title: "프로젝트",
    description: "프로젝트 목록",
    path: `/projects`,
  });
}
