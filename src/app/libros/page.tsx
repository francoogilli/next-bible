"use client";

import { getBooks } from "@/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";

interface Book {
  names: string[];
  abrev: string;
  chapters: number;
  testament: string;
}

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const booksData = await getBooks();
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const oldTestament = books.filter(
    (book) => book.testament === "Antiguo Testamento"
  );
  const newTestament = books.filter(
    (book) => book.testament === "Nuevo Testamento"
  );

  return (
    <main className="flex font-plusJakartaSans min-h-screen max-w-[90rem] mx-auto flex-col items-center justify-start px-4 md:px-24 relative">
      <div className="flex justify-center items-center gap-2 my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-[#f1f1f1f2] size-8"
        >
          <path
            fill="currentColor"
            d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.945 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v8.11c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h4.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117zM5.41 3.409c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h4c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v7.25H7.782c-.818 0-1.376 0-1.855.128a3.8 3.8 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399m-.632 14.84c.015.354.039.665.076.943c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h4c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.083-.615.099-1.395.102-2.441H7.898c-.978 0-1.32.006-1.583.077a2.25 2.25 0 0 0-1.538 1.422"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-2xl font-bold my-4">Libros de la Biblia</h1>
      </div>

      <section className="w-full">
        <h2 className="scroll-m-20 font-galada tracking-wider flex justify-center text-6xl text-[#e3e3e3] pb-10">
          Antiguo Testamento
        </h2>
        <div className="mx-auto grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7">
          {oldTestament.map((book) => (
            <Link
              key={book.abrev}
              href={`/libros/${book.names[0].toLowerCase()}/1`}
              className=""
            >
              <Card className="hover:bg-[#fbfbfbe9] font-medium hover:font-semibold hover:text-black">
                <CardBody>{book.names[0]}</CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full mt-20">
        <h2 className="scroll-m-20 font-galada tracking-wider flex justify-center text-6xl text-[#e3e3e3] pb-10">
          Nuevo Testamento
        </h2>
        <div className="mx-auto grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7">
          {newTestament.map((book) => (
            <Link
              key={book.abrev}
              href={`/libros/${book.names[0].toLowerCase()}/1`}
              className=""
            >
              <Card className="hover:bg-[#fbfbfbe9] font-medium hover:font-semibold hover:text-black">
                <CardBody>{book.names[0]}</CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
