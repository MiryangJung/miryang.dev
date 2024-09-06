"use client";

import Bubble from "./bubble";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useGuestbook } from "./guestbook-context";

export default function GuestbookList() {
  const { loading, items, hasNextPage, loadMore } = useGuestbook();

  const [scrollRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <>
      {items?.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}

      {(loading || hasNextPage) && <div ref={scrollRef} />}
    </>
  );
}
