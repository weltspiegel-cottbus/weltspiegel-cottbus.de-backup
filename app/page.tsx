import Image from "next/image";
import { getEvents } from "@/lib/api/cinetixx/client";
import Link from "next/link";
import { slugify } from "@/lib/utility/slugify";
import { cmsClient } from "@/lib/api/cms/client.facade";

async function getData() {
  const data = await getEvents();
  return data;
}

async function getHomepageEntries() {
  return await cmsClient.getHomepageEntries();
}

export default async function HomePage() {
  const entries = await getHomepageEntries();
  const events = await getData();

  return (
    <div className="space-y-4 text-center">
      <div className="space-y-4 lg:px-12">
        {entries.map((entry, ix) => (
          <div key={ix} className="flex flex-col gap-y-4">
            {entry.info && (
              <span className="text-white text-2xl">{entry.info}</span>
            )}
            {entry.title &&
              (entry.link ? (
                entry.link.startsWith("http") ? (
                  <a href={entry.link}>
                    <h2 className="content-link text-2xl">{entry.title}</h2>
                  </a>
                ) : (
                  <Link className="content-link text-2xl" href={entry.link}>
                    {entry.title}
                  </Link>
                )
              ) : (
                <h2 className="text-orange-400 text-2xl">{entry.title}</h2>
              ))}
            {entry.image && (
              <Image
                className="w-full object-cover"
                src={cmsClient.getImageUrl(entry.image.url)}
                alt={entry.image.title}
                width={entry.image.width}
                height={entry.image.height}
              />
            )}
            {entry.text && <p>{entry.text}</p>}
            <hr className="border-orange-200 my-2" />
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-white text-2xl">Heute</h2>
      </div>
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
    </div>
  );
}
