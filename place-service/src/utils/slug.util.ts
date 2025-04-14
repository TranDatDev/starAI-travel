import slugify from 'slugify';

export function generateSlug(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,
    locale: 'vi',
  });
}

export function generateSlugWithCode(name: string, code: string): string {
  return `${slugify(name, { lower: true, strict: true, locale: 'vi' })}-${code}`;
}

export function generateSlugWithShortId(name: string, shortId: string): string {
  return `${slugify(name, { lower: true, strict: true, locale: 'vi' })}-${shortId}`;
}
