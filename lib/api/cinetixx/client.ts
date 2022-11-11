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

  const events: { [eventId: string]: Event } = {};

  data.ShowInfo.Show.forEach((element: any) => {
    const eventId = element.EVENT_ID;
    if (!events[eventId]) {
      events[eventId] = { title: element.VERANSTALTUNGSTITEL };
    }
  });

  return events;
}
