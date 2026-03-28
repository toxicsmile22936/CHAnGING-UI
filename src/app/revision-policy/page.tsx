import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Revision Policy | Eomeg Studio",
  description: "Revision policy for Eomeg Studio creative and web engagements.",
};

const shellClass = "mx-auto w-[min(920px,calc(100%-1.5rem))] sm:w-[min(920px,calc(100%-2.5rem))]";

export default function RevisionPolicyPage() {
  return (
    <main className="relative overflow-x-clip py-14 text-[#1f2a44] sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-4rem] left-[-3rem] hidden h-44 w-44 rounded-full bg-[#e8e0ff]/55 blur-3xl sm:block" />
        <div className="absolute bottom-[-5rem] right-[-3rem] hidden h-48 w-48 rounded-full bg-[#dceeff]/50 blur-3xl sm:block" />
      </div>
      <section className={shellClass}>
        <div className="rounded-[1.9rem] border border-white/75 bg-white/78 p-6 shadow-[0_16px_38px_rgba(171,188,242,0.14)] backdrop-blur-[3px] sm:p-8">
          <p className="text-xs font-semibold tracking-[0.08em] text-[#7785b8] uppercase">Policy</p>
          <h1 className="mt-3 font-[var(--font-heading)] text-4xl leading-tight text-[#1f2856] sm:text-5xl">
            Revision Policy
          </h1>
          <p className="mt-3 text-sm text-[#5b699c]">Last updated: March 28, 2026</p>

          <PolicySection title="Revision Rounds">
            Revision rounds are agreed in scope before production starts. A revision round means one consolidated feedback pass from the client side.
          </PolicySection>
          <PolicySection title="What Is Included">
            Included revisions cover refinements aligned to approved creative direction, messaging, and structure.
          </PolicySection>
          <PolicySection title="What Is Not Included">
            New direction changes, major structural pivots, or new asset creation outside approved scope are treated as additional work.
          </PolicySection>
          <PolicySection title="Feedback Windows">
            To maintain timeline quality, feedback is expected within agreed windows. Extended delays may move delivery dates.
          </PolicySection>
          <PolicySection title="Additional Revisions">
            Extra rounds can be added when needed and are billed at the project rate or day rate based on complexity.
          </PolicySection>
          <PolicySection title="Final Approval">
            Once final approval is given and delivery is completed, later changes are handled as a new support request.
          </PolicySection>

          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <Link href="/privacy" className="rounded-full border border-[#d6defb] bg-white/76 px-4 py-2 font-semibold text-[#425183]">
              Privacy
            </Link>
            <Link href="/terms" className="rounded-full border border-[#d6defb] bg-white/76 px-4 py-2 font-semibold text-[#425183]">
              Terms
            </Link>
            <Link href="/contact" className="rounded-full border border-[#bfd0ff] bg-white/88 px-4 py-2 font-semibold text-[#2f3a6a]">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6 rounded-2xl border border-[#d8e1ff] bg-white/78 p-4 sm:p-5">
      <h2 className="text-lg font-semibold text-[#243263]">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#526194] sm:text-[0.95rem]">{children}</p>
    </section>
  );
}
