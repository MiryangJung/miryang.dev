"use client";

import { useEffect, useRef } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import Bubble from "./bubble";
import { useGuestbook } from "./guestbook-context";

export default function GuestbookList() {
	const { loading, items, hasNextPage, loadMore, pendingId, error, count } =
		useGuestbook();
	const pendingRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (pendingId !== null) {
			pendingRef.current?.scrollIntoView({
				block: "center",
				behavior: "auto",
			});
		}
	}, [pendingId]);

	const [scrollRef] = useInfiniteScroll({
		loading,
		hasNextPage,
		onLoadMore: loadMore,
		disabled: Boolean(error),
		rootMargin: "0px 0px 400px 0px",
	});

	return (
		<>
			<h2 className="text-primary mb-5 font-medium">
				22년 01월부터 작성된 방명록 <b>{count}개</b>
			</h2>
			<div className="flex flex-col gap-5 my-5 min-h-screen pb-44">
				{items.map((bubble) => (
					<div
						key={bubble.id}
						ref={bubble.id === pendingId ? pendingRef : undefined}
					>
						<Bubble {...bubble} pending={bubble.id === pendingId} />
					</div>
				))}
				{error && (
					<div role="alert" className="text-sm text-primary">
						<p>{error}</p>
						<button type="button" className="underline" onClick={loadMore}>
							다시 불러오기
						</button>
					</div>
				)}
				{(loading || hasNextPage) && <div ref={scrollRef} className="h-1" />}
				{loading && (
					<p role="status" className="text-sm text-primary">
						불러오는 중…
					</p>
				)}
			</div>
		</>
	);
}
