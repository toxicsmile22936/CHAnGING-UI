import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ServiceBlock = {
  id: string;
  name: string;
  kicker: string;
  whatItIs: string;
  whoItsFor: string;
  included: string[];
  timeline: string;
  addOns: string[];
  investment: string;
};

const services: ServiceBlock[] = [
  {
    id: "brand-films",
    name: "Brand Films",
    kicker: "Narrative launch films with premium pacing and clear positioning.",
    whatItIs:
      "A cinematic film crafted around your brand story, product value, and launch moment. Direction stays focused on emotional pull and conversion clarity.",
    whoItsFor:
      "Founders, creative studios, and premium brands preparing a release, campaign, or milestone announcement.",
    included: [
      "Creative treatment and visual direction",
      "Story flow, edit, and pacing design",
      "Color grade, sound polish, and delivery exports",
    ],
    timeline: "10-18 business days depending on footage readiness",
    addOns: ["Script support", "Voiceover direction", "Campaign cutdown set"],
    investment: "Starting guidance: from $2,200",
  },
  {
    id: "short-form-content",
    name: "Short-form Content",
    kicker: "High-retention vertical edits designed for consistency and growth.",
    whatItIs:
      "A short-form system for reels, shorts, and social drops built around repeatable hooks, tight pacing, and brand-consistent finish quality.",
    whoItsFor:
      "Personal brands, educators, and product teams that publish weekly and need quality without slowing cadence.",
    included: [
      "Hook-first story structure",
      "Caption styling and rhythm edits",
      "Batch workflow and export presets",
    ],
    timeline: "Weekly or bi-weekly production cycles",
    addOns: ["Thumbnail direction", "Monthly content planning", "Performance review pass"],
    investment: "Starting guidance: from $1,400 / month",
  },
  {
    id: "portfolio-landing-pages",
    name: "Portfolio / Landing Pages",
    kicker: "Conversion-ready pages that feel refined, clear, and confidently premium.",
    whatItIs:
      "A focused web experience that presents your offer, proof, and next step with strong hierarchy, clean pacing, and elegant interaction.",
    whoItsFor:
      "Freelancers, studios, and product teams needing stronger trust and better inquiry quality from their web presence.",
    included: [
      "Information architecture and page narrative",
      "Mobile-first visual system and responsive build",
      "CTA structure aligned to buyer intent",
    ],
    timeline: "2-4 weeks based on scope depth",
    addOns: ["Additional pages", "CMS wiring", "Post-launch optimization sprint"],
    investment: "Starting guidance: from $2,800",
  },
  {
    id: "motion-graphics",
    name: "Motion Graphics",
    kicker: "Branded motion assets that add clarity and memorability to campaigns.",
    whatItIs:
      "A tailored motion set for intros, transitions, explainer moments, and social inserts that keeps visual language cohesive across channels.",
    whoItsFor:
      "Teams launching products, rebrands, or campaigns that need a stronger moving brand system.",
    included: [
      "Motion style frames and direction",
      "Animated titles, transitions, and overlays",
      "Delivery in reusable formats for repeated use",
    ],
    timeline: "7-14 business days",
    addOns: ["Lottie exports", "Template handoff", "Animation guideline mini-doc"],
    investment: "Starting guidance: from $1,200",
  },
  {
    id: "creative-direction",
    name: "Creative Direction",
    kicker: "Senior-level direction for brands that need one cohesive creative standard.",
    whatItIs:
      "Strategic and visual direction that aligns web, video, and launch assets under one premium point of view so your brand feels unified everywhere.",
    whoItsFor:
      "Founders and marketing leads who need a trusted partner to guide concept, quality bar, and execution decisions.",
    included: [
      "Offer and audience alignment sessions",
      "Creative roadmap and production priorities",
      "Ongoing reviews to maintain consistency",
    ],
    timeline: "Monthly advisory or campaign-length engagement",
    addOns: ["Team workshops", "Launch war-room support", "Vendor quality review"],
    investment: "Starting guidance: from $3,500 / month",
  },
];

