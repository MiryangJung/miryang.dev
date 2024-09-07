export default function HomeBanner() {
	return (
		<div className="block w-full h-[300px] rounded-lg p-6 bg-no-repeat bg-center bg-[url('/home/dark.gif')]">
			<h1 className="text-5xl font-semibold text-primary break-all">
				MIRYANG JUNG
			</h1>
			<p className="text-white text-xl break-all mt-5">
				{"Lazy Frontend Engineer who likes to travel".toUpperCase()}
			</p>
		</div>
	);
}
