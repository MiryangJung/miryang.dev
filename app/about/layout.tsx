import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="miryang" description="저는 이렇게 일하고 생각하고 행동하는 개발자입니다.">
      {children}
    </PageLayout>
  );
}
