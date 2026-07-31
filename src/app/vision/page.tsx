import type { Metadata } from "next";
import { HERO_PHOTO } from "./photo";

export const metadata: Metadata = {
  title: "My 10.0 Life Vision | Rahmatullah",
  description:
    "A private visual vision board for business, family, wealth, team, service, and freedom.",
};

const metrics = [
  ["৳৩০L–৳১Cr", "মাসিক digital-product income"],
  ["$100M+", "দীর্ঘমেয়াদি company valuation"],
  ["৳১০০Cr", "real-estate portfolio vision"],
  ["A-Team", "founder-independent operations"],
];

const visions = [
  {
    number: "01",
    label: "Business Empire",
    title: "ডিজিটাল প্রোডাক্ট ও মোবাইল অ্যাপসের শক্তিশালী পোর্টফোলিও",
    text: "আমি এমন products তৈরি ও পরিচালনা করছি, যেগুলো মানুষের বাস্তব সমস্যা সমাধান করে, recurring revenue তৈরি করে এবং বিশ্ববাজারে scale করে।",
  },
  {
    number: "02",
    label: "Company Value",
    title: "$100M+ ভ্যালুয়েশনের কাছাকাছি বিক্রয়যোগ্য কোম্পানি",
    text: "Technology, revenue, governance, brand এবং leadership এমনভাবে গড়ে উঠেছে—যাতে কোম্পানি শুধু আমার উপস্থিতির ওপর নির্ভর না করে।",
  },
  {
    number: "03",
    label: "Elite Team",
    title: "আমার চেয়েও দক্ষ ও দায়িত্বশীল মানুষদের দল",
    text: "আমার টিম outcome বোঝে, ownership নেয়, সঠিক সিদ্ধান্ত নেয় এবং আমার প্রতিটি নির্দেশের অপেক্ষা না করেই কাজ এগিয়ে নেয়।",
  },
  {
    number: "04",
    label: "Assets & Freedom",
    title: "নিজস্ব বাড়ি, একাধিক গাড়ি ও আয়-উৎপাদনকারী সম্পদ",
    text: "আমি business income-কে নিরাপদ liquidity, strategic reinvestment এবং income-producing real estate-এ রূপান্তর করছি।",
  },
];

const identity = [
  "আমি একজন সুস্থ, স্থির ও দূরদর্শী technology founder।",
  "আমি গুরুত্বপূর্ণ কাজ শেষ করি; নতুন আকর্ষণে বারবার দিক পরিবর্তন করি না।",
  "আমার business system, leadership এবং data দিয়ে চলে।",
  "আমি পরিবার, ঈমান, স্বাস্থ্য ও চরিত্রকে সাফল্যের মূল্য হিসেবে বিসর্জন দিই না।",
  "আমি মানুষকে শুধু সাময়িক টাকা নয়—সম্ভব হলে টেকসই সমাধান দিই।",
];