const faqs = [
  {
    question: "How is scope finalized before we begin?",
    answer:
      "Every project begins with a scope alignment doc covering deliverables, milestones, revision rhythm, and communication flow. This keeps quality high and timelines predictable.",
  },
  {
    question: "Do you offer fixed packages?",
    answer:
      "I work with investment guidance, not rigid low-cost packages. Scope is tailored to your launch goals, content volume, and quality standard.",
  },
  {
    question: "What does the revision process look like?",
    answer:
      "Revision rounds are scoped up front based on engagement depth. Feedback is consolidated per round to keep momentum and protect craft quality.",
  },
  {
    question: "Can we combine web and video in one engagement?",
    answer:
      "Yes. Combined engagements are common when brand narrative and conversion flow need to stay consistent across channels.",
  },
  {
    question: "What is required from our side to start?",
    answer:
      "A clear objective, decision-maker availability, and core brand material are enough to begin. Anything missing can be mapped in kickoff.",
  },
];

export const metadata: Metadata = {
  title: "Services | Eomeg Studio",
  description:
    "Premium creative services by Eomeg Studio including brand films, short-form content, landing pages, motion graphics, and creative direction.",
};

const shellClass = "mx-auto w-[min(1120px,calc(100%-1.5rem))] sm:w-[min(1120px,calc(100%-2.5rem))]";

