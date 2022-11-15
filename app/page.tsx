import Image from "next/image";
import { getEvents } from "@/lib/api/cinetixx/client";
import Link from "next/link";
import { slugify } from "@/lib/utility/slugify";

async function getData() {
  const data = await getEvents();
  return data;
}

export default async function HomePage() {
  const events = await getData();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 justify-items-center">
      {events.map((event) => (
        <article key={event.id}>
          <Link href={`/programm/${event.id}/${slugify(event.title)}`}>
            <Image
            src={event.posterBig}
            alt={`Filmplakat ${event.title}`}
            height={172}
            width={240}
            />
          </Link>
        </article>
      ))}
    </div>
  );
}
