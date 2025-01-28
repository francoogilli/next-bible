import Github from "@/icons/Github";

export default function Home() {
  return (
    <main className="flex font-plusJakartaSans min-h-screen flex-col items-center justify-start  px-4 md:px-24 relative">
      <div className="absolute top-0 z-[-2] h-screen w-full bg-[#09090B] bg-[radial-gradient(ellipse_42%_68%_at_50%_-20%,rgba(216,195,135,0.3),rgba(255,255,255,0))] md:bg-[radial-gradient(ellipse_22%_70%_at_50%_-20%,rgba(216,195,135,0.3),rgba(255,255,255,0))]"></div>

      <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mt-24 md:mt-0">
        <img
          src="/Laurel-Tiras.png"
          className="absolute inset-0 w-full h-full"
          style={{ animation: "levitate 30s ease infinite" }}
          draggable="false"
        />
        <img
          src="/Book1.png"
          className="absolute inset-0 w-full h-full"
          style={{ animation: "levitate 15s ease infinite" }}
          draggable="false"
        />
        <img
          src="/Cruz.png"
          className="absolute inset-0 w-full h-full"
          style={{ animation: "levitate 12s ease infinite" }}
          draggable="false"
        />
        <img
          src="/HojaDerecha.png"
          className="absolute inset-0 w-full h-full"
          style={{ animation: "levitate 10s ease infinite" }}
          draggable="false"
        />
        <img
          src="/HojaIzquierda.png"
          className="absolute inset-0 w-full h-full"
          style={{ animation: "levitate 9s ease infinite" }}
          draggable="false"
        />
      </div>

      <div className="max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl font-black text-zinc-100 z-10 mt-2">
          Descubrí la Biblia de forma gratuita en Español
        </h1>
        <p className="text-base md:text-lg text-gray-400 font-medium pt-5">
          Explora las Sagradas Escrituras sin costo: Descubre la Palabra sin
          coste alguno. Si queres colaborar al proyecto, podes hacerlo en el
          repositorio de GitHub.
        </p>
        <div className="mt-5 flex justify-center gap-x-4">
          <a
            href="/libros"
            className="bg-[#0073fff2] text-white hover:bg-[#0073ffe3] transition duration-200 flex justify-center items-center px-5 py-2.5 rounded-xl font-bold text-base md:hidden"
          >
            Empezar
          </a>
          <a
            href="/libros"
            className="bg-[#0073fff2] text-white hover:bg-[#0073ffe3] transition duration-200  justify-center items-center px-5 py-2.5 rounded-xl font-bold text-base hidden md:flex"
          >
            Empezar a leer
          </a>
          <a
            href="https://github.com/francoogilli/bible"
            target="_blank"
            className="bg-zinc-900/70 hover:bg-zinc-800/70 transition duration-200 border border-zinc-800 text-zinc-100 flex justify-center items-center gap-x-2.5 px-5 py-2.5 rounded-xl font-semibold text-base md:hidden"
          >
            <Github className="size-5"/>
            GitHub
          </a>
          <a
            href="https://github.com/francoogilli/bible"
            target="_blank"
            className="bg-zinc-900/70 hover:bg-zinc-800/70 transition duration-200 border border-zinc-800 text-zinc-100 justify-center items-center gap-x-2.5 px-5 py-2.5 rounded-xl font-semibold text-base hidden md:flex"
          >
            <Github className="size-5" />
            Star on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
