const DEPOSIT_LINK = "#"; // TODO: replace with confirmed Payoneer deposit link.
const LOOM_LINK = "#"; // TODO: replace with Loom walkthrough link.

const VALUE_PROPS = [
  {
    title: "Speed",
    copy:
      "Five focused build days: kickoff Monday, live handover Friday—no waiting on bloated sprints.",
  },
  {
    title: "Clarity",
    copy:
      "Direct founder-to-founder collaboration, precise messaging, and conversion-focused UX from day one.",
  },
  {
    title: "Conversion",
    copy:
      "Sharp copy, strategic CTAs, Core Web Vitals tuning, and analytics wired before handoff.",
  },
];

const DELIVERABLES = [
  "Hero, value, proof, pricing, FAQ, and CTA funnels",
  "Social proof modules and testimonial slots",
  "Google Analytics 4 + Meta Pixel implementation",
  "Baseline SEO setup (titles, meta, schema, sitemap)",
  "Core Web Vitals pass with Lighthouse report",
  "One revision loop post-handover",
  "Technical handover with code repo + loom walkthrough",
];

const STEPS = [
  {
    day: "Day 1",
    title: "Kickoff, voice, wire",
    detail:
      "60-minute strategy session, messaging alignment, wireframe lock, asset checklist.",
  },
  {
    day: "Day 3",
    title: "Preview, Lighthouse, iterate",
    detail:
      "Interactive build review, performance snapshot, fast revisions based on priority feedback.",
  },
  {
    day: "Day 5",
    title: "Final handover",
    detail:
      "Production-ready Next.js + Tailwind code, analytics stitched in, loom walkthrough, and docs.",
  },
];

const PACKAGES = [
  {
    name: "Core",
    price: "$1,900",
    description: "Launch-ready landing page sprint, purpose-built for founders and lean teams.",
    highlights: [
      "Hero-to-CTA funnel with mobile parity",
      "Copywriting + visual direction",
      "GA4 + Meta Pixel wiring",
      "Performance tuning + revision loop",
    ],
    recommended: true,
  },
  {
    name: "Executive",
    price: "$7,500",
    description: "Advanced experimentation layer for teams with complex funnels.",
    highlights: [
      "Everything in Core",
      "CRO testing roadmap + 3 variants",
      "CMS ready sections + content guide",
      "Post-launch analytics guardrails (30 days)",
    ],
    recommended: false,
  },
];

