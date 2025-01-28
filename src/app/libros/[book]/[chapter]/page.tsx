"use client";

import { getChapterByBook } from "@/api";
import React, { useState, useEffect, useCallback } from "react";
import { Spinner } from "@heroui/spinner";
import { Select, SelectItem } from "@heroui/select";
import { Divider } from "@heroui/divider";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Verse = {
  id: number;
  number: number;
  verse: string;
  study?: string;
};

type Book = {
  num_chapters: number;
  vers: Verse[];
};


export default function Chapter({
  params,
}: {
  params: { book: string; chapter: string };
}) {
  const { book, chapter } = params;
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState<{ key: string; label: string }[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<number>(+chapter);
  const router = useRouter();

  const fetchBookByChapter = useCallback(async () => {
    try {
      const booksData = await getChapterByBook(book, +chapter);
      setBooks(booksData);

      const totalChapters = booksData[0].num_chapters;
      const chaptersArray = Array.from({ length: totalChapters }, (_, i) => ({
        key: `${i + 1}`,
        label: `Capitulo ${i + 1}`,
      }));
      setChapters(chaptersArray);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  }, [book, chapter]);

  useEffect(() => {
    fetchBookByChapter();
    document.title = `${book} - Cap. ${chapter}`;
  }, [books,chapter]);

  useEffect(() => {
    if (selectedChapter !== +chapter) {
      router.push(`/libros/${book}/${selectedChapter}`);
    }
  }, [selectedChapter, chapter, book, router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-6 md:px-24 font-plusJakartaSans">
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="capitalize text-4xl md:text-5xl font-bold mb-6">
            {book} - {chapter} : 1
          </h1>
          <Spinner size="lg" color="warning" />
        </div>
      ) : (
        <div className="max-w-6xl w-full">
          <Breadcrumbs variant="solid" radius="md">
            <BreadcrumbItem>
              <Link href="/">Inicio</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/libros">Libros</Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="capitalize">{book}</BreadcrumbItem>
            <BreadcrumbItem>Cap. {chapter}</BreadcrumbItem>
          </Breadcrumbs>

          <div className="w-full max-w-3xl mx-auto rounded-xl shadow-lg p-6 space-y-6">
            <div className="flex justify-center">
              <Select
                className="max-w-xs mb-6"
                items={chapters}
                placeholder="Ir a un capítulo"
                defaultSelectedKeys={[selectedChapter.toString()]}
                onChange={(selected) => {
                  setSelectedChapter(Number(selected.target.value));
                }}
              >
                {(chapter) => <SelectItem>{chapter.label}</SelectItem>}
              </Select>
            </div>

            <h1 className="capitalize font-black mb-12 text-4xl text-center bg-gradient-to-br from-[#ffffff] to-[#bababa] bg-clip-text text-transparent md:text-5xl ">
              <span className="">{book} </span>
              {chapter}
            </h1>

            <Divider className="my-20" />

            {books[0]?.vers.map((verse: Verse) => (
              <div
                key={verse.id}
                className="flex font-inter items-start space-x-3"
              >
                <span className="text-[13px] px-2 pt-0.5 font-semibold text-[#ffffff] bg-gradient-to-br from-[#3b3b3bcb] to-[#1c1c1c] rounded-md">
                  {verse.number}
                </span>
                <div className="font-light">
                  <p className="text-[#cecece] text-lg">{verse.verse}</p>
                  {verse.study && (
                    <p className="mt-7 text-lg font-bold font-geist text-[#ffc042] italic">
                      -{verse.study}-
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
