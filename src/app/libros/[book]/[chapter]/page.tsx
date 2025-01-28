"use client";

import { getChapterByBook } from "@/api";
import React, { useState, useEffect } from "react";
import { Spinner } from "@heroui/spinner";
import { Select, SelectItem } from "@heroui/select";
import { useRouter } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Divider } from "@heroui/divider";
import Link from "next/link";
export default function Chapter({
  params,
}: {
  params: { book: string; chapter: string };
}) {
  const { book, chapter } = React.use(params);
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState<number>(+chapter);
  const router = useRouter();

  const fetchBookByChapter = async () => {
    try {
      const booksData = await getChapterByBook(book, chapter);
      setBooks(booksData);

      const totalChapters = booksData.num_chapters;
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
  };

  useEffect(() => {
    fetchBookByChapter();
    document.title = `${book} - Cap. ${chapter}`;
  }, [book, chapter]);

  useEffect(() => {
    if (selectedChapter !== chapter) {
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
          </div>

          <div className="w-full max-w-3xl mx-auto rounded-xl shadow-lg p-6 space-y-6">
            <div className="flex justify-center">
              <Select
                className="max-w-xs mb-6"
                items={chapters}
                placeholder="Ir a un capítulo"
                defaultSelectedKeys={[selectedChapter.toString()]}
                onChange={(selected) => {
                  setSelectedChapter(selected.target.value);
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

            {books?.vers.map((verse: any) => (
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
