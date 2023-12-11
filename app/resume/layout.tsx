import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageLayout className="px-0 py-10 bg-gray-50 dark:bg-gray-900">{children}</PageLayout>;
}
