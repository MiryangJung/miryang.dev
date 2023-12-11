import metadata from "@/util/metadata";
import ProjectCards from "./components/cards";
import { Metadata } from "next";

export default function ProjectsPage() {
  return (
    <>
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
