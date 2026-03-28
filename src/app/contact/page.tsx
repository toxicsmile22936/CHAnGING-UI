import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Sparkles, Youtube } from "lucide-react";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Start a Project | Eomeg Studio",
  description:
    "Start a premium project inquiry with Eomeg Studio. Share your goals, scope, timeline, and investment range.",
};

const shellClass = "mx-auto w-[min(1120px,calc(100%-1.5rem))] sm:w-[min(1120px,calc(100%-2.5rem))]";

export default function ContactPage() {
  return (
    <main className="relative overflow-x-clip pb-16 text-[#1f2a44]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-5rem] left-[-4rem] hidden h-52 w-52 rounded-full bg-[#e8e0ff]/60 blur-3xl sm:block" />
        <div className="absolute top-[26%] right-[-4rem] hidden h-56 w-56 rounded-full bg-[#dceeff]/55 blur-3xl sm:block" />
        <div className="absolute bottom-[-6rem] left-1/3 hidden h-52 w-52 rounded-full bg-[#ffeaf5]/60 blur-3xl sm:block" />
      </div>

      <header className={`${shellClass} sticky top-3 z-20 mt-4`}>
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/70 bg-white/72 px-4 py-2 backdrop-blur-[4px] md:px-5 md:backdrop-blur-sm">
          <Link href="/" className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-[#2f365d]">
            Eomeg<span className="text-[#9b8dff]">.</span>
          </Link>
          <nav className="hidden items-center gap-1 text-sm font-medium text-[#3d4876] sm:flex">
            <Link href="/services" className="rounded-full px-3 py-1.5 transition hover:bg-[#e9eeff]">
              Services
            </Link>
            <Link href="/privacy" className="rounded-full px-3 py-1.5 transition hover:bg-[#e9eeff]">
              Privacy
            </Link>
            <Link href="/terms" className="rounded-full px-3 py-1.5 transition hover:bg-[#e9eeff]">
              Terms
            </Link>
          </nav>
          <a
            href="mailto:hello@aetherstudio.co"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#cfd8ff] bg-white/84 px-3 py-1.5 text-xs font-semibold tracking-[0.01em] text-[#39457a] backdrop-blur-[2px] md:text-sm"
          >
            <Mail className="size-3.5" />
            hello@aetherstudio.co
          </a>
        </div>
      </header>

      <section className={`${shellClass} pt-10 pb-8 sm:pt-14`}>
        <div className="contact-hero-wrap relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/68 p-6 shadow-[0_18px_46px_rgba(171,188,242,0.18)] backdrop-blur-[3px] md:p-10 md:backdrop-blur-sm">
          <div className="contact-hero-art pointer-events-none absolute inset-0" aria-hidden>
            <div className="hero-grid" />
            <div className="hero-glow hero-glow-a" />
            <div className="hero-glow hero-glow-b" />
            <div className="hero-arc hero-arc-a" />
            <div className="hero-arc hero-arc-b" />
          </div>

          <div className="relative z-[2] md:pr-[19rem]">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d4ddff] bg-white/86 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[#6574ad] uppercase">
              <Sparkles className="size-3.5" />
              Start a Project
            </p>
            <h1 className="contact-premium-title mt-4 max-w-4xl font-[var(--font-heading)] text-4xl leading-[1.02] font-medium tracking-[-0.02em] text-[#1f2856] sm:text-5xl md:text-6xl">
              Premium inquiry for focused, high-impact creative work.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4b5789] sm:text-lg">
              Share your project intent and constraints. You will receive scope direction, investment guidance, and the best-fit service path.
            </p>
            <div className="mt-6 flex items-center gap-2.5 md:hidden">
              <SocialOrb className="orb orb-sm orb-instagram orb-inline">
                <Instagram className="size-4" />
              </SocialOrb>
              <SocialOrb className="orb orb-sm orb-x orb-inline">
                <span className="text-sm font-bold leading-none">X</span>
              </SocialOrb>
              <SocialOrb className="orb orb-sm orb-youtube orb-inline">
                <Youtube className="size-4" />
              </SocialOrb>
            </div>
          </div>

          <div className="pointer-events-none absolute top-4 right-[-1rem] hidden h-[360px] w-[340px] md:block" aria-hidden>
            <SocialOrb className="orb orb-lg orb-a orb-instagram">
              <Instagram className="size-5" />
            </SocialOrb>
            <SocialOrb className="orb orb-md orb-b orb-x">
              <span className="text-sm font-bold leading-none">X</span>
            </SocialOrb>
            <SocialOrb className="orb orb-md orb-c orb-facebook">
              <Facebook className="size-5" />
            </SocialOrb>
            <SocialOrb className="orb orb-sm orb-d orb-youtube">
              <Youtube className="size-[18px]" />
            </SocialOrb>
            <SocialOrb className="orb orb-sm orb-e orb-linkedin">
              <Linkedin className="size-[18px]" />
            </SocialOrb>
            <SocialOrb className="orb orb-xs orb-f orb-clear">
              <span className="text-[11px] font-bold leading-none">Ae</span>
            </SocialOrb>
            <span className="orb-ring ring-a" />
            <span className="orb-ring ring-b" />
          </div>
        </div>
      </section>

      <section className={`${shellClass} pb-8`}>
        <div className="grid gap-5 lg:grid-cols-12">
          <aside className="space-y-4 lg:col-span-4">
            <div className="rounded-3xl border border-[#dbe3ff] bg-white/82 p-5 shadow-[0_12px_30px_rgba(176,191,244,0.12)]">
              <p className="text-xs font-semibold tracking-[0.08em] text-[#7483b6] uppercase">What to expect</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#475684]">
                <li>Scope recommendations tailored to your goals</li>
                <li>Investment range aligned to quality and timeline</li>
                <li>Clear next steps and estimated kickoff window</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[#dbe3ff] bg-white/78 p-5">
              <p className="text-xs font-semibold tracking-[0.08em] text-[#7483b6] uppercase">Response rhythm</p>
              <p className="mt-3 text-sm leading-relaxed text-[#475684]">
                Typical response time is within 24 hours on business days.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <form
              action="/thank-you"
              method="get"
              className="rounded-3xl border border-[#dbe3ff] bg-white/84 p-5 shadow-[0_14px_34px_rgba(176,191,244,0.14)] sm:p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name" required>
                  <input id="name" name="name" required placeholder="Your full name" className={inputClass} />
                </Field>
                <Field label="Email" htmlFor="email" required>
                  <input id="email" name="email" type="email" required placeholder="you@brand.com" className={inputClass} />
                </Field>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Company / Brand" htmlFor="company">
                  <input id="company" name="company" placeholder="Brand or studio name" className={inputClass} />
                </Field>
                <Field label="Project Type" htmlFor="projectType" required>
                  <select id="projectType" name="projectType" required className={inputClass}>
                    <option value="">Select a project type</option>
                    <option>Brand Films</option>
                    <option>Short-form Content</option>
                    <option>Portfolio / Landing Pages</option>
                    <option>Motion Graphics</option>
                    <option>Creative Direction</option>
                    <option>Combined Engagement</option>
                  </select>
                </Field>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Estimated Budget" htmlFor="budget" required>
                  <select id="budget" name="budget" required className={inputClass}>
                    <option value="">Select an investment range</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </Field>
                <Field label="Timeline" htmlFor="timeline" required>
                  <select id="timeline" name="timeline" required className={inputClass}>
                    <option value="">Select expected timeline</option>
                    <option>ASAP (within 2 weeks)</option>
                    <option>2-4 weeks</option>
                    <option>1-2 months</option>
                    <option>Flexible / exploring</option>
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Goals" htmlFor="goals" required>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    rows={4}
                    placeholder="What outcome matters most for this project?"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Reference Links" htmlFor="referenceLinks">
                  <textarea
                    id="referenceLinks"
                    name="referenceLinks"
                    rows={3}
                    placeholder="Paste relevant links (site, moodboard, socials, examples)"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="How did you hear about us?" htmlFor="source">
                  <select id="source" name="source" className={inputClass}>
                    <option value="">Select one</option>
                    <option>Referral</option>
                    <option>Instagram</option>
                    <option>LinkedIn</option>
                    <option>Search</option>
                    <option>Previous client</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-[#bfd0ff] bg-white/88 px-5 py-2.5 text-sm font-semibold tracking-[0.01em] text-[#2f3a6a] backdrop-blur-[2px] transition hover:shadow-[0_10px_20px_rgba(176,191,244,0.18)]"
                >
                  Submit Inquiry <ArrowUpRight className="size-4" />
                </button>
                <p className="text-xs leading-relaxed text-[#6673a7]">
                  By submitting, you agree to the{" "}
                  <Link href="/privacy" className="underline decoration-[#bbc8f9] underline-offset-2">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="underline decoration-[#bbc8f9] underline-offset-2">
                    Terms
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#ced8ff] bg-gradient-to-b from-white to-[#fbfdff] px-3.5 py-2.5 text-sm text-[#2b3868] outline-none transition placeholder:text-[#98a5cf] focus:border-[#a9baf6] focus:ring-4 focus:ring-[#c2d0ff]/45";

function SocialOrb({ className, children }: { className: string; children?: ReactNode }) {
  return <span className={className}>{children ?? null}</span>;
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold tracking-[0.06em] text-[#5e6fa8] uppercase">
        {label} {required ? <span className="text-[#8e7de0]">*</span> : null}
      </label>
      {children}
    </div>
  );
}
