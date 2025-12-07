import jokeData from "../../../../data/joke.json";

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const { jokes } = jokeData;
  const joke = jokes.find((j) => String(j.id) === id);
  return (
    <div>
      <h1>detail {id}</h1>
      <p>categary: {joke?.category}</p>
      <p>categary: {joke?.joke}</p>
    </div>
  );
}

export function generateStaticParams() {
  return jokeData.jokes.map((j: Joke) => ({
    id: j.id.toString(),
  }));
}
