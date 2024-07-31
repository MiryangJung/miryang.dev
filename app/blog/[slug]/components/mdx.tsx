import { cn } from "@/components/ui/utils";
import { useMDXComponent } from "next-contentlayer/hooks";

interface Props {
  code: string;
}

const components = {
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      target="_blank"
      rel="noopener"
      {...props}
      className={cn([className, "text-[#ff8b9e] dark:text-[#feb3a6]"])}
    />
  ),
};

export function Mdx({ code }: Props) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-slate dark:prose-invert flex-1">
      <Component components={components} />
    </div>
  );
}
