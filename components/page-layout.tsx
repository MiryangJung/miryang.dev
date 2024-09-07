import { cn } from "./ui/utils";

interface PageLayoutProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
	className?: string;
}

export default function PageLayout({
	children,
	title,
	description,
	className,
}: PageLayoutProps) {
	return (
		<div className={cn(["px-5 pt-7 pb-16 flex flex-col gap-5", className])}>
			{(title || description) && (
				<div className="flex flex-col gap-2">
					{title && (
						<h1 className="text-6xl font-medium text-primary first-letter:font-black">
							{title.toUpperCase()}
						</h1>
					)}
					{description && (
						<span className="text-primary font-medium">{description}</span>
					)}
				</div>
			)}

			{children}
		</div>
	);
}
