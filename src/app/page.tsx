import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Kantin Sekolah Digital
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Platform pemesanan makanan dan minuman digital untuk memudahkan siswa dan guru dalam bertransaksi di kantin sekolah.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/register"
              className="rounded-md bg-foreground px-3.5 py-2.5 text-sm font-semibold text-background shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Mulai Sekarang
            </a>
            <a href="/about" className="text-sm font-semibold leading-6">
              Pelajari Lebih Lanjut <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
