import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PageLayout title="Guestbook" className="gap-1">
			{children}
		</PageLayout>
	);
}
