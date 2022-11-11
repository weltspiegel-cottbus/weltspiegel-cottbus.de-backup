async function getData() {
  const data = process.env.MANDATOR_ID;
  return data;
}

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <h1>Weltspiegel Cottbus</h1>
      <pre>{data}</pre>
    </div>
  );
}
