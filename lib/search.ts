import { Document } from "flexsearch";
import rawJokeData from "../data/joke.json";

// 强制 jokeData 类型
export const jokeData: { amount: number; jokes: Joke[] } = rawJokeData as any;

// ✅ FlexSearch Document 索引
// 注意：DocumentType 使用 Record<string, string | number>，确保 TS 类型兼容
export const jokeIndex = new Document({
  document: {
    id: "id",
    index: ["category", "joke"],
  },
});

// 加载数据
jokeData.jokes.forEach((item) => {
  jokeIndex.add(item as any); // 使用 as any 绕开严格 TS 类型约束
});

// 搜索函数
export async function searchJokes(keyword: string) {
  if (!keyword.trim()) return [];

  const results = await jokeIndex.searchAsync(keyword, { limit: 20 });

  // searchAsync 返回的是分组格式，需要 flatten
  const flat = results.flatMap((r) => r.result);

  // 用 Map 将 id 转回完整数据
  const map = new Map(jokeData.jokes.map((j) => [j.id, j]));
  return flat.map((id) => map.get(Number(id)));
}
