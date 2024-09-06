import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PageLayout title="익명 방명록" className="gap-1">
			{children}
		</PageLayout>
	);
}
