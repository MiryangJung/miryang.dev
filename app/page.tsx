import HomeBanner from "./components/banner";
import RecentPosts from "./components/recent-posts";

export default async function HomePage() {
  return (
    <>
      <HomeBanner />
      <RecentPosts />
    </>
  );
}
