import { VISION_COLLAGE } from "./generated/collage";
import { VISION_PHOTO_1 } from "./generated/photo1";
import { VISION_PHOTO_2 } from "./generated/photo2";

const photos = [
  {
    src: VISION_PHOTO_1,
    eyebrow: "Business",
    title: "Founder & Elite Team",
    text: "একটি শক্তিশালী digital-product company—যেখানে দক্ষ টিম ownership নিয়ে কাজ করে এবং founder সবচেয়ে গুরুত্বপূর্ণ সিদ্ধান্তে মনোযোগ দেয়।",
  },
  {
    src: VISION_PHOTO_2,
    eyebrow: "Family",
    title: "Peaceful Family Life",
    text: "নিজস্ব সুন্দর বাড়িতে জীবনসঙ্গী ও সন্তানকে নিয়ে একটি শান্ত, নিরাপদ, সুখী এবং মূল্যবোধকেন্দ্রিক পারিবারিক জীবন।",
  },
  {
    src: VISION_COLLAGE,
    eyebrow: "Assets · Service · Scale",
    title: "The Full 10.0 Life",
    text: "নিজস্ব বাড়ি ও গাড়ি, বড় সম্পদভিত্তি, মানুষের পাশে দাঁড়ানো এবং বিশ্বমানের কোম্পানিকে acquisition-ready পর্যায়ে নিয়ে যাওয়া।",
  },
];

export default function VisionGallery() {
  return (
    <section
      id="visuals"
      className="border-t border-white/10 bg-[#07130f] text-[#f8f3e7]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b66a]">
          Generated vision scenes
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
          আমি যে জীবনটি গড়ে তুলছি—তার দৃশ্যমান রূপ
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">
          প্রতিদিন এই ছবিগুলো দেখার উদ্দেশ্য শুধু স্বপ্ন দেখা নয়; আজকের কাজ,
          অভ্যাস এবং সিদ্ধান্তকে ভবিষ্যতের পরিচয়ের সঙ্গে মিলিয়ে নেওয়া।
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d2119]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-black/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#d7b66a]">
                  {photo.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{photo.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {photo.text}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-white/35">
          AI-generated visualization images based on the uploaded reference
          photograph. এগুলো ভবিষ্যৎ লক্ষ্যকে কল্পনা করার জন্য তৈরি, কোনো বর্তমান
          সম্পদ বা অর্জনের প্রমাণ নয়।
        </p>
      </div>
    </section>
  );
}
