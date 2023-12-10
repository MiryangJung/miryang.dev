import ProjectCards from "./components/cards";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-xl font-bold">프로젝트</h1>
      <span className="text-gray-500 mb-5">활동들을 기록합니다.</span>
      <ProjectCards />
    </>
  );
}
