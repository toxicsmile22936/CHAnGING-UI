import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const shellClass = "mx-auto w-[min(920px,calc(100%-1.5rem))] sm:w-[min(920px,calc(100%-2.5rem))]";

export default function NotFound() {
  return (
    <main className="relative min-h-[72vh] overflow-x-clip py-16 text-[#1f2a44] sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[-4rem] hidden h-48 w-48 rounded-full bg-[#e8e0ff]/55 blur-3xl sm:block" />
        <div className="absolute bottom-[6%] right-[-4rem] hidden h-52 w-52 rounded-full bg-[#dceeff]/50 blur-3xl sm:block" />
      </div>
      <section className={shellClass}>
        <div className="rounded-[2rem] border border-white/75 bg-white/78 p-7 text-center shadow-[0_16px_38px_rgba(171,188,242,0.14)] backdrop-blur-[3px] sm:p-10">
          <p className="text-xs font-semibold tracking-[0.1em] text-[#7785b8] uppercase">404</p>
          <h1 className="mt-3 font-[var(--font-heading)] text-4xl leading-tight text-[#1f2856] sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#526194] sm:text-base">
            The page you requested does not exist or may have moved.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#bfd0ff] bg-white/88 px-5 py-2.5 text-sm font-semibold text-[#2f3a6a] transition hover:shadow-[0_10px_20px_rgba(176,191,244,0.18)]"
            >
              Back to Homepage <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6defb] bg-white/74 px-5 py-2.5 text-sm font-semibold text-[#425183] transition hover:bg-white/88"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
