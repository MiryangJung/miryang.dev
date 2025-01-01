import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PageLayout className="p-5 bg-white dark:bg-stone-900">
			{children}
		</PageLayout>
	);
}
