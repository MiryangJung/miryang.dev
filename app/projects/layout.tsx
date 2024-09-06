import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PageLayout title="프로젝트" description="활동들을 기록합니다.">
			{children}
		</PageLayout>
	);
}
