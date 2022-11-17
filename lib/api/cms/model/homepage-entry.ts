import { AssetImage } from "./asset-image";

export type HomepageEntry = {
  nr: number;
  title?: string;
  link?: string;
  info?: string;
  text?: string;
  image?: AssetImage;
}
