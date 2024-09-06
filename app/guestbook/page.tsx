import { getGuestbooks, getGuestbooksCount } from "@/data/guestbook/get";
import metadata from "@/util/metadata";
import type { Metadata } from "next";
import GuestbookForm from "./components/form";
import { GuestbookProvider } from "./components/guestbook-context";
import GuestbookList from "./components/list";

export const revalidate = false;

export default async function GuestbookPage() {
	const initialData = await getGuestbooks({ range: { from: 0, to: 49 } });
	const count = await getGuestbooksCount();

	return (
		<>
			<h2 className="text-gray-600 mb-5">
				22년 01월부터 작성된 방명록 <b>{count}개</b>
			</h2>
			<GuestbookProvider initialItems={initialData}>
				<div className="flex flex-col gap-2.5 my-5 min-h-screen">
					<GuestbookList />
				</div>
				<GuestbookForm />
			</GuestbookProvider>
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return metadata({
		title: "방명록",
		description: "방명록",
		path: "/guestbook",
	});
}
