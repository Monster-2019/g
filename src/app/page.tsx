import { getJson } from "../../lib/utils";
import Link from "next/link";
import Button from "@components/Button";
import GoogleAD from "@components/GoogleAD";

export default async function Home() {
  const { amount, jokes } = await getJson("/data/joke.json");
  return (
    <div className="ml-2 flex flex-col text-xl">
      <h1 className="mt-4 text-center">这是一个笑话集合</h1>
      <button className="my-4 inline-block self-center rounded-md border p-2">
        <Link href="/search">前往搜索</Link>
      </button>

      <div className="flex flex-row justify-center gap-4">
        <Button id="btn_1" text="按钮点击测试1" val="btn_1" />
        <Button id="btn_2" text="按钮点击测试2" val="btn_2" />
        <Button id="btn_3" text="按钮点击测试3" val="btn_3" />
      </div>

      <div className="mt-4 flex flex-row justify-center gap-4">
        <p id="text_1" className="rounded border p-2">
          文本点击测试1
        </p>
        <p id="text_2" className="rounded border p-2">
          文本点击测试2
        </p>
        <p id="text_3" className="rounded border p-2">
          文本点击测试3
        </p>
      </div>

      <div className="mt-4 flex flex-row justify-center gap-4">
        <Link href="/detail/54" id="link_1" className="rounded border p-2">
          链接点击测试1
        </Link>
        <Link href="/detail/102" id="text_2" className="rounded border p-2">
          链接点击测试2
        </Link>
        <Link href="/detail/30" id="text_3" className="rounded border p-2">
          链接点击测试3
        </Link>
      </div>

      <p>共 {amount} 条笑话</p>

      {jokes.map((joke: Joke, i: number) => {
        return (
          <>
            {i === 10 || i === 20 ? (
              <GoogleAD slot={String(i / 10).repeat(10)} />
            ) : null}
            <Link href={"/detail/" + joke.id} key={joke.id}>
              <div className="mt-4 rounded-md bg-pink-200 p-4">
                <p>category: {joke.category}</p>
                <p className="mt-2">{joke.joke}</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
