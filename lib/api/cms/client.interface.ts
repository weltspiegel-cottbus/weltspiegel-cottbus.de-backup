import { HomepageEntry } from "./model/homepage-entry";

export interface CmsClient {
  getHomepageEntries(): Promise<HomepageEntry[]>;
  getImageUrl(path: string): string;
}
