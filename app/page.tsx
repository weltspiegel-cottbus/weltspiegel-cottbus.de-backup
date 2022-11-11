import { getEvents } from "@/lib/api/cinetixx/client";

async function getData() {
  const data = await getEvents();
  console.log(data);
  return data;
}

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <h1>Weltspiegel Cottbus</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