const bridge = [
  ["One flagship", "একটি flagship product-কে প্রধান growth engine করা"],
  ["Revenue proof", "Acquisition, activation, retention ও pricing metric স্থির করা"],
  ["Founder freedom", "SOP, dashboard, decision rule ও delegated ownership বসানো"],
  ["Asset discipline", "Income allocation, compliance ও investment policy লেখা"],
];

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function VisionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07130f] text-[#f8f3e7] selection:bg-[#d7b66a] selection:text-[#07130f]">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07130f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[#d7b66a]/60 text-[#d7b66a]">10</span>
            My 10.0 Life
          </a>
          <div className="hidden gap-6 text-sm text-white/60 md:flex">
            <a className="hover:text-white" href="#vision">Vision</a>
            <a className="hover:text-white" href="#family">Family</a>
            <a className="hover:text-white" href="#impact">Impact</a>
            <a className="hover:text-white" href="#bridge">6-Month Bridge</a>
          </div>
          <span className="rounded-full border border-[#d7b66a]/30 bg-[#d7b66a]/10 px-3 py-1.5 text-xs text-[#ecd596]">
            The life I am building
          </span>
        </div>
      </nav>

      <section id="top" className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(215,182,106,0.18),transparent_30%),radial-gradient(circle_at_5%_90%,rgba(47,119,86,0.22),transparent_34%)]" />
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-20">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b66a]">
              <span className="h-px w-10 bg-current" /> Rahmatullah&apos;s living vision board
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-8xl">
              সম্পদ, স্বাধীনতা ও
              <span className="block font-serif italic text-[#d7b66a]">মানুষের উপকার।</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              আমি একটি বড় technology business গড়ে তুলছি—যেখানে digital products ও mobile apps মানুষের বাস্তব সমস্যা সমাধান করে, শক্তিশালী আয় তৈরি করে এবং পরিবার ও সমাজের জন্য দীর্ঘস্থায়ী কল্যাণের উৎস হয়।
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#vision" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b66a] px-6 py-3.5 text-sm font-semibold text-[#07130f] hover:bg-[#edd596]">
                Enter the vision <Arrow />
              </a>
              <a href="#bridge" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 hover:border-white/35 hover:text-white">
                See the reality bridge
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
              {metrics.map(([value, label]) => (
                <div key={label} className="bg-[#0a1a14]/95 p-4 sm:p-5">
                  <div className="text-xl font-semibold text-[#f3dda8] sm:text-2xl">{value}</div>
                  <div className="mt-1 text-[11px] leading-4 text-white/40">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-[#2c7655]/30 blur-3xl" />
            <figure className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HERO_PHOTO} alt="Rahmatullah with his life partner" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130f] via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.26em] text-[#ecd596]">My why</p>
                  <p className="mt-3 text-xl font-medium leading-8 sm:text-2xl">
                    একটি শান্ত পরিবার, একটি অর্থবহ ব্যবসা এবং এমন সম্পদ—যা মানুষের জীবন সহজ করে।
                  </p>
                </figcaption>
              </div>
            </figure>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#d7b66a]/30 bg-[#10251c]/95 p-4 shadow-xl sm:-left-7 sm:p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Identity</p>
              <p className="mt-1 text-sm font-medium">Builder · Provider · Problem Solver</p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="border-y border-white/10 bg-[#0a1a14]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b66a]">Four pillars</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">আমার 10.0 Life-এর ভিত্তি</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/50 lg:justify-self-end">
              Vision শুধু বড় সংখ্যা নয়। প্রতিটি সংখ্যার পেছনে value creation, disciplined execution, trustworthy leadership এবং measurable impact থাকতে হবে।
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {visions.map((item) => (
              <article key={item.number} className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d2119] p-6 transition hover:-translate-y-1 hover:border-[#d7b66a]/35 sm:p-8">
                <span className="absolute right-5 top-2 font-serif text-8xl italic text-white/[0.035]">{item.number}</span>
                <p className="relative text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b66a]">{item.label}</p>
                <h3 className="relative mt-4 max-w-xl text-2xl font-semibold leading-9">{item.title}</h3>
                <p className="relative mt-4 max-w-xl text-sm leading-7 text-white/50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="family" className="relative">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-28">
          <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(215,182,106,.28),transparent_28%),linear-gradient(145deg,#173e2d,#08130f_72%)] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#d7b66a]">Home is the first success</p>
            <blockquote className="mt-20 text-3xl font-medium leading-[1.35] tracking-[-0.025em] sm:text-4xl">
              “আমার ঘর শান্ত, নিরাপদ ও ভালোবাসাপূর্ণ। ব্যবসার সাফল্য আমার পরিবারের সময় কেড়ে নেয় না।”
            </blockquote>
          </div>
          <div className="self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b66a]">Family & lifestyle</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">সুন্দর বাড়ি, স্নেহময় পরিবার ও স্বাধীন সময়</h2>
            <p className="mt-6 text-base leading-8 text-white/60">
              আমার নিজস্ব আরামদায়ক বাড়ি, প্রয়োজন ও পছন্দ অনুযায়ী একাধিক গাড়ি এবং জীবনসঙ্গী ও সন্তানদের সঙ্গে আনন্দময় পারিবারিক জীবন আছে। আমরা একসঙ্গে সময় কাটাই, ভ্রমণ করি, শিখি এবং কৃতজ্ঞতার সঙ্গে জীবন উপভোগ করি।
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Daily protected family time", "শান্ত ও নিরাপদ নিজস্ব বাড়ি", "স্বাস্থ্য ও শিক্ষায় বিনিয়োগ", "সম্পদের সঙ্গে নম্রতা"].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#d7b66a]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-[#efe6d2] text-[#102018]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6f765e]">Service & legacy</p>
          <h2 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            মানুষ আমার কাছে শুধু টাকা নয়—একটি কার্যকর সমাধান পায়।
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#4a584f]">
            আত্মীয়স্বজন, প্রতিবেশী ও অসহায় মানুষদের সাহায্য করি মর্যাদা রক্ষা করে। জরুরি সহায়তার পাশাপাশি শিক্ষা, চিকিৎসা, কর্মসংস্থান ও আয় তৈরির মতো টেকসই পথ খুঁজে দিই।
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["Family safety net", "আত্মীয়দের চিকিৎসা, শিক্ষা ও সংকটে স্বচ্ছ সহায়তা।"],
              ["Local problem fund", "যাচাইকৃত স্থানীয় সমস্যার জন্য নিয়মিত impact budget।"],
              ["Opportunity, not dependency", "Skills, tools, কাজ ও mentorship দিয়ে স্বাবলম্বী করা।"],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-3xl border border-[#102018]/10 bg-white/55 p-7">
                <span className="text-sm font-semibold text-[#94783e]">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#526057]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1a14]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b66a]">Who I am becoming</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Identity before outcome</h2>
          </div>
          <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-[#0d2119] px-6 sm:px-8">
            {identity.map((text, index) => (
              <div key={text} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
                <span className="font-serif text-2xl italic text-[#d7b66a]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-8 text-white/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bridge" className="relative">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b66a]">The reality bridge</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">আগামী ৬ মাসে স্বপ্ন নয়—প্রমাণ তৈরি</h2>
            <p className="mt-6 text-base leading-8 text-white/50">
              বড় vision দীর্ঘমেয়াদি। আগামী ছয় মাসের কাজ হলো এমন business evidence তৈরি করা, যা সেই vision-কে বাস্তবসম্মতভাবে এগিয়ে নেয়।
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {bridge.map(([label, title], index) => (
              <article key={label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b66a]">{label}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-xs text-white/40">{index + 1}</span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold leading-9">{title}</h3>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-[#d7b66a]/25 bg-[#0a1a14] px-6 py-12 text-center sm:px-10">
            <p className="font-serif text-3xl italic text-[#f3dda8] sm:text-4xl">Build value. Protect family. Create freedom. Serve people.</p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50">
              প্রতি শুক্রবার revenue, product usage, shipped milestones, team ownership এবং protected family time review করা হবে।
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050d0a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-white/40 sm:px-8 md:flex-row md:justify-between lg:px-12">
          <p>My 10.0 Life · Private visual alignment system</p>
          <p>Vision → Decisions → Systems → Evidence</p>
        </div>
      </footer>
    </main>
  );
}
