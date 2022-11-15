import slugifyStr from 'slugify';

export function slugify(str: string) {
  return slugifyStr(str, { lower: true, locale: 'de' });
}
