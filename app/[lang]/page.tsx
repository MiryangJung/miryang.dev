import PageLayout from "@/components/page-layout";
import HomeBanner from "../components/banner";
import RecentPosts from "../components/recent-posts";

export default async function HomePage() {
	return (
		<PageLayout>
			<HomeBanner />
			<RecentPosts />
		</PageLayout>
	);
}
