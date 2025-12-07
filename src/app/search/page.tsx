"use client";

import { useEffect, useState } from "react";
import { searchJokes } from "../../../lib/search";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Joke[]>([]);

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (!query) {
        setResult([]);
        return;
      }
      const r = await searchJokes(query);
      setResult(r as Joke[]);
    }, 200);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-semibold">笑话搜索</h1>

      <input
        type="text"
        placeholder="输入关键词..."
        className="w-full rounded-md border px-3 py-2 text-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p className="mt-3 text-gray-500">共找到 {result.length} 条</p>

      <div className="mt-4 space-y-4">
        {result.map((item: any) => (
          <div key={item.id} className="rounded-lg bg-pink-200 p-4 shadow">
            {/* <Link href={"/detail/" + item.id} className="mt-4"> */}
            <p className="font-semibold">分类：{item.category}</p>
            <p className="mt-2">{item.joke}</p>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
