export function sortByPublishedDate<T extends { publishedAt: string }>(
  data: T[]
): T[] {
  return [...data].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );
}