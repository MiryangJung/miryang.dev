"use client";

import { useTheme } from "next-themes";

export default function PrintButton({ label }: { label: string }) {
	const { theme, resolvedTheme, setTheme } = useTheme();

	const handlePrint = () => {
		if (resolvedTheme === "dark") {
			const prevTheme = theme;
			const restore = () => {
				if (prevTheme) setTheme(prevTheme);
				window.removeEventListener("afterprint", restore);
			};
			window.addEventListener("afterprint", restore);
			setTheme("light");
			setTimeout(() => window.print(), 150);
		} else {
			window.print();
		}
	};

	return (
		<button
			type="button"
			onClick={handlePrint}
			className="text-sm hover:underline"
		>
			{label}
		</button>
	);
}
