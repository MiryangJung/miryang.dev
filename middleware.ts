import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";

// @ts-ignore locales are readonly
const locales: string[] = i18n.locales;

function getLocale(request: NextRequest): string | undefined {
	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: Record<string, string> = {};
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// Use negotiator and intl-localematcher to get best locale
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales,
	);

	const locale = matchLocale(languages, locales, i18n.defaultLocale);

	return locale;
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Check if the default locale is in the pathname
	if (pathname.startsWith("/ko/") || pathname === "/ko") {
		// e.g. incoming request is /ko/about
		// The new URL is now /about
		return NextResponse.redirect(
			new URL(
				pathname.replace("/ko", pathname === "/ko" ? "/" : ""),
				request.url,
			),
		);
	}

	const pathnameIsMissingLocale = locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
	);

	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);

		console.log("locale", locale);

		// e.g. incoming request is /about
		// Tell Next.js it should pretend it's /en/about
		return NextResponse.rewrite(new URL(`/${locale}${pathname}`, request.url));
	}
}

export const config = {
	matcher: ["/((?!api|_next|css|favicon.ico|sitemap.xml|.*\\.gif$).*)"],
};
