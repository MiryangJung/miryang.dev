import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PageLayout title="Projects" description="활동들을 기록합니다.">
			{children}
		</PageLayout>
	);
}
