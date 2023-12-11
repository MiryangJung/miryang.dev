import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageLayout className="px-0 pt-0">{children}</PageLayout>;
}
