import { getGuestbooks, getGuestbooksCount } from "@/data/guestbook/get";
import metadata from "@/util/metadata";
import type { Metadata } from "next";
import GuestbookForm from "./components/form";
import { GuestbookProvider } from "./components/guestbook-context";
import GuestbookList from "./components/list";

export const dynamic = "force-dynamic";

export default async function GuestbookPage() {
	const [pinned, messages, count] = await Promise.all([
		getGuestbooks({ pinned: true }),
		getGuestbooks(),
		getGuestbooksCount(),
	]);

	return (
		<GuestbookProvider
			initialItems={[...pinned, ...messages]}
			initialCount={count}
		>
			<GuestbookList />
			<GuestbookForm />
		</GuestbookProvider>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return metadata({
		title: "방명록",
		description: "방명록",
		path: "/guestbook",
	});
}
