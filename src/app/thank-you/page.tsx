import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Eomeg Studio",
  description: "Your inquiry has been received by Eomeg Studio.",
};

const shellClass = "mx-auto w-[min(960px,calc(100%-1.5rem))] sm:w-[min(960px,calc(100%-2.5rem))]";

export default function ThankYouPage() {
  return (
    <main className="relative min-h-[70vh] overflow-x-clip py-16 text-[#1f2a44] sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[8%] left-[-4rem] hidden h-48 w-48 rounded-full bg-[#e8e0ff]/55 blur-3xl sm:block" />
        <div className="absolute bottom-[4%] right-[-4rem] hidden h-52 w-52 rounded-full bg-[#dceeff]/52 blur-3xl sm:block" />
      </div>
      <section className={shellClass}>
        <div className="rounded-[2rem] border border-white/75 bg-white/75 p-7 text-center shadow-[0_18px_40px_rgba(171,188,242,0.16)] backdrop-blur-[3px] sm:p-10 md:backdrop-blur-sm">
          <CheckCircle2 className="mx-auto size-9 text-[#7f78e6]" />
          <p className="mt-4 text-xs font-semibold tracking-[0.08em] text-[#7785b8] uppercase">Inquiry Received</p>
          <h1 className="mt-3 font-[var(--font-heading)] text-4xl leading-tight text-[#1f2856] sm:text-5xl">
            Thank you. Your project brief is in.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#526194] sm:text-base">
            You can expect a response with scope direction and next steps within 24 hours on business days.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#bfd0ff] bg-white/88 px-5 py-2.5 text-sm font-semibold text-[#2f3a6a] transition hover:shadow-[0_10px_20px_rgba(176,191,244,0.18)]"
            >
              Explore Services <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6defb] bg-white/72 px-5 py-2.5 text-sm font-semibold text-[#425183] transition hover:bg-white/88"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
