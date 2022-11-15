import { XMLParser } from "fast-xml-parser";
import { Event } from "./model/event";

export async function getEvents() {
  const res = await fetch(
    `https://api.cinetixx.de/Services/CinetixxService.asmx/GetShowInfoV6?${new URLSearchParams(
      { mandatorId: process.env.MANDATOR_ID },
    )}`,
  );

  const rawString = await res.text();
  const parser = new XMLParser({ ignoreAttributes: true });
  const data = parser.parse(rawString);

  const eventIds: { [eventId: string]: boolean } = {};
  const events: Event[] = [];

  data.ShowInfo.Show.forEach((element: any) => {
    const eventId = element.EVENT_ID;
    if (!eventIds[eventId]) {
      eventIds[eventId] = true;
      events.push({
        id: `${eventId}`,
        title: element.VERANSTALTUNGSTITEL,
        text: element.TEXT,
        poster: element.ARTWORK,
        posterBig: element.ARTWORK_BIG,
      });
    }
  });

  return events;
}

export async function getEvent(eventId: string) {
  const events = await getEvents();

  return events.find((event) => event.id === eventId);
}
