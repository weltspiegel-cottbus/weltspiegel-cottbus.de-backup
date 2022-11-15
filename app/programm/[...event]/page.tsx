import { getEvent } from "@/lib/api/cinetixx/client";
import Image from "next/image";

async function getData({ params }: { params: { event: string[] } }) {
  const [eventId] = params.event;

  return await getEvent(eventId);
}

export default async function Page({
  params,
}: { params: { event: string[] } }) {
  const event = await getData({ params });

  return event ? (
    <div className="sm:mt-0 sm:pl-12 md:pl-24">
      <div className="float-left mr-4 mb-1 shrink-0 grow-0 h-60 w-[172px] p-1 bg-stone-600">
        <div className="relative h-full w-full">
          <Image
            src={event.posterBig}
            alt={`Plakat ${event.title}`}
            fill={true}
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl">{event.title}</h3>
        <p className="mt-2 leading-relaxed">{event.text}</p>
      </div>
    </div>
  ) : (
    <h2>Kein Event</h2>
  );
}
