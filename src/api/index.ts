"use server";

export async function getBooks(): Promise<Book[]> {
  const response = await fetch("https://bible-api.deno.dev/api/books");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export async function getChapterByBook(
  book: string,
  chapter: number
): Promise<Book[]> {
  const response = await fetch(
    `https://bible-api.deno.dev/api/read/rv1960/${book}/${chapter}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
