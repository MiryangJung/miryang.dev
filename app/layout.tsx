import type { Metadata } from "next";
import "./style/globals.css";
import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";
import Header from "@/components/header";
import { ThemeProvider } from "./components/theme-provider";
import { suit } from "./style/fonts/suit";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko" className={suit.className} suppressHydrationWarning>
			<body className="max-w-screen-md min-w-[320px] mx-auto">
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<main className="flex flex-col">
						<Header />
						{children}
					</main>
				</ThemeProvider>
				<Footer />
				<GoogleAnalytics />
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: "Miryang | Frontend Engineer",
	description:
		"miryang.dev, 프론트엔드 개발자의 블로그, Lazy Frontend Engineer who likes to travel",
};