const FAQ = [
  {
    question: "Do you create the content too?",
    answer:
      "Yes. I handle positioning, copy, and layout. You supply product context, offers, and any must-have assets.",
  },
  {
    question: "Can we add a CMS later?",
    answer:
      "Absolutely. The build is Next.js + Tailwind with clean components, so plugging into a CMS or headless backend later is straightforward.",
  },
  {
    question: "What’s the payment and refund policy?",
    answer:
      "A 40% deposit secures your week. If I miss the Day-3 preview or Day-5 handover, you get the deposit back—simple.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "5-Day Landing Page Sprint",
  provider: {
    "@type": "Organization",
    name: "Digitalcare",
    email: "rahmatullahzisan@gmail.com",
  },
  serviceType: "Landing Page Design and Development",
  areaServed: "Global",
  offers: PACKAGES.map((pkg) => ({
    "@type": "Offer",
    price: pkg.price.replace(/[^0-9.]/g, ""),
    priceCurrency: "USD",
    name: pkg.name,
    description: pkg.description,
  })),
  description:
    "Digitalcare delivers a conversion-focused landing page in five days, including analytics integration, technical SEO, and performance tuning.",
  url: "https://digitalcare.example/landing-sprint",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 lg:px-12 lg:pt-20">
          <section className="space-y-12">
            <div className="grid items-start gap-10 lg:grid-cols-[2fr,1fr]">
              <div className="space-y-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Digitalcare · Rapid Conversion Builds
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                  5-Day Landing Page Sprint
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
                  Ship a focused, conversion-primed landing page in five days.
                  Direct collaboration, sharp positioning, Core Web Vitals
                  tuning, and analytics wired before you go live.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-700"
                    href={DEPOSIT_LINK}
                    target={DEPOSIT_LINK.startsWith("http") ? "_blank" : undefined}
                    rel={DEPOSIT_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    Lock Your 5-Day Slot (40% Deposit)
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-8 py-3 text-base font-semibold text-zinc-800 transition hover:border-zinc-400 hover:text-zinc-900"
                    href={LOOM_LINK}
                    target={LOOM_LINK.startsWith("http") ? "_blank" : undefined}
                    rel={LOOM_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    Watch 60-sec Preview
                  </a>
                </div>
                <p className="text-sm text-zinc-500">
                  Availability is limited. A quick deposit locks your build week
                  and kicks off onboarding within 24 hours.
                </p>
              </div>
              <div className="space-y-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Recent Collaborators
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm font-medium text-zinc-500 sm:grid-cols-3">
                  {["SaaS Co", "Growth Lab", "Fintech X", "Opsly", "FunnelIQ", "Northbound"].map(
                    (label) => (
                      <div
                        key={label}
                        className="flex h-16 items-center justify-center rounded-lg border border-dashed border-zinc-200 bg-white"
                      >
                        {label}
                      </div>
                    ),
                  )}
                </div>
                <p className="text-xs text-zinc-500">
                  Logos used with permission. Full case studies available after
                  kickoff.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6" aria-labelledby="value-props">
            <div className="flex items-baseline justify-between gap-4">
              <h2
                id="value-props"
                className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
              >
                Why founders choose the sprint
              </h2>
              <span className="text-sm text-zinc-500">Speed · Clarity · Conversion</span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {VALUE_PROPS.map((prop) => (
                <article
                  key={prop.title}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {prop.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {prop.copy}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-8" aria-labelledby="deliverables">
            <h2
              id="deliverables"
              className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
            >
              What you get in five days
            </h2>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <ul className="grid gap-4 text-base text-zinc-700 sm:grid-cols-2">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-zinc-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 text-white shadow-lg">
                <h3 className="text-lg font-semibold">Handed over ready to launch</h3>
                <p className="mt-4 text-sm text-zinc-200">
                  You get the repo, documentation, analytics IDs, and an async
                  loom walkthrough. Deployment to Vercel can be handled on
                  request during Day-5.
                </p>
                <p className="mt-6 text-sm text-zinc-400">
                  Need ongoing experiments or CMS integration? The Executive tier
                  layers in experimentation and modular content architecture.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8" aria-labelledby="timeline">
            <div className="flex items-center justify-between gap-4">
              <h2
                id="timeline"
                className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
              >
                Your 5-day plan
              </h2>
              <span className="text-sm text-zinc-500">Timeline locked with your deposit</span>
            </div>
            <ol className="relative grid gap-12 border-l border-zinc-200 pl-8 md:grid-cols-3 md:border-l-0 md:pl-0 md:[&>*]:border-l md:[&>*]:border-zinc-200 md:[&>*]:pl-8">
              {STEPS.map((step, index) => (
                <li
                  key={step.day}
                  className="relative flex flex-col gap-3"
                >
                  <span className="absolute -left-[37px] hidden h-3 w-3 rounded-full border-2 border-white bg-zinc-900 md:block" />
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {step.day}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {step.detail}
                  </p>
                  <span className="hidden text-xs uppercase tracking-[0.3em] text-zinc-400 md:block">
                    {`Day ${index + 1}`}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-10" aria-labelledby="proof">
            <div className="flex items-center justify-between gap-4">
              <h2
                id="proof"
                className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
              >
                Proof it performs
              </h2>
              <span className="text-sm text-zinc-500">Performance first, polish second</span>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-md">
                <div className="grid gap-4 sm:grid-cols-2">
                  {["Before sprint", "After sprint"].map((label) => (
                    <div
                      key={label}
                      className="space-y-3 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-center"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                        {label}
                      </p>
                      <div className="flex h-40 items-center justify-center rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-100 text-sm font-medium text-zinc-600">
                        Lighthouse screenshot
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-600">
                  Typical uplift: +30% to +50% on performance and interaction
                  scores. Your sprint includes before/after snapshots and the raw
                  reports.
                </p>
              </div>
              <blockquote className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
                <p className="text-lg font-medium text-zinc-800">
                  “Day-3 preview hit 92 on mobile Lighthouse. We flipped it live
                  Friday and doubled demo signups in two weeks.”
                </p>
                <footer className="text-sm text-zinc-500">
                  Alex Romero · Founder, Growth Lab
                </footer>
              </blockquote>
            </div>
          </section>

          <section className="space-y-8" aria-labelledby="pricing">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="pricing"
                  className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
                >
                  Choose your sprint package
                </h2>
                <p className="mt-2 text-sm text-zinc-600">
                  Both options include the full five-day cadence and async support
                  via email between sessions.
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                Pricing in USD
              </span>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {PACKAGES.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`relative flex h-full flex-col gap-6 rounded-3xl border p-8 shadow-sm transition ${
                    pkg.recommended
                      ? "border-zinc-900 bg-zinc-900 text-white shadow-xl"
                      : "border-zinc-200 bg-white text-zinc-900"
                  }`}
                >
                  {pkg.recommended && (
                    <span className="absolute right-6 top-6 rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900">
                      Recommended
                    </span>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-3xl font-semibold">{pkg.name}</h3>
                    <p className="text-4xl font-semibold">{pkg.price}</p>
                    <p
                      className={`text-sm ${
                        pkg.recommended ? "text-zinc-200" : "text-zinc-600"
                      }`}
                    >
                      {pkg.description}
                    </p>
                  </div>
                  <ul
                    className={`space-y-3 text-sm ${
                      pkg.recommended ? "text-zinc-100" : "text-zinc-700"
                    }`}
                  >
                    {pkg.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className={`mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                            pkg.recommended ? "bg-white" : "bg-zinc-900"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <a
                      href={DEPOSIT_LINK}
                      className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                        pkg.recommended
                          ? "bg-white text-zinc-900 hover:bg-zinc-100"
                          : "bg-zinc-900 text-white hover:bg-zinc-700"
                      }`}
                      target={DEPOSIT_LINK.startsWith("http") ? "_blank" : undefined}
                      rel={DEPOSIT_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      Book this sprint
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-8" aria-labelledby="faq">
            <div className="flex items-start justify-between gap-4">
              <h2
                id="faq"
                className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
              >
                FAQ
              </h2>
              <span className="text-sm text-zinc-500">
                Still unsure? Email{" "}
                <a
                  href="mailto:rahmatullahzisan@gmail.com"
                  className="font-semibold text-zinc-900 underline-offset-4 hover:underline"
                >
                  rahmatullahzisan@gmail.com
                </a>
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {FAQ.map((item) => (
                <article
                  key={item.question}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="border-t border-zinc-200 bg-zinc-900">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 text-white sm:px-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to lock your build week?
            </h2>
            <p className="max-w-2xl text-sm text-zinc-300">
              Drop the 40% deposit to reserve your sprint. If Digitalcare misses
              the handover window, you get it back—no hoops.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={DEPOSIT_LINK}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-zinc-900 transition hover:bg-zinc-200"
                target={DEPOSIT_LINK.startsWith("http") ? "_blank" : undefined}
                rel={DEPOSIT_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                Lock Your 5-Day Slot (40% Deposit)
              </a>
              <a
                href="mailto:rahmatullahzisan@gmail.com"
                className="text-sm font-medium text-zinc-200 underline-offset-4 hover:underline"
              >
                Or ask a quick question
              </a>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
