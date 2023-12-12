export default function HomeBanner() {
  return (
    <div className="flex flex-col gap-2 h-[300px] rounded-lg p-6 bg-no-repeat bg-center bg-[url('/home/dark.gif')]">
      <h1 className="text-xl font-black text-white">Miryang Jung</h1>
      <span className="text-white">
        Lazy Frontend Engineer who likes to travel
      </span>
    </div>
  );
}