export default function ServicesPage() {
  return (
    <main className="relative overflow-x-clip pb-16 text-[#1f2a44]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-6rem] left-[-5rem] hidden h-56 w-56 rounded-full bg-[#e8e0ff]/60 blur-3xl sm:block" />
        <div className="absolute top-[24%] right-[-4rem] hidden h-64 w-64 rounded-full bg-[#dceeff]/55 blur-3xl sm:block" />
        <div className="absolute bottom-[-6rem] left-1/3 hidden h-56 w-56 rounded-full bg-[#ffeaf5]/60 blur-3xl sm:block" />
      </div>

      <header className={`${shellClass} sticky top-3 z-20 mt-4`}>
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/70 bg-white/70 px-4 py-2 backdrop-blur-[4px] md:px-5 md:backdrop-blur-sm">
          <Link href="/" className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-[#2f365d]">
            Eomeg<span className="text-[#9b8dff]">.</span>
          </Link>
          <nav className="hidden items-center gap-1 text-sm text-[#3d4876] sm:flex">
            <a href="#services" className="rounded-full px-3 py-1.5 transition hover:bg-[#e9eeff]">Services</a>
            <a href="#faq" className="rounded-full px-3 py-1.5 transition hover:bg-[#e9eeff]">FAQ</a>
            <a href="#proposal" className="rounded-full px-3 py-1.5 transition hover:bg-[#e9eeff]">Proposal</a>
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-[#cfd8ff] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#39457a] backdrop-blur-[2px] md:text-sm"
          >
            Request a Proposal
          </Link>
        </div>
      </header>

      <section className={`${shellClass} pt-10 pb-8 sm:pt-14`}>
        <div className="rounded-[2rem] border border-white/75 bg-white/65 p-6 shadow-[0_20px_50px_rgba(171,188,242,0.18)] backdrop-blur-[3px] md:p-10 md:backdrop-blur-sm">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#d4ddff] bg-white/85 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[#6574ad] uppercase">
            <Sparkles className="size-3.5" />
            Services
          </p>
          <h1 className="mt-4 max-w-4xl font-[var(--font-heading)] text-4xl leading-tight text-[#1f2856] sm:text-5xl md:text-6xl">
            Premium creative services built for brands that value taste and performance.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4b5789] sm:text-lg">
            Each engagement is tailored around outcomes, not commodity packaging. You get clear scope, elevated execution, and investment guidance designed for serious brand growth.
          </p>
        </div>
      </section>

      <section id="services" className={`${shellClass} scroll-mt-28 space-y-6 py-4 sm:scroll-mt-24`}>
        {services.map((service, idx) => (
          <article
            id={service.id}
            key={service.id}
            className="rounded-[1.8rem] border border-[#dbe3ff] bg-white/82 p-5 shadow-[0_14px_34px_rgba(176,191,244,0.14)] sm:p-6 md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-xs font-semibold tracking-[0.08em] text-[#7785b8] uppercase">
                  Service {String(idx + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-[var(--font-heading)] text-3xl leading-tight text-[#1f2856] md:text-[2.1rem]">
                  {service.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#556496]">{service.kicker}</p>
                <p className="mt-4 inline-flex rounded-full border border-[#ced8ff] bg-white/80 px-3 py-1 text-xs font-semibold text-[#49598f] backdrop-blur-[2px]">
                  {service.investment}
                </p>
              </div>

              <div className="space-y-5 md:col-span-8">
                <div>
                  <p className="text-xs font-semibold tracking-[0.08em] text-[#7483b6] uppercase">What it is</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#44527f] sm:text-[0.96rem]">{service.whatItIs}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.08em] text-[#7483b6] uppercase">Who it is for</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#44527f] sm:text-[0.96rem]">{service.whoItsFor}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.08em] text-[#7483b6] uppercase">What is included</p>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#3f4d7b]">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#7f78e6]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-3 rounded-2xl border border-[#d9e2ff] bg-white/70 p-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.08em] text-[#7483b6] uppercase">Expected timeline</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#43507d]">{service.timeline}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.08em] text-[#7483b6] uppercase">Optional add-ons</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {service.addOns.map((addon) => (
                        <span
                          key={addon}
                          className="rounded-full border border-[#ced8ff] bg-white/85 px-2.5 py-1 text-xs font-medium text-[#4c5b90] backdrop-blur-[2px]"
                        >
                          {addon}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="faq" className={`${shellClass} scroll-mt-28 py-14 sm:scroll-mt-24`}>
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-semibold tracking-[0.08em] text-[#7785b8] uppercase">FAQ</p>
          <h2 className="mt-2 text-center font-[var(--font-heading)] text-4xl leading-tight text-[#1f2856]">
            Buying clarity before kickoff
          </h2>
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="rounded-2xl border border-[#d8e1ff] bg-white/80 px-4 shadow-[0_10px_24px_rgba(176,191,244,0.1)] backdrop-blur-[2px] md:px-5 md:backdrop-blur-sm"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-[#243263] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-[#526194] sm:text-[0.95rem]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="proposal" className={`${shellClass} scroll-mt-28 pb-8 sm:scroll-mt-24`}>
        <div className="rounded-[2rem] border border-white/75 bg-gradient-to-br from-white/78 via-[#f7f4ff]/84 to-[#eef6ff]/84 p-6 shadow-[0_18px_48px_rgba(174,191,249,0.2)] backdrop-blur-[3px] sm:p-8 md:p-10 md:backdrop-blur-sm">
          <p className="text-xs font-semibold tracking-[0.08em] text-[#7785b8] uppercase">Final CTA</p>
          <h2 className="mt-3 max-w-3xl font-[var(--font-heading)] text-4xl leading-tight text-[#1f2856] sm:text-5xl">
            Ready to discuss your next release?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#556496] sm:text-base">
            Share your goal, timing, and intended outcome. You will receive a premium proposal with clear scope, timeline, and investment direction.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#bfcdfd] bg-white/86 px-5 py-2.5 text-sm font-semibold text-[#2f3a6a] backdrop-blur-[2px] transition hover:shadow-[0_10px_20px_rgba(176,191,244,0.18)]"
            >
              Request a Proposal <ArrowUpRight className="size-4" />
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
