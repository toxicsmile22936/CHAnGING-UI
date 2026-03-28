import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Sparkles, Youtube } from "lucide-react";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Start a Project | Eomeg Studio",
  description:
    "Start a premium project inquiry with Eomeg Studio. Share your goals, scope, timeline, and investment range.",
};

const shellClass = "mx-auto w-[min(1120px,calc(100%-1.5rem))] sm:w-[min(1120px,calc(100%-2.5rem))]";

const premiumDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-contact-display",
});

const premiumBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-contact-body",
});

export default function ContactPage() {
  return (
    <main className={`relative overflow-x-clip pb-16 text-[#1f2a44] ${premiumDisplay.variable} ${premiumBody.variable} font-[var(--font-contact-body)]`}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-5rem] left-[-4rem] hidden h-52 w-52 rounded-full bg-[#e8e0ff]/60 blur-3xl sm:block" />
        <div className="absolute top-[26%] right-[-4rem] hidden h-56 w-56 rounded-full bg-[#dceeff]/55 blur-3xl sm:block" />
        <div className="absolute bottom-[-6rem] left-1/3 hidden h-52 w-52 rounded-full bg-[#ffeaf5]/60 blur-3xl sm:block" />
      </div>

      <header className={`${shellClass} sticky top-3 z-20 mt-4`}>
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/70 bg-white/72 px-4 py-2 backdrop-blur-[4px] md:px-5 md:backdrop-blur-sm">
          <Link href="/" className="font-[var(--font-contact-display)] text-[1.65rem] leading-none font-semibold tracking-[-0.02em] text-[#2f365d]">
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
            <h1 className="contact-premium-title mt-4 max-w-4xl font-[var(--font-contact-display)] text-5xl leading-[0.95] font-semibold tracking-[-0.02em] text-[#1f2856] sm:text-6xl md:text-[4.8rem]">
              Premium inquiry for focused, high-impact creative work.
            </h1>
            <p className="mt-5 max-w-3xl text-[1.02rem] leading-relaxed font-medium text-[#4b5789] sm:text-lg">
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
      <style jsx global>{`
        .contact-premium-title {
          text-wrap: balance;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.72);
        }

        .contact-hero-wrap {
          isolation: isolate;
        }

        .contact-hero-art .hero-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(158, 176, 242, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(158, 176, 242, 0.2) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(circle at 70% 44%, black 20%, transparent 72%);
          opacity: 0.35;
        }

        .contact-hero-art .hero-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(26px);
        }

        .contact-hero-art .hero-glow-a {
          width: 230px;
          height: 230px;
          top: -48px;
          right: 42px;
          background: radial-gradient(circle, rgba(255, 132, 200, 0.26), rgba(255, 132, 200, 0));
        }

        .contact-hero-art .hero-glow-b {
          width: 210px;
          height: 210px;
          bottom: -54px;
          right: 132px;
          background: radial-gradient(circle, rgba(96, 165, 250, 0.26), rgba(96, 165, 250, 0));
        }

        .contact-hero-art .hero-arc {
          position: absolute;
          border: 1px solid rgba(183, 199, 248, 0.45);
          border-radius: 9999px;
        }

        .contact-hero-art .hero-arc-a {
          width: 300px;
          height: 300px;
          right: 24px;
          top: -118px;
        }

        .contact-hero-art .hero-arc-b {
          width: 210px;
          height: 210px;
          right: 172px;
          top: 112px;
          border-color: rgba(157, 182, 245, 0.38);
        }

        .orb {
          position: absolute;
          display: grid;
          place-items: center;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.66);
          color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 16px 28px rgba(49, 63, 116, 0.2), inset 0 0 22px rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(2px);
          animation: contactOrbFloat 9s ease-in-out infinite;
          transform: translateZ(0);
        }

        .orb-inline {
          position: relative;
          animation: none;
        }

        .orb::before {
          content: "";
          position: absolute;
          inset: 12% 14% auto auto;
          width: 26%;
          height: 26%;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.55);
          filter: blur(1px);
        }

        .orb::after {
          content: "";
          position: absolute;
          inset: auto 18% 14% auto;
          width: 20%;
          height: 20%;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.2);
        }

        .orb-lg {
          width: 108px;
          height: 108px;
        }

        .orb-md {
          width: 84px;
          height: 84px;
        }

        .orb-sm {
          width: 62px;
          height: 62px;
        }

        .orb-xs {
          width: 44px;
          height: 44px;
          font-size: 0.74rem;
        }

        .orb-instagram {
          background: radial-gradient(circle at 26% 24%, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.4) 14%, #ff6f73 46%, #ff478b 71%, #9957ff 100%);
        }

        .orb-x {
          background: radial-gradient(circle at 26% 22%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.35) 12%, #26304a 46%, #141722 100%);
        }

        .orb-facebook {
          background: radial-gradient(circle at 28% 22%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.36) 12%, #52a5ff 46%, #2562ff 100%);
        }

        .orb-youtube {
          background: radial-gradient(circle at 26% 24%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.34) 14%, #ff6a7a 46%, #ea1f52 100%);
        }

        .orb-linkedin {
          background: radial-gradient(circle at 26% 24%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.34) 14%, #57d0ff 46%, #1f87ff 100%);
        }

        .orb-clear {
          background: radial-gradient(circle at 26% 24%, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.42) 18%, rgba(176, 199, 255, 0.75) 55%, rgba(130, 156, 245, 0.92) 100%);
        }

        .orb-a {
          top: 6px;
          left: 148px;
          animation-delay: 0s;
        }

        .orb-b {
          top: 72px;
          left: 64px;
          animation-delay: -1.6s;
        }

        .orb-c {
          top: 134px;
          left: 210px;
          animation-delay: -0.8s;
        }

        .orb-d {
          top: 178px;
          left: 124px;
          animation-delay: -2.3s;
        }

        .orb-e {
          top: 230px;
          left: 260px;
          animation-delay: -1.1s;
        }

        .orb-f {
          top: 28px;
          left: 256px;
          animation-delay: -2.8s;
        }

        .orb-ring {
          position: absolute;
          border-radius: 9999px;
          border: 1px solid rgba(168, 188, 246, 0.44);
          animation: contactOrbSpin 22s linear infinite;
        }

        .ring-a {
          width: 232px;
          height: 232px;
          top: 32px;
          left: 52px;
        }

        .ring-b {
          width: 140px;
          height: 140px;
          top: 198px;
          left: 162px;
          animation-duration: 17s;
          animation-direction: reverse;
        }

        @keyframes contactOrbFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes contactOrbSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 767px) {
          .contact-hero-art .hero-grid {
            opacity: 0.22;
            mask-image: radial-gradient(circle at 48% 28%, black 24%, transparent 70%);
          }

          .contact-hero-art .hero-arc-a,
          .contact-hero-art .hero-arc-b {
            display: none;
          }

          .contact-hero-art .hero-glow-a,
          .contact-hero-art .hero-glow-b {
            filter: blur(18px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orb,
          .orb-ring {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#ced8ff] bg-gradient-to-b from-white to-[#fbfdff] px-3.5 py-2.5 text-sm text-[#2b3868] outline-none transition placeholder:text-[#98a5cf] focus:border-[#a9baf6] focus:ring-4 focus:ring-[#c2d0ff]/45";

function SocialOrb({ className, children }: { className: string; children: ReactNode }) {
  return <span className={className}>{children}</span>;
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
