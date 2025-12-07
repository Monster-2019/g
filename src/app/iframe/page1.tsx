export default async function Iframe({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const slot = resolvedParams.slot;
  const displaySlot = Array.isArray(slot) ? slot[0] : slot || "";
  const link = "https://dxin.cc";
  return (
    <div className="flex h-full w-full items-center bg-pink-300 p-4">
      <a href={link} target="_black">
        <img
          src="https://cdn.dxin.cc/fcm_icon.png"
          width={128}
          height={128}
          alt=""
        />
      </a>
      <div className="ml-2 flex-1">
        <a href={link} target="_black">
          <h1 className="text-2xl font-black">{displaySlot}</h1>
        </a>
        <a href={link}>
          <p>addaa</p>
        </a>
        <div className="flex flex-row justify-end">
          <a href={link} target="_black">
            <button className="rounded bg-white px-4 py-2">立即打开</button>
          </a>
        </div>
      </div>
    </div>
  );
}
