import { CmsClient } from "./client.interface";
import { HomepageEntry } from "./model/homepage-entry";

const baseUrl = process.env.COCKPIT_URL;
const apiKey = process.env.COCKPIT_APIKEY;

const client: CmsClient = {
  getHomepageEntries: async function (): Promise<HomepageEntry[]> {
    const response = await fetch(`${baseUrl}api/content/items/homepage_top`, {
      headers: { "api-key": apiKey },
    });
    const data = await response.json();

    const entries: HomepageEntry[] = data.map(
      (entry: Record<string, any>) =>
        ({
          title: entry.title,
          link: entry.link,
          info: entry.info,
          text: entry.text,
          nr: entry.nr,
          image: {
            url: entry.banner?.path,
            title: entry.banner?.title,
            width: entry.banner?.width,
            height: entry.banner?.height,
          },
        }) as HomepageEntry,
    );

    return entries.sort((a, b) => a.nr - b.nr);
  },
  getImageUrl: function (path: string): string {
    return `${baseUrl}storage/uploads/${path}`;
  },
};

export const cockpitClient = client;
