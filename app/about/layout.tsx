import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="miryang" description="안녕하세요. 너무 반갑습니다. 🫶">
      {children}
    </PageLayout>
  );
}
