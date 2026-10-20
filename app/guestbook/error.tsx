"use client";

export default function GuestbookError({ reset }: { reset: () => void }) {
	return (
		<div role="alert" className="text-sm text-primary">
			<p>방명록을 불러오지 못했어요.</p>
			<button type="button" className="mt-2 underline" onClick={reset}>
				다시 불러오기
			</button>
		</div>
	);
}
